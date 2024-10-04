const axios = require('axios');

class NIKTranslator {
    constructor() {
        this.location = null;
    }

    async fetchLocationAsset() {
        if (!this.location) {
            const response = await axios.get('https://raw.githubusercontent.com/ShennBoku/NIK-Translator/main/wilayah.json');
            this.location = response.data;
        }
        return this.location;
    }

    getCurrentYear() {
        return parseInt(new Date().getFullYear().toString().slice(-2), 10);
    }

    getNIKYear(nik) {
        return parseInt(nik.substr(10, 2), 10);
    }

    getNIKDate(nik) {
        return parseInt(nik.substr(6, 2), 10);
    }

    getNIKDateFull(nik, isFemale) {
        let date = parseInt(nik.substr(6, 2), 10);
        if (isFemale) date -= 40;
        return (date > 10) ? date.toString() : `0${date}`;
    }

    getSubdistrictPostalCode(nik, location) {
        return location.kecamatan[nik.substr(0, 6)].split(' -- ');
    }

    getProvince(nik, location) {
        return location.provinsi[nik.substr(0, 2)];
    }

    getCity(nik, location) {
        return location.kabkot[nik.substr(0, 4)];
    }

    getGender(date) {
        return date > 40 ? 'PEREMPUAN' : 'LAKI-LAKI';
    }

    getBornMonth(nik) {
        return parseInt(nik.substr(8, 2), 10);
    }

    getBornMonthFull(nik) {
        return nik.substr(8, 2);
    }

    getBornYear(nikYear, currentYear) {
        if (nikYear < currentYear) {
            return nikYear > 10 ? `20${nikYear}` : `200${nikYear}`;
        } else {
            return nikYear > 10 ? `19${nikYear}` : `190${nikYear}`;
        }
    }

    getUniqueCode(nik) {
        return nik.substr(12, 4);
    }

    getAge(birthday) {
        const birthDate = new Date(birthday);
        const today = new Date();
        const ageDiff = today - birthDate;
        const ageDate = new Date(ageDiff);
        return {
            years: Math.abs(ageDate.getUTCFullYear() - 1970),
            months: ageDate.getUTCMonth(),
            days: ageDate.getUTCDate() - 1
        };
    }

    getNextBirthday(birthday) {
        const today = new Date();
        const birthDate = new Date(birthday);
        const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

        if (today > nextBirthday) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const diff = nextBirthday - today;
        const diffDate = new Date(diff);

        const years = diffDate.getUTCFullYear() - 1970;
        const months = diffDate.getUTCMonth();
        const days = diffDate.getUTCDate() - 1;

        let txt = '';
        if (years !== 0) txt += `${years} tahun `;
        if (months !== 0) txt += `${months} bulan `;
        if (days !== 0) txt += `${days} hari `;
        txt += 'lagi';

        return {
            text: txt,
            year: years,
            month: months,
            day: days
        };
    }

    getZodiac(date, month, isFemale) {
        if (isFemale) date -= 40;
        if ((month === 1 && date >= 20) || (month === 2 && date < 19)) return 'Aquarius';
        if ((month === 2 && date >= 19) || (month === 3 && date < 21)) return 'Pisces';
        if ((month === 3 && date >= 21) || (month === 4 && date < 20)) return 'Aries';
        if ((month === 4 && date >= 20) || (month === 5 && date < 21)) return 'Taurus';
        if ((month === 5 && date >= 21) || (month === 6 && date < 22)) return 'Gemini';
        if ((month === 6 && date >= 21) || (month === 7 && date < 23)) return 'Cancer';
        if ((month === 7 && date >= 23) || (month === 8 && date < 23)) return 'Leo';
        if ((month === 8 && date >= 23) || (month === 9 && date < 23)) return 'Virgo';
        if ((month === 9 && date >= 23) || (month === 10 && date < 24)) return 'Libra';
        if ((month === 10 && date >= 24) || (month === 11 && date < 23)) return 'Scorpio';
        if ((month === 11 && date >= 23) || (month === 12 && date < 22)) return 'Sagitarius';
        if ((month === 12 && date >= 22) || (month === 1 && date < 19)) return 'Capricorn';
        return 'Zodiak tidak ditemukan';
    }

    async parse(nik) {
        const location = await this.fetchLocationAsset();

        if (this.validate(nik, location)) {
            const currentYear = this.getCurrentYear();
            const nikYear = this.getNIKYear(nik);
            const nikDate = this.getNIKDate(nik);
            const gender = this.getGender(nikDate);

            const nikDateFull = this.getNIKDateFull(nik, gender === 'PEREMPUAN');

            const [subdistrict, postalCode] = this.getSubdistrictPostalCode(nik, location);
            const province = this.getProvince(nik, location);
            const city = this.getCity(nik, location);

            const bornMonth = this.getBornMonth(nik);
            const bornMonthFull = this.getBornMonthFull(nik);
            const bornYear = this.getBornYear(nikYear, currentYear);

            const uniqueCode = this.getUniqueCode(nik);
            const zodiac = this.getZodiac(nikDate, bornMonth, gender === 'PEREMPUAN');
            const age = this.getAge(`${bornYear}-${bornMonthFull}-${nikDateFull}`);
            const nextBirthday = this.getNextBirthday(`${bornYear}-${bornMonthFull}-${nikDateFull}`);

            return {
                nik: nik ?? '',
                uniqueCode: uniqueCode ?? '',
                gender: gender ?? '',
                bornDate: `${nikDateFull}-${bornMonthFull}-${bornYear}` ?? '',
                age: {
                    text: `${age.years} tahun ${age.months} bulan ${age.days} hari`,
                    year: age.years,
                    month: age.months,
                    days: age.days
                },
                nextBirthday,
                zodiac: zodiac ?? '',
                province: province ?? '',
                city: city ?? '',
                subdistrict: subdistrict ?? '',
                postalCode: postalCode ?? ''
            };
        } else {
            return false;
        }
    }

    validate(nik, location) {
        return nik.length === 16 &&
            location.provinsi[nik.substr(0, 2)] !== undefined &&
            location.kabkot[nik.substr(0, 4)] !== undefined &&
            location.kecamatan[nik.substr(0, 6)] !== undefined;
    }
}
module.exports = { NIKTranslator }

// simpel cara pakai scraper nya
/* async function main() {
    const translator = new NIKTranslator();

    const nik = '7371131603550001';
    try {
        const result = await translator.parse(nik);

        if (result) {
            console.log('NIK DETAIL', JSON.stringify(result, null, 2));
        } else {
            console.log('Invalid NIK!');
        }
    } catch (error) {
        console.error('Error parsing NIK:', error.message);
    }
}

main();*/