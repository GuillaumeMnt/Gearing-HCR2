const log = require("./log");

const configuration = {
    regular: {
        max: 15,
        total: 2018,
        sellCoeff: 1,
        buyCoeff: 10
    },
    gold: {
        max: 10,
        total: 368,
        sellCoeff: 5,
        buyCoeff: 50
    },
    epic: {
        max: 7,
        total: 134,
        sellCoeff: 40,
        buyCoeff: 400,
    },
    legendary: {
        max: 4,
        total: 30,
        sellCoeff: 400,
        buyCoeff: 4000,
    },
}

const gearingLevel = [3, 10, 17, 25, 34, 45, 58, 76, 100, 140, 200, 280, 410, 620];

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

detail = (gearing, buyCoeff, sellCoeff) => {

    if (gearing > 0) {
        return `Tu dois récolter ${numberWithCommas(gearing)} pièces d'améliorations, cela représente ${numberWithCommas(gearing * buyCoeff)} engrenages pour avoir l'amélioration max\n\n${log.randomThought()}`;
    } else if (gearing === 0) {
        return `Tu as pile ce qu'il te faut pour être au max\n\n${log.randomThought()}`
    } else {
        return `Tu as ${numberWithCommas(-gearing)} pièces d'améliorations en trop, tu peux récupérer ${numberWithCommas(-gearing * sellCoeff)} engrenages\n\n${log.randomThought()}`;
    }
}

algorithm = (type, level, remaining) => {
    let remainingGear = 0;
    let coeffSell = 1;
    let coeffBuy = 1;
    let max = 0;

    switch (type) {
        case "classique": 
            coefSell = configuration.regular.sellCoeff;
            coeffBuy = configuration.regular.buyCoeff;
            max = configuration.regular.max;
            break
        case "or":
            coeffSell = configuration.gold.sellCoeff;
            coeffBuy = configuration.gold.buyCoeff;
            max = configuration.gold.max;
            break
        case "epic":
            coeffSell = configuration.epic.sellCoeff;
            coeffBuy = configuration.epic.buyCoeff;
            max = configuration.epic.max;
            break
        case "legendaire":
            coeffSell = configuration.legendary.sellCoeff;
            coeffBuy = configuration.legendary.buyCoeff;
            max = configuration.legendary.max;
            break
    }

    for (let i = level; i < max; i++) {
        remainingGear += gearingLevel[i - 1];
    }
    remainingGear -= remaining;

    return detail(remainingGear, coeffBuy, coeffSell);
}

exports.algorithm = algorithm;