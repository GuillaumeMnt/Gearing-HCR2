const fs = require('fs');

log = (input) => {

    let time = Date()
    let data = `${time} - ${input.author} - "${input.log}"\n`;

    fs.appendFile("./log", data, (err) => {
        if (err) throw err;
    });        
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
