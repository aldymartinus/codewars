const humanYearsCatYearsDogYears = humanYears => {
    const petYears = (humanYears, isCat) => {
        let age = 0;
        if (humanYears === 1) {
            age = 15;
        }
        else if (humanYears === 2) {
            age = 24;
        }
        else {
            age = 24;
            for (let i = 0; i < humanYears - 2; i++) {
                isCat === true ? age += 4 : age += 5;
            }
        };
        return age;
    };

    return [humanYears, petYears(humanYears, true), petYears(humanYears, false)];
};