const ownedCatAndDog = (catYears, dogYears) => {
    const currentAge = (years, isCat) => {
        let span = 0;
        let age = years;
        let range = [15, 9];
        let constraint = () => {
            if (isCat) return age % 4 > 0 ? 4 : 0;
            return age % 5 > 0 ? 5 : 0;
        };

        if (age < 15) return 0;
        else if (age < 24) return 1;
        else if (age < 28) return 2;
        else {
            while (age > constraint()) {
                if (span < 2) {
                    age -= range[span]
                    span++;
                }
                else {
                    age -= isCat ? 4 : 5;
                    span++;
                };
            };
        }
    
        return span;
    };
    
    return [currentAge(catYears, true), currentAge(dogYears, false)];
}; 