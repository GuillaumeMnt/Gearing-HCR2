const fs = require('fs');

const thoughtArray = [
    `Fonce, Slimane ! Fooonce !!!`,
    `J'ai décidé d'appeler cela.... des enregistroscopes ! Le temps que les écrans chauffent...`,
    `La famille royale est peut-être dégénérée mais j'peux vous assurer que la princesse Al Tarouk vaut le détour. J'peux vous dire que quand elle s'affaire elle laisse son sang royal au vestiaire ! Mais elle gueule mon vieux ! On dirait une poissonnière de Ménilmontant !`,
    `On est en 1955 les gars, faut se réveiller. Les ânes partout, les djellabas, l'écriture illisible, ça va hein ! S'agirait de grandir ! S'agirait de grandir...`,
    `Larmina : Larmina El Akmar Betouche, je suis la secrétaire de Mr Jefferson.
OSS 117 : Quel nom compliqué ! Hubert Bonnisseur de La Bath, mais ici je suis Lucien Bramard.`,
    `OSS 117 : Vous voyez l'automobile derrière moi ?
Larmina : Oui...
OSS 117 : Ça fait un petit moment que je l'observe..
Larmina : Eh bien ?
OSS 117 : Eh bien, elle est absolument impeccable.. C'est quand même bien mieux une voiture propre, non ? À l'occasion, je vous mettrai un petit coup de polish.`,
    `C'est notre Raïs à nous : c'est monsieur René Coty. Un grand homme. Il marquera l'Histoire. Il aime les Cochinchinois, les Malgaches, les Marocains, les Sénégalais… c'est donc ton ami. Ce sera ton porte-bonheur.`,
    `En tout cas, on peut dire que le Soviet éponge !`,
    `Moëller : Où est le Kapov, Bramard ?
OSS 117 : Je ne vous dirai rien Moëller. Le IIIe Reich et l'idéologie nazie m'ont toujours rendu... dubitatif.
Moëller : Bla bla bla bla bla... C'est marrant, c'est toujours les nazis qui ont toujours le mauvais rôle... Nous sommes en 1955, Herr Bramard ! On peut avoir une deuxième chance ?! Merci..`,
    `Tu n'es pas seulement un lâche, tu es un traitre... comme ta petite taille le laissait deviner !`,
    `Ne pas fumer me tue.`,
    `23-0 ! C'est la piquette Jack !!! Tu sais pas jouer, Jack ! T'es mauvais hahahahaha !!!`,
    `J'aime les panoramas.`,
    `J'aime le bruit blanc de l'eau.`,
    `J'aime me beurrer la biscotte.`,
    `J'aime me battre.`,
    `J'aime quand on m'enduit d'huile.`,
    `OSS 117 : J'aime quand une jolie femme brune m'apporte mon petit déjeuner au lit.
Larmina : Vous dites ça à toutes les femmes.
OSS 117 : Non juste aux jolies femmes brunes qui m'apportent mon petit déjeuner au lit.`,
    `Bambino ... Bambino`,

    `Avec moi, les histoires d’amour ne s’écrivent pas dans le temps, ce sont des histoires courtes, compactes, passionnelles. Je ne peux pas vivre autrement Dolorès. D’aucuns ont des aventures… Je suis une aventure`,
    `Je ne vois pas trop l’intérêt de ressembler à une femme.`,
    `Etrange... Je ne vois pas l’intérêt de ressembler à un homme.`,
    `Ça fait un peu Jacadi a dit : « Pas de charcuterie ! »`,
    `Pourchasser un nazi avec des juifs ? Quelle drôle d'idée !`,
    `On va passer la nuit ici.
Bien, voilà comment ça va se passer… Moi j'vais chasser. Henrich, sans te commander, tu vas couper du bois. Dolores soyez gentille, arrangez-nous une petite table, hein, essayez de nous faire un truc mignon…`,
    `Pour rencontrer M. Li, il vaut mieux avoir une bonne couverture, sinon, je serai dans de beaux draps.`,
    `Ah ! J'ai fait de l'humour juif, je crois que c'est quand ce n'est pas rigolo et que ça ne parle pas de saucisses.`,
    `Ah ah bravo Bill, en plein dans l'dos !`,
    `Chou blanc donc…`,
    `Voilà Dolorès, cadeau ... de Noël ! Non je dis Noël, c'est par rapport à mon prénom. Sinon il y ... il y a aussi les boules... Oh si, ça c'est rigolo ! Il faut absolument que j'appelle Armand !`,
    `Heinrich von Zimmel : Je hais mon père. C'est un Nazi. Mon père est un salaud. (temps) J'ai honte d'être son fils. (OSS 117 lui met une grande gifle)
OSS 117 (hurlant) : Non mais oh ! Comment tu parles de ton père ! T'as pas honte ? Qui c'est qui t'a nourri ?! Jamais moi j'parlerais comme ça d'mon père, jamais ! Moi mon père il était charron. Et j'peux t'dire qu'ça filait doux ! Ça, la mère de la Bath elle mouffetait pas ! Et les gamins pareil !`,
    `Chinois : Tu as tué mon frère a "Gstaa" tu va mourir.
OSS 117 : Plaît-il ?
Chinois : À "Gstaa", en Suisse, la station de ski.
OSS 117 : À Gstaad. (En rigolant) "Gstaa".
Chinois : C'est mon accent qui vous fait rire ? Vous est raciste.
OSS 117 : Mais non pas du tout, j'ai longtemps vécu en Cochinchine.
Chinois : Adieu OSS 117, le raciste. Tu vas mourir.`,
    `Armand : Alors cette mission a Gstaad ?
OSS 117 : Ma foi, comme un lundi, frais dans la matinée, soleil dans l'après midi, la recette des sports d'hiver réussis!`,
    `Carlota : Oh pardon, je suis affreusement maladroite, apparemment je vous ai... éclaboussé.
OSS 117 : Mais je vous en prie. D'ailleurs, ne dit-on pas qu'une femme qui éclabousse un homme, c'est un peu comme la rosée d'une matinée de printemps. C'est la promesse d'une belle journée et la perspective d'une soirée enflammée.
Carlota : Quel réveil !
OSS 117 : Je n'y suis pour rien. C'est l'inexpugnable arrogance de votre beauté qui m'asperge.`,
    `Bill Tremendous : Alors mon vieux Houberte ? On a des sucis avec des Chinois ?
OSS 117 : Pas le moins du monde, il aura fait une erreur sur la personne voilà tout... N'oublions pas que de son point de vue nous nous ressemblons tous !`,
    `OSS 117 : Et toi alors mon vieux Bill ? La CIA s'intéresse à l'Amérique du Sud maintenant ? (silence gêné, échange de regards...)
Bill Tremendous : Mouuuuahahahahah, ah sacré Hioubert, toujours le mot pour rire ! Hahahahaha, what a jerk ! Hahaha (rires ininterrompus et incompréhension de OSS 117)`,
    `Bill Tremendous : Tiens Hiouberte, au cas ou ta mémoire te revenait ! (en tendant sa carte)
OSS 117 : Je t’appellerai Bill... si l'office du tourisme est fermé !
Bill Tremendous : Shut up ! Kiss my ass !
OSS 117 : D'accord, faisons comme ça, ravi de t'avoir revu l'ami.`,
    
    `J’adore l’odeur du napalm au petit matin.`,
    `C’est à moi que tu parles ? C’est à moi que tu parles ?...`,
    `Tu vois, le monde se divise en deux catégories: ceux qui ont un pistolet chargé et ceux qui creusent. Toi tu creuses."`,
    `Luke, je suis ton père…`,
    `Figurez-vous que Thérèse n’est pas moche, elle n’a pas un physique facile… c’est différent.`,
    `Les cons ça ose tout. C’est même à ça qu’on les reconnait`,
    `- Vous voulez un whisky ?
- Juste un doigt.
- Vous ne voulez pas un whisky d’abord ?`,
    `Un grand pouvoir implique de grandes responsabilités.`,
    `Mais, Monsieur Ouille, n’essuyez pas avec votre poncho !`,
    `Mais dites donc, dites donc, ça fait deux fois que vous me faites ça… vous m’avez déjà pris mes chaussures, maintenant mon vélo !...`,
    `- Mais Madame mais je vous jure…
- Marie-Thérèse, ne jurez pas !`,
    `Foutez-moi le camp ou j’te tape !`,
    `Monseignor, c’est l’or…Il est l’or, l’or de se réveiller…Monseignor, il est huit or !`,
    
    `Driss : Elle a écrit : ”Je viens à Paris la semaine prochaine, appelle-moi...”, 3 petits points.
Vous comprenez ce que ça veut dire?
Philippe : C’est bon, ça ?
Driss : Bien sûr que c’est bon 3 petits points ! 1 point, 2 points, 3 points: 3 points, elle veut pécho!`,
    `Pas d’bras, pas d’chocolat !`,
    
    `Ca ? c'est mon gri-gri c'est un sorcier hawaïen qui me l'a donné, c'est une vraie fausse dent de requin blanc faite en résine.`,
    `Qu'est-ce que tu as fait à tes cheveux ? On dirait un pompier !`,
    `Je t'ai cassé !`,
    `Aujourd'hui, pour être fun et bigarré, frais et bien formé, il te faut savoir casser !`,
    `Moi tous les matins, je casse le vent, ça me purifie, c'est important !`,
    `Alors l'avantage, c'est que ça marche aussi avec les objets. Par exemple : un pot de "flowers", je le lâche, je l'ai cassé !`,
    `Brice : On peut aussi casser par téléphone...
(il compose un numéro)
Voix dans le téléphone : Oui ? Allô ?
Brice : Euh, non rien !
(il raccroche)`,
    `Aujourd'hui, pour être fun et bigarré, frais et bien formé, il faut savoir assurer dans les bars branchés. Suivez le guaïde.`,
    `Ce mec-là il est un peu comme moi... En moins bien, mais comme moi.`,
    `Oh Véronique (prononcé Veronaïke) ! J'organise une boum, ça te dirait de... pas venir? Ha ha ha ha! Celle-là elle est XXL!`,
    `Hi, coquine ! Ça farte ? C'est quoi ton p'tit nom propre ?`,
    
    `Vous savez que le gendarme est à la nation ce que le chien de berger est au troupeau. Il faut souvent aboyer, parfois mordre, mais toujours se faire craindre.`,
    `J'ai perdu la fesse, non la face !`,
    `Winter is coming.`,
    `Valar Morghulis.`,
    `Not a Princess, a Khaleesi.`,
    `- Je n’ai jamais eu de famille.
- Je peux être ta famille.
- Tu ne serais pas ma famille. Tu serais ma Dame.`,
    `Un Lannister paie toujours ses dettes.`,
    `Jusqu’à ce que le soleil se lève à l’Ouest et se couche à l’Est, jusqu’à ce que les rivières soient asséchées et que les montagnes frémissent au vent tels des feuilles…`,
    `He was no dragon. Fire cannot kill a dragon.`,
    `L’amour est un poison. Un poison certes délicieux, mais qui n’en est pas moins mortel.`,
    `You know nothing Jon Snow.`,
    `When you play the game of thrones, you win or you die. There is no middle ground.`,
    `Dracarys!`,
    
    `Tu ne sais clairement pas à qui tu parles, donc laisse moi t’expliquer. Je ne suis pas en danger Skyler. Je suis le danger. Un gars ouvre la porte et se fait tirer dessus, et tu penses que c’est moi ? Non je suis celui qui frappe à la porte !`,
    `Now, say my name`,
    `Jesse tu m’as demandé si j’étais dans le business de la meth ou dans le business de l’argent. Ni l’un et l’autre. Je suis dans le business de l’empire`,
    `Tu connais le business, et je connais la chimie`,
    `On arrête quand je dis qu’on arrête`,
    `I'm the one who knocks`,
    
    `-Tu sais comment jsais que t'es fragile?
Tu sépare les couleurs et le blanc quand tu fais une machine`,
    `-Tu ferais quoi si t'étais riche?
-Je crois que j'irai au mcdo je prendrais un bigmac, une frite, un coca et la meuf elle me dirai "bah prenez un menu" jdirai nan jsuis riche`,
    `-Comment tu sais que tu l'aimes?
-Quand je vais en boite je lui propose de venir avec moi`,
    `J'ai tendance à bloquer !`,
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
