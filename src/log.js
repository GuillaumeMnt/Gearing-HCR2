const fs = require('fs');

const thoughtArray = [
    'La mini jeep est sous-côté',
    `One, Two, Three, viva l'... French Power !`,
    'Hacking in progress',
    `Qu'est ce qui est jaune et qui attend ?`,
    `Conseil : Ne broyez pas avant que ce soit au max ... à part pour l'alunisseur`,
    'Fingersoft ou le doigt mou',
    `Los Angeles c'est sûrcôté`,
];

log = (input) => {

    let time = Date()
    let data = `${time} - ${input.author} - "${input.log}"\n`;

    fs.appendFile("./log", data, (err) => {
        if (err) throw err;
    });        
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomThought = () => {
    const length = thoughtArray.length
    const index = getRandomInt(0, length - 1)

    return thoughtArray[index]
}

const messageArg = `
Pour utiliser ***Gearing-HCR2*** :
\`\`\`
    ![type] [niveau] [nombre de pièce actuelle]

    type : 
        common - commun - classique
        rare - gold - or
        epic - epique
        legendary - legendaire

    niveau :
        niveau de l'amélioration
    
    nombre de pièce :
        Le nombre que vous voyez affiché sur votre pièce
\`\`\`
Exemple : 
\`\`\`!epic 4 21\`\`\`

Developed by GuillaumeMnt - JesseMcFile
`;

exports.log = log;
exports.messageArg = messageArg;
exports.randomThought = randomThought
