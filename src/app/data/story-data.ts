import { DataStory } from "../interfaces/data-structure/data-story";

export const STORIES: DataStory[] = [
    { 
        id: 1, title: "Some Personal Arguments in Support of the BetterYou (Based on Early Interactions)", genres: [3, 4], warnings: [3,1,7,4], 
        identities: [{ romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], author: 1, intersectionalities: [1],
        link: "http://strangehorizons.com/fiction/some-personal-arguments-in-support-of-the-betteryou-based-on-early-interactions/",
        description: "Dark story that showcases how society can marginalise minorities. Despite fantastical elements, the story feels very grounded in its details." +
        " The main character welcomes a BetterYou to replace her in aspects of her life that she fails to live up to society's standards.",
        intersectionalityDetail: "Main character has depression."
    },
    { 
        id: 2, title: "The Portal", author: 1, genres: [1], warnings: [1, 3, 4], link: "https://www.lightspeedmagazine.com/fiction/the-portal/",
        identities: [{romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], intersectionalities: [1],
        description: "A story of conversion therapy where the narrator's voice tries to deal with their feelings through the " 
        + "medium of a story, involving a portal to another world.", intersectionalityDetail: "Main character has depression."
    },
    { 
        id: 3, title: "Entangled", author: 2, genres: [3], link: "https://clarkesworldmagazine.com/barnett_08_19/", 
        identities: [{romantic: 4, sexuality: 1, gender: 2, prominance: 2, explicit: 1}], warnings: [], intersectionalities: [],
        description: "Lonely alien searched for connection. The asexuality representation is a little mixed. " + 
        "While it does feature a merger of the asociating asexuality with aliens and robots, there is a normal asexual human character as well." + 
        " Asexuality feels more of a convenient side aspect, where the main themes are around community and belonging."
    },
    { 
        id: 4, title: "Sex With Ghosts", author: 3, genres: [3], link: "http://strangehorizons.com/fiction/sex-with-ghosts/",
        warnings: [1], identities: [{romantic: 4, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], intersectionalities: [],
        description: "An asexual receptionist at a custom robot brothel is met with a creation she was not expecting, and has to decide how to deal with it."
    },
    { 
        id: 5, title: "How to Become a Robot in 12 Easy Steps", author: 4, genres: [3], warnings: [4, 9],
        identities: [{romantic: 4, sexuality: 1, gender: 1, explicit: 1, prominance: 1}], intersectionalities: [1],
        link: "https://www.lightspeedmagazine.com/fiction/how-to-become-a-robot-in-12-easy-steps/",
        description: "Our protagonist falls in love with a robot, and wants to be one herself. A different play on the " + 
        "asexual/neurodivergent as a robot trope as she is very much not a robot. Emphasises the importance of connection.",
        intersectionalityDetail: "Main character has depression and possibly autism."
    },
    { 
        id: 6, title: "Giant Country", author: 5, genres: [1], warnings: [6], link: "https://www.havenspec.com/giant-country",
        identities: [{romantic: 1, sexuality: 3, prominance: 1, explicit: 1, gender: 1}], intersectionalities: [1],
        description: "Protagonist is on a quest for her best friend with her grandmother, has been caught by a giant, and must undertake an escape before carrying on.",
        intersectionalityDetail: "Main character has prosthetic leg."
    },
    { 
        id: 7, title: "The Girl and Her Unicorn", author: 6, genres: [1], warnings: [5,19], intersectionalities: [2],
        link: "https://aroworlds.com/fiction/nine-laws/the-girl-and-her-unicorn/", source: [1], series: 1,
        identities: [{romantic: 1, sexuality: 4, gender: 6, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 4, gender: 2, prominance: 2, explicit: 2},
        {romantic: 1, sexuality: 4, gender: 1, prominance: 2, explicit: 2}],
        description: "Ponder is sent as a sacrifice and presumed virgin to attract a unicorn to ask for a boon. But Ponder knows ze doesn't meet hir village's exacting " + 
        "requirements, and so ze must fail.",
        intersectionalityDetail: "Main character is agender."
    },
    { 
        id: 8, title: "The Lies Lovers Tell", author: 6, genres: [1], warnings: [5], series: 1,
        link: "https://aroworlds.com/2023/02/25/fiction-the-lies-lovers-tell/", source: [1], intersectionalities: [2],
        identities: [{romantic: 1, sexuality: 4, gender: 6, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 1, gender: 1, prominance: 2, explicit: 2}],
        description: "A new take on Rapunzel. Thorn is a proliffic gardener, trapped living in a tower by a witch. If only people would stop trying to rescue hir!"
    },
    { 
        id: 9, title: "Bisclavret", author: 7, genres: [1], warnings: [1],intersectionalities: [],
        identities: [{romantic: 5, sexuality: 2, prominance: 1, explicit: 2, gender: 2}], 
        description: "A queer retelling of an old French story, in which the Lord Bisclavret is cursed to transform into a wolf every month. To turn back into a man, he must come upon his clothes." +
        " His wife eventually convinces him to reveal his secret, after which she becomes afraid and hides his cloths. Trapped as a wolf, Lord Bisclavret is picked up by the king, who has been " +
        "shamed by his father for not wanting sex enough."
    },
    { 
        id: 10, title: "D.I.Y.", author: 8, genres: [1], link: "https://www.tor.com/2022/08/24/d-i-y-john-wiswell/", 
        warnings: [8], intersectionalities: [1],
        identities: [{romantic: 4, sexuality: 1, gender: 2, explicit: 2, prominance: 1}, {romantic: 4, sexuality: 1, gender: 3, explicit: 2, prominance: 1}],
        description: "In a water-scarce and socially stratified near-future, two working-class teens attempt to solve a " 
        + "problem no one has achieved, create water.",
        intersectionalityDetail: "Main characters are chronically ill, one uses a wheelchair."
    },
    { 
        id: 11, title: "Lemon & Salt", author: 9, genres: [3], source: [2], warnings: [5], intersectionalities: [2],
        identities: [{romantic: 1, sexuality: 3, gender: 1, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 3, gender: 3, prominance: 1, explicit: 2}],
        description: "Two singers renegotiate their queerplatonic relationship in a concert."
    },
    { 
        id: 12, title: "Hunter", author: 6, genres: [1], warnings: [], link: "https://aroworlds.com/2021/12/17/hallo-aro-hunter-k-a-cook/",
        identities: [{romantic: 1, sexuality: 5, gender: 1, prominance: 1, explicit: 2}], source: [1, 4], series: 1, intersectionalities: [],
        description: "Prue travels the country searching for a witch, finding it better than the alternatives.", length: 3
    },
    { 
        id: 13, title: "Before Crows' Eyes", author: 6, genres: [1], warnings: [1, 3, 5, 9], 
        link: "https://aroworlds.com/2022/02/21/fiction-before-crows-eyes/", series: 1, intersectionalities:[2,3], source: [1], 
        identities: [{romantic: 1, sexuality: 1, gender: 2, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 4, gender: 2, prominance: 2, explicit: 2}],
        description: "Aro-ace baker Even is happy with how he is, and initially pleases his sex-negative village. But his refusal to marry has opinion of him souring.",
        intersectionalityDetail: "A side character is a trans man and implied to be Black."
    },
    { 
        id: 14, title: "The Cage and the Road", author: 6, genres: [1], warnings: [5, 9], link: "https://aroworlds.com/2022/02/24/fiction-the-cage-and-the-road/",
        identities: [{romantic: 1, sexuality: 5, gender: 1, prominance: 1, explicit: 2}], source: [1], intersectionalities: [], series: 1,
        description: "In Prue's travels around the country, she encounters unwanted company who raises questions about her own life."
    },
    { 
        id: 15, title: "Pillar", author: 6, genres: [1], warnings: [], link: "https://aroworlds.com/2022/11/07/hallo-aro-pillar-k-a-cook/",
        identities: [{romantic: 1, sexuality: 4, gender: 1, prominance: 1, explicit: 2}], source: [1,4], series: 1, intersectionalities: [],
        description: "Quick doesn't want marriage or children, and tires of the demands of those who do.", length: 3
    },
    { 
        id: 16, title: "Witch", author: 6, genres: [1], warnings: [5,14,25], link: "https://aroworlds.com/2021/12/03/hallo-aro-witch-k-a-cook/",
        identities: [{romantic: 1, sexuality: 4, gender: 5, prominance: 1, explicit: 2},{romantic: 1, sexuality: 4, gender: 3, prominance: 2, explicit: 2}], source: [1,4,9], series: 1,
        description: "An aro allo villager leaves to seek change.", length: 3, intersectionalities: []
    },
    { 
        id: 17, title: "Bones of Green and Hearts of Gold", author: 6, genres: [1], warnings: [], intersectionalities: [2],
        link: "https://aroworlds.com/2020/11/10/fiction-bones-of-green-and-hearts-of-gold/",
        identities: [{romantic: 1, sexuality: 4, gender: 1, prominance: 1, explicit: 2}, 
            {romantic: 1, sexuality: 4, gender: 6, prominance: 2, explicit: 2}], source: [1], series: 1,
        description: "Princess Constance knows that she is supposed to marry the prince. But doing so would be a mistake, so she must run to the witch for help."
    },
    { 
        id: 18, title: "Le Trotteur", author: 9, genres: [3], warnings: [1, 10], source: [2],
        identities:[{romantic: 6, sexuality: 1, gender: 1, explicit: 2, prominance: 2}], intersectionalities: [],
        description: "A backwater MagSkater becomes too arrogent for his own good."
    },
    { 
        id: 19, title: "The Wyvern Brood", author: 9, genres: [1], warnings: [10], intersectionalities: [],
        identities: [{romantic: 1, sexuality: 1, gender: 1, prominance: 1, explicit: 2}],
        description: "A young woman from a village plagued by wyverns seeks to end seige.", source: [2]
    },
    { 
        id: 20, title: "Seida the Fairy Troll", author: 9, genres: [1], warnings: [10], source: [2], intersectionalities: [],
        identities: [{romantic: 1, sexuality: 1, gender: 1, prominance: 2, explicit: 1}], 
        description: "Outcast fairy Seida is called upon to save the day."
    },
    { 
        id: 21, title: "The Daisy Haunt", author: 9, genres: [1], warnings: [], source: [2], intersectionalities: [1],
        identities: [{romantic: 5, sexuality: 2, gender: 1, prominance: 1, explicit: 2}], 
        description: "A gardener comes across some mysterious flowers.",
        intersectionalityDetail: "Main character is blind."
    },
    { 
        id: 22, title: "Human Blooms", author: 9, genres: [1], warnings: [11], source: [2], intersectionalities: [],
        identities: [{romantic: 1, sexuality: 1, gender: 1, prominance: 1, explicit: 2}], description: "A new parent visits a grave to grieve."
    },
    { 
        id: 23, title: "The Vampire Conundrum", author: 6, genres: [5], warnings: [12], intersectionalities: [1,2],
        link: "https://aroworlds.com/2019/11/16/fiction-the-vampire-conundrum-part-one/", series: 3, source: [3,9,10],
        identities: [{romantic: 7, sexuality: 6, gender: 2, prominance: 1, explicit: 1}, {romantic: 1, sexuality: 1, gender: 1, prominance: 2, explicit: 1}], 
        description: "Rowan brings an aromantic mug to the office, but struggles with the aniety of not knowing what to do when no one reacts."
    },
    { 
        id: 24, title: "The Dirty Golden Yellow House", author: 1, genres: [1,4], warnings: [13], link: "https://www.lightspeedmagazine.com/fiction/the-dirty-golden-yellow-house/",
        identities: [{sexuality:1, romantic:3, gender:1, prominance:1, explicit:2}], intersectionalities: [], length: 2,
        description: "A story of a woman who doesn't want to have sex being repeatedly coerced into sex and eventually arranging for her husband to be eaten by a monster. " 
        + "It is more implied than outright stated that the woman is asexual, though the word is used in the story. The story is told non-linearly with narrator interjections." 
    },
    { 
        id: 25, title: "The Love It Bears Fair Maidens", author: 10, genres: [1], link: "https://apex-magazine.com/short-fiction/the-love-it-bears-fair-maidens/",
        identities: [{sexuality: 1, romantic: 4, gender: 1, explicit: 2, prominance: 1}], intersectionalities: [], warnings: [1],
        description: "Alegorical look at the unicorn myth and it's relation to sex and compulsory sexuality from the perspective of an asexal person." 
    },
    { 
        id: 26, title: "A Taxonomy of Hurts", author: 11, genres: [1], link: "https://firesidefiction.com/a-taxonomy-of-hurts",
        identities: [{sexuality: 1, romantic: 6, gender: 5, prominance: 1, explicit: 2}], intersectionalities: [], warnings: [2],
        description: "Characters in this world wear their hurts on their sleeves, and the protagonist learns to understand their loneliness and fear of rejection from asexuality with help."
    },
    { 
        id: 27 , title: "So, You Married Your Arch Nemesis . . . Again", author: 4, link: "https://www.lightspeedmagazine.com/fiction/so-you-married-your-arch-nemesis-again/",
        genres: [6], intersectionalities: [2], warnings: [16, 10], 
        identities:[{romantic: 8, sexuality: 1, gender: 3, explicit: 1, prominance: 1}, {romantic: 8, sexuality: 1, gender: 3, explicit: 1, prominance: 2}], 
        description: "An exploration of the 'bury your gays' trope where a character tries to escape the pressure of a particular narrative strincture. Plays about with genre and style.",
        intersectionalityDetail: "Both main characters are non-binary."
    },
    { 
        id: 28, title: "Later, Let’s Tear Up The Inner Sanctum", author: 4, link: "https://www.lightspeedmagazine.com/fiction/later-lets-tear-inner-sanctum/",
        identities: [{sexuality: 1, romantic: 5, gender: 2, explicit: 1, prominance: 2}, {sexuality: 1, romantic: 5, gender: 2, explicit: 1, prominance: 2}], 
        intersectionalities:[], length: 2, warnings: [2], genres: [6],
        description: "Epistolery story about secrets and betrayals in a superhero group. A couple of minor characters are described as being asexual, and therefor not impacted by a villan called Lust."
    },
    {
        id: 29, title: "The Aromatic Lovers", author: 12, warnings: [12], genres: [1], identities: [{sexuality: 3, romantic: 1, gender: 2, explicit: 2, prominance: 2}], 
        description: "A nonbinary person searches for a perfume that signals their gender.", intersectionalities:[]
    },
    {
        id: 30, title: "Would You Like Charms With That?", author: 13, warnings: [2, 10, 12], intersectionalities: [2], genres: [1], source: [5], 
        identities: [{sexuality: 1, romantic: 1, gender: 3, explicit: 1, prominance: 1}, 
        {sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 2}, {sexuality: 1, romantic: 1, gender: 2, explicit: 1, prominance: 2}], 
        description: "Two retired adventurers in a QPR run a shop."
    },
    {
        id: 31, title: "Moon Sisters", author: 14, warnings: [12, 14], genres: [1], source: [5], identities: [{sexuality: 4, romantic: 1, gender: 1, explicit: 1, prominance: 1}], 
        description: "A werewolf comforts her friend/a member of her pack after a breakup.",  intersectionalities:[]
    },
    {
        id: 32, title: "Shift", author: 15, warnings: [7], genres: [1], source: [5], identities: [{sexuality: 1 , romantic: 1, gender: 1, explicit: 1, prominance: 1}, {sexuality: 4 , romantic: 1, gender: 1, explicit: 1, prominance: 2}], 
        description: "A girl accepts that her college roommate is a werewolf.",  intersectionalities:[]
    },
    {
        id: 33, title: "Cinder", author: 16, warnings: [6, 2, 7, 15], genres: [1], source: [5], intersectionalities: [1], identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 1}, 
            {sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 2}], 
        description: "Basically a disabled a-spec Cinderella retelling where the main character seeks to escape from an abusive family member and help others do the same. It’s a wild ride. " 
        + "The side character is only implied to be aro ace, she’s described as being similar to the main character and confirmed not to want of all in love/have kids.", 
        intersectionalityDetail: "The main character is a double leg amputee; the side character is blind."
    },
    {
        id: 34, title: "Seams of Iron", author: 17, genres: [1], source: [5], identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 2}, {sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 1}], 
        description: "A girl is cursed to make cloaks made of nettles." + "Main character is only vaguely implied to be aro",  intersectionalities:[], warnings:[]
    },
    {
        id: 35, title: "Not to Die", author: 18, warnings: [11], genres: [1], source: [5], identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 1}], 
        description: "A person who can create knots that suggest the future of relationships recovers from the loss of her found family.",  intersectionalities:[]
    },
    {
        id: 36, title: "Dracanmõt Council of Human Study Report Compiled by Usander Greystart", author: 19, warnings: [15, 2], genres: [1], source: [5], 
        identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 2, prominance: 2}], 
        description: "A dragon in disguise is tasked with investigating a human settlement.",  intersectionalities:[]
    },
    {
        id: 37, title: "Busy Little Bees", author: 20, warnings: [7, 15], genres: [3], source: [5], 
        identities: [{sexuality: 1, romantic: 1, gender:1 , explicit: 2, prominance: 1}], 
        description: "A person who’s a clone goes on a journey to find her cloned siblings and their surrogate mothers.",  
        intersectionalities:[]
    },
    {
        id: 38, title: "Spacegirl and the Martian", author: 21, warnings: [7], genres: [6], source: [5], 
        identities: [{sexuality: 3, romantic: 1, gender: 1, explicit: 1, prominance: 1}], 
        description: "A superhero must face off with her evil twin sister.",  intersectionalities:[]
    },
    {
        id: 39, title: "A Full Deck", author: 22, warnings: [6, 7], genres: [1], source: [5], intersectionalities: [2], 
        identities: [{sexuality: 1, romantic: 8, gender: 1, explicit: 1, prominance: 1}, {sexuality: 4, romantic: 1, gender: 2, explicit: 1, prominance: 1}, 
            {sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 2}, {sexuality: 2, romantic: 8, gender: 3, explicit: 1, prominance: 2}], 
        description: "A team of a-specs must find a way of defeating a succubus." + "I wasn’t a huge fan of the allo aro representation in this one. It felt a bit sex negative to me personally."
    },
    { 
        id: 40, title: "Power to Yield", author: 23, link: "https://clarkesworldmagazine.com/takacs_07_20/", genres: [3], intersectionalities: [1], warnings: [], length: 1,
         identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 1, gender: 2, explicit: 1, prominance: 1}], source: [8],
         description: "A young woman develops an interest in an influential and contraversial figure on her planet, leading to circustances of difficult morality.",
         intersectionalityDetail: "Essentially all characters on the planet are implied to be neurodivergent, with a focus on autistic people."
    },
    { 
        id: 41, title: "(don’t you) love a singer", author: 24, source: [6], genres: [3], warnings: [10], intersectionalities: [], 
         identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 1}], 
         description: "A singer must take up the lead position to bring a spaceship safely home. "
    },
    { 
        id: 42, title: "Far From The Home I Love", author: 25, link: "https://www.castofwonders.org/2022/09/cast-of-wonders-509-far-from-the-home-i-love/", 
         identities: [{sexuality: 1, romantic: 1, explicit: 2, gender: 1, prominance: 2}], intersectionalities: [], warnings: [1,9], genres: [3],
         description: "Miriam has to go back to her family to remove herself from her queerphobic family tree."
    },
    { 
        id: 43, title: "Humans Die, Stars Fade", author: 26, link: "https://escapepod.org/2018/05/10/escape-pod-627-humans-die-stars-fade/", genres: [3], 
         identities: [{sexuality: 1, romantic: 8, gender: 2, prominance: 2, explicit: 1}], intersectionalities: [], warnings:[],
         description: "An alien lifeform living in an unstable part of the universe is visited by a human spaceship. The asexual character does not actually appear, and is only referred to."
    },
    {
        id: 44, title: "The Library Ghost", author: 27, warnings: [8, 17], genres: [3], source: [7], intersectionalities: [1,2], identities: [{sexuality: 1, romantic: 6, gender: 3, explicit: 2, prominance: 2}, 
         {sexuality: 1, romantic: 6, gender: 3, explicit: 2, prominance: 2}, {sexuality: 1, romantic: 6, gender: 2, explicit: 3, prominance: 2}], series: 2,
         description: "A ghost tries to infiltrate a library that’s a base of operations for a rebel group in a dystopian city. (There’s a lot going on here). ",
         intersectionalityDetail: "Anxiety" 
    },
    {
        id: 45, title: "Runtime", author: 27, warnings: [17], genres: [3], source: [7], intersectionalities: [1,2], series: 2,
        identities: [{sexuality: 1, romantic: 6, gender: 2, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 6, gender: 3, explicit: 3, prominance: 2}], 
         description: "A anxious character transports important information across a city that’s falling apart."
    },
    {
        id: 46, title: "Come Home Alone", author: 27, warnings: [2, 10], genres: [3], source: [7], intersectionalities: [], identities: [{sexuality: 1, romantic:6 , gender: 2, explicit: 3, prominance: 2}], 
        description: "Canon-adjacent story about a man in a city that’s falling apart saving another person from an evil government operation and a serious wound.",
        intersectionalityDetail: "Anxiety", series: 2
    },
    {
        id: 47, title: "Nkásht íí", author: 28, warnings: [16, 7], genres: [1, 4], link: "http://strangehorizons.com/fiction/nksht/", intersectionalities: [3], 
        identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 1}], description: "Two Indigenous girls that ran away from home solve a haunting. Character is only briefly implied to be a-spec. ", 
        intersectionalityDetail: "The main character is Native American (implied Apache)."
    },
    {
        id: 48, title: "Surely You'll Drown Here if You Stay", author: 29, warnings: [2, 13], genres: [1, 4], link: "https://www.uncannymagazine.com/article/youll-surely-drown-stay/", intersectionalities: [], 
        identities: [{sexuality: 1, romantic: 3, gender: 2, explicit: 2, prominance: 1}], description: "A boy in a Wild West setting has powers because his mother is the desert. He acts as a guide through the desert to some greedy men. " 
        + "This representation is controversial/has been criticized by some asexual reviewers", length:2
    },
    {
        id: 49, title: "Anything Resembling Love", author: 30, warnings: [13], genres: [7], link: "https://reactormag.com/anything-resembling-love-s-qiouyi-lu/", 
        intersectionalities: [3], identities: [{sexuality: 1, romantic: 4, gender: 1, explicit: 1, prominance: 2}], 
        description: "A first year university student explores her sexuality and learns to hide her discomfort (manifested in the form of centipedes emerging from her body) from men." 
        + " This is a powerful exploration of the effect of rape culture on university students."
    },
    { 
        id: 50, title: "Ode to an Asexual", author: 31, link: "http://strangehorizons.com/poetry/ode-to-an-asexual/", length: 4, genres: [5],
        identities: [{sexuality: 1, romantic: 4, gender: 5, prominance: 1, explicit: 2}], intersectionalities: [], warnings: [1], 
        description: "The narrator discusses their feelings of isolation from asexuality."
    },
    { 
        id: 51, title: "Monstrous", author: 6, link: "https://aroworlds.com/2019/11/11/hallo-aro-monstrous-k-a-cook/", length: 3, 
        description: "Explores accepting yourself as being aro allo via a metaphor about monsters.",
        warnings: [5], intersectionalities: [], identities: [{sexuality: 5, romantic: 1, explicit: 2, prominance: 1, gender: 5}], genres: [1], source: [9,3,10]
    },
    { 
        id: 52, title: "The Pride Conspiracy", author: 6, link: "https://aroworlds.com/2019/12/23/fiction-the-pride-conspiracy-part-one/",         
        identities: [{sexuality: 6, romantic: 7, gender: 2, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 1, explicit: 1, prominance: 2, gender: 1}, 
            {sexuality: 3, romantic: 9, gender: 2, explicit: 1, prominance: 2}], source: [3,9,10], series: 3, warnings: [5,18], 
        description: "Sequel to The Vampire Conundrum, Rowan deals with a gift exchange and anxiety about the holidays.", 
        intersectionalityDetail: "The main character is a trans man and has anxiety", intersectionalities: [1,2], genres: [1]
    },
    { 
        id: 53, title: "Abrasive", author: 6, length: 3, series: 4, link: "https://aroworlds.com/2020/07/07/hallo-aro-abrasive-k-a-cook/", 
        source: [4,3,9,13], warnings: [5,7,14], genres: [1],
        intersectionalities: [2], identities: [{sexuality: 7, romantic: 1, gender: 1, explicit: 2, prominance: 1}], 
        description: "Suki, a forthright allo aro woman, has to deal with her family looking down on her for turning down a romantic proposal from a sexual partner.",
        intersectionalityDetail: "Suki is a trans woman."
    },
    { 
        id: 54, title: "The Complexity of Human Decency", author: 6, series: 4, source: [3,9,13], 
        link: "https://aroworlds.com/2020/07/14/fiction-the-complexity-of-human-decency/", genres: [1], 
        warnings: [5,7,14], identities: [{sexuality: 7, romantic: 1, gender: 1, explicit: 2, prominance: 1}, {sexuality: 3, romantic: 1, gender: 3, explicit: 2, prominance: 1}], 
        description: "Suki left home to escape amatonormativity and goes to a rainy, capitalistic city. ", intersectionalityDetail: "Suki is a trans woman.", intersectionalities: [2]
    }, //capitalism
    { 
        id: 55, title: "If Absurd Works", author: 6, link: "https://aroworlds.com/2020/08/04/fiction-if-absurd-works/", genres: [1], 
        description: "Suki returns to her amatonormative home to visit her sick mother.", intersectionalityDetail: "Suki is a trans woman",
        warnings: [5,7,19,14], intersectionalities: [2], 
        identities: [{sexuality: 7, romantic: 1, gender: 1, explicit: 2, prominance: 1}], series: 4, source: [3,9,13]
    },
    { 
        id: 56, title: "Leaving", author: 6, link: "https://aroworlds.com/2019/01/10/hallo-aro-leaving-k-a-cook/", length: 3, source: [3,4,9,10], warnings: [5,14],
        description: "An allo aro character deals with sexual partners expecting casual sexual relationships to turn into romance.", genres: [1], intersectionalities: [], 
        identities: [{sexuality: 5, romantic: 1, gender: 5, explicit: 1, prominance: 1}, {sexuality: 4, romantic: 1, gender: 2, explicit: 1, prominance: 2}]
    },
    { 
        id: 57, title: "When Quiver Meets Quill", author: 6, link: "https://aroworlds.com/2019/11/13/fiction-when-quiver-meets-quill-part-one/",
        description: "An aromantic shop owner deals with hir coworker trying to set hir up on a date. ", intersectionalityDetail: "Both characters are autistic.", 
        intersectionalities: [1,2], source: [3,10], genres: [1], warnings: [14,15],
        identities: [{sexuality: 3, romantic: 1, gender: 3, explicit: 1, prominance: 1},{sexuality: 3, romantic: 1, gender: 2, explicit: 1, prominance: 2}]
    },
    { 
        id: 58,title: "The Sorcerous Compendium of Postmortem Query", author: 6, link: "https://aroworlds.com/marchverse/mara-and-esher-hill/the-sorcerous-compendium-of-postmortem-query/", genres: [1], intersectionalities: [2],
        series: 4, source: [3,10,13], description: "A lithromantic girl seeks advice from the ghosts of members of her community who have died. ",
        intersectionalityDetail: "The main character is a trans woman and one of the side characters is a trans man.", warnings: [5,15], length:2,
        identities: [{romantic: 10, sexuality: 8, gender: 1, explicit: 2, prominance: 1},{sexuality: 6, romantic: 1, gender: 1, explicit: 2, prominance: 2},{sexuality: 3, romantic: 2, gender: 1, explicit: 2, prominance: 2},
        {sexuality:1, romantic: 1, gender: 2, explicit: 2,  prominance: 2},{romantic: 7, sexuality: 3, gender: 2, explicit: 2, prominance: 2},
        {sexuality: 3, romantic: 11, gender: 3, explicit: 2, prominance: 2},{sexuality: 1, romantic:1, gender:2,explicit:2,prominance:2}]
    },
    { 
        id: 59, title: "The Mundane Progression of Premortem Colloquy", author: 6, link: "https://aroworlds.com/marchverse/mara-and-esher-hill/the-mundane-progression-of-premortem-colloquy/", source: [3,13], series: 4,
        description: "A lithromantic girl and her autistic girlfriend have a conversation about their relationship. ",
        intersectionalityDetail: "The main character is a trans woman; the side character is autistic and has coeliac disease.", warnings: [5,15], genres: [1], intersectionalities: [1,2], 
        identities: [{sexuality: 8, romantic: 10, gender: 1, explicit: 2, prominance: 1},{sexuality: 8, romantic: 12, gender:1,explicit:2,prominance:2}]
    },
    { 
        id: 60, title: "Friendship", author: 6, length: 3, link: "https://aroworlds.com/2019/01/08/hallo-aro-friendship-k-a-cook/", source: [3,4,10,13], genres: [1], intersectionalities: [],
        description: "A sapphic aromantic girl seeks a partnership but not marriage and has a conversation with a dragon about a girl she likes.", warnings: [5,14], 
        identities: [{sexuality: 8, romantic: 1, gender: 1, explicit: 2, prominance: 1}], series: 5
    },
    { 
        id: 61, title: "Attraction", author: 6, length: 3, link: "https://aroworlds.com/2019/02/22/hallo-aro-attraction-k-a-cook/", 
        source: [3,4,10,13], genres: [1], intersectionalities: [], warnings:[14], series:5,
        identities: [{sexuality: 8, romantic: 1, gender: 1,explicit: 2, prominance: 1}], 
        description: "A sapphic aromantic girl has a conversation with a dragon about the nature of romance and attraction."
    },
    { 
        id: 62, title: "What If It Isn’t", author: 6, link: "https://aroworlds.com/2018/08/01/what-if-it-isnt-k-a-cook/", warnings: [], 
        identities: [{sexuality: 4, romantic: 13, gender: 1, explicit: 1, prominance: 1}],
        description: "Two girls visit a museum and have a conversation about their relationship. ",
        intersectionalityDetail: "The main character is autistic.", 
        intersectionalities: [1], genres: [5], source: [3,10]
    },
    { 
        id: 63, title: "What Makes Us Human", author: 6, link: "https://aroworlds.com/marchverse/mara-and-esher-hill/what-makes-us-human/", 
        series: 4, source: [3,9,13], warnings: [5,15], genres: [1],intersectionalities: [1,2], length:2,
        description: "An autistic, loveless aro priest struggles with giving advice to a guest that dehumanizes them.", 
        intersectionalityDetail: "The main character is autistic, the side character is a trans woman (although not obviously from this story) and has chronic pain from arthritis.", 
        identities: [{sexuality: 3, romantic:1, gender:3, explicit: 1, prominance: 1},{sexuality: 4, romantic: 1, gender: 1, explicit: 3, prominance: 2}]
    },
    { 
        id: 64, title: "Those With More", author: 6, link: "https://aroworlds.com/2020/09/13/book-edition-those-with-more/", 
        length: 2, warnings: [5,14,4,20], series: 4, source: [3,9,13],genres: [1], intersectionalities: [1,2],
        identities: [{sexuality: 7, romantic: 1, gender: 1, explicit: 1, prominance: 1},{sexuality: 3, romantic: 1, gender: 3, explicit: 1, prominance: 2},
            {sexuality: 8, romantic: 10, gender:1, explicit: 1, prominance:2},{sexuality: 1, romantic: 1, gender: 2, explicit: 1, prominance: 2}],             
        description: 'This is about a guiding priest struggling with the expectations and needs of members of her aromantic community ' 
        + 'and dealing with the pain of being so old before learning the term “aromantic”. ',
        intersectionalityDetail: 'The main character has chronic pain from arthritis and is a trans woman, the male side character is a trans man and has depression, and the nonbinary side character is autistic.'      
    },
    { 
        id: 65, title: "Lucky", author: 6, link: "https://aroworlds.com/2019/02/20/hallo-aro-lucky-k-a-cook/", length: 3, warnings: [5,14], 
        genres: [5], intersectionalities: [],
        description: "An aro allo man deals with being told how lucky he is for being aromantic by someone who doesn’t understand the first thing about arophobia and amatonormativity. ",
        intersectionalityDetail: "The main character is a trans man and has depression",
        identities: [{sexuality: 8, romantic: 1, gender: 2, explicit: 1, prominance: 1}], source: [3,4,10]
    },
    { 
        id: 66, title: "Love is the Reckoning", author: 6, link: "https://aroworlds.com/2020/09/01/fiction-love-is-the-reckoning/", length: 2, 
        genres: [1], intersectionalities: [1,2], series: 4, source: [9,13], warnings: [4,14,21,22], 
        description: "After a suicide attempt, Esher left his home town to visit a monastery for treatment. Now, Esher returns at his sister’s request.",
        intersectionalityDetail: "The main character is an autistic trans man.",
        identities: [{sexuality: 1, romantic: 9, gender: 2, explicit: 1, prominance: 1},{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 2},
            {sexuality: 8, romantic: 10, gender: 1, explicit: 1, prominance: 2}]
    },
    { 
        id: 67, title: "Ringbound", author:6, link: "https://aroworlds.com/marchverse/kit-and-amelia-march/ringbound/", 
        description: "A man has doubts the night before his wedding.",
        intersectionalityDetail: "The main character is an autistic trans man.", genres: [1], series: 4,
        source: [3,9,13], warnings: [5,14], intersectionalities: [1,2], identities: [{sexuality: 8, romantic: 1, explicit: 2, gender: 2, prominance: 1}]
    },
    { 
        id: 68, title: "Absence of Language", author: 6, link: "https://aroworlds.com/marchverse/kit-and-amelia-march/absence-of-language/", 
        series: 4, warnings: [18,9,23,24], source: [3,9,13], length: 2, genres: [1],
        description: "A regretful gay aro man is given the words he need to put his experiences in context.",
        intersectionalityDetail: "Both characters are trans men, the main character is autistic.",  intersectionalities: [1,2], 
        identities: [{sexuality: 8, romantic: 1, gender: 2, explicit: 1, prominance: 1},{sexuality: 1, romantic: 13, gender: 2, explicit: 1, prominance: 2}]
    },
    { 
        id: 69, title: "The Wind and the Stars", author: 6, link: "https://aroworlds.com/fiction/the-wind-and-the-stars/", genres: [1], 
        series: 1, warnings: [14], intersectionalities: [2],
        source: [9,10], description: "An aro ace trader reflects on the nature of stories and fairy tales.", 
        identities: [{sexuality: 1, romantic: 1, gender: 3, explicit: 2, prominance: 1}]
    },
    { 
        id: 70, title: "Love Spells, Rainbows and Rosie", author: 6, link: "https://aroworlds.com/2020/09/22/fiction-love-spells-rainbows-and-rosie/", 
        series: 4, genres: [1], warnings: [4,14], source: [13],
        description: "A witch shopkeeper deals with a fantasy version of Valentine’s Day coming up.",
        intersectionalityDetail: "The main character is a trans woman, although it is not specified in this story.",  intersectionalities: [2], 
        identities: [{sexuality: 8, romantic: 10, gender: 1, explicit: 1, prominance: 1}]
    },
    { 
        id: 71, title: "Singot", author: 32, link: "https://magazine.metaphorosis.com/story/2021/Singot-E.C-Fuller/", genres: [3], 
        identities: [{sexuality: 1, romantic: 4, gender: 1, explicit: 1, prominance: 1}],
        intersectionalities: [], warnings: [10,16], description: "A teacher discovers she is asexual from discussing connections with an alien."
    },
    { 
        id: 72, title: "Lonely Robot on a Rocket Ship in Space", author: 4, source: [11], link: "https://escapepod.org/2018/02/16/escape-pod-615-lonely-robot-rocket-ship-space/", 
        identities: [{romantic: 1, sexuality: 1, gender: 2, explicit: 2, prominance: 1}], genres: [3], intersectionalities: [], warnings: [], 
        description: "The main characteridentifies as a robot and has a coming out narrative analogous to being trans. Briefly described as not being interested in girls or boys."
    },
    { 
        id: 73, title: "A Few Personal Observations On Portals", author: 1, link: "https://www.thesunmagazine.org/issues/503/a-few-personal-observations-on-portals", 
        identities: [{sexuality: 1, romantic: 3, gender: 1, explicit: 2, prominance: 1}],
        genres: [1], intersectionalities: [], warnings: [], 
        description: "A portal to another world appears in the bathroom of a house in a small town."
    },
    { 
        id: 74, title: "Touch", author: 1, link: "http://interfictions.com/touchdebbie-urbanski/", genres: [8], 
        identities: [{sexuality: 1, romantic: 4, gender: 1, prominance: 1, explicit: 1},{sexuality: 1, romantic: 4, gender: 2, prominance: 2, explicit: 2}],
        intersectionalities: [], warnings: [1,26], 
        description: "A woman describes her rejection from a dystopian society focused on sexual pleasure."
    },
    { 
        id: 75, title: "The Interruption", author: 1, link: "https://www.vice.com/en/article/paka39/the-interruption", genres: [7], 
        identities: [{sexuality: 1, romantic: 3, gender: 1, explicit: 2, prominance: 1}],
        intersectionalities: [], warnings: [], description: "A wife gets lost and calls her husband."
    },
    { 
        id: 76, title: "Between Spells and Shadows: A Cozy Cauldron Romance", author: 33, genres: [1,2], intersectionalities: [], 
        identities: [{romantic: 5, sexuality: 1, gender: 1, prominance:1, explicit: 1}], length: 2,
        warnings: [], description: "Witch Thea has a rival who constantly seeks to ruin her life. So she summons a demon to get her own back."
    },
    { 
        id: 77, title: "Werecockroach", author: 20, intersectionalities: [1,2,3], genres: [3], length: 1, warnings: [27], 
        identities: [{gender: 6, sexuality: 1, romantic: 1, prominance: 1, explicit: 1},{gender: 2, sexuality: 1, romantic: 1, prominance: 1, explicit: 1}], 
        description: "Rin moves into a new flat just as the alien invasion arrives. But something is odd about their new flatmates... ",
        intersectionalityDetail: "Rin has tinitus and dyslexia, and is agender, and another character has a sensory processing disorder."
    },
    {
        id: 78, title: "How To Love A Sidewinder", author: 34, warnings: [14], genres: [7], source: [12], 
        intersectionalities: [3], identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 1}], 
        description: "A Chinese girl comes out to her mother after a friend cursed her to spit up snakes every time she is misleading or says a half truth.",
        intersectionalityDetail: "Chinese."
    },
  {
       id: 79, title: "Across the Stars", author: 35, warnings: [11], genres: [3], source: [12], intersectionalities: [], 
       identities: [{sexuality: 1, romantic: 6, gender: 1, explicit: 1, prominance: 1}], 
       description: "A girl turns 17 and must overcome her fear of traveling and process her grief over loosing her parents. "
       +"(Note: labels used here for the sake of searching on the database, but this character does not overly like labels.)"
  },
  {
        id: 80, title: "Well Suited", author: 18, warnings: [27, 14, 32], genres: [1], source: [12], intersectionalities: [2], 
        identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 1}, {sexuality: 1, romantic: 1, gender: 6, explicit: 2, prominance: 1}], 
        description: "A girl’s father becomes a knight, meaning she now needs to debut in royal society, meanwhile, she’d rather hang out with her friend who is trying to become a magister."
  },
  {
        id: 81, title: "Nylon Bed Socks", author: 36, length: 4,warnings: [28, 1, 3, 4, 7, 8, 13, 15, 33], genres: [5], source: [12], intersectionalities: [1], 
        identities: [{sexuality: 1, romantic: 3, gender: 1, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 3, gender: 2, explicit: 1, prominance: 2}], 
        description: "A girl (or girls) struggles with mental illness and the trauma she’s experienced in a psych ward. This is a dark but thoughtful depiction of asexuality and how it can intersect with trauma.",
        intersectionalityDetail: "Dissociative Identity Disorder, eating disorder"
  },
  {
        id: 82, title: "Give up the Ghost", author: 37, warnings: [11, 1, 29, 21], genres: [1, 9], source: [12], intersectionalities: [], identities: [{sexuality: 1, romantic: 3, gender: 1, explicit: 1, prominance: 1}], 
        description: "A girl escorts people to a cemetery where they can talk to the dead. Meanwhile, she tries to determine who killed her friend."
  },
  {     
        id: 83, title: "No Such Thing as Just", author: 40, warnings: [23, 3, 7, 1, 18], genres: [5], source: [12], intersectionalities: [2], 
        identities: [{sexuality: 1, romantic: 8, gender: 3, explicit: 1, prominance: 1}], description: "Halcion is in a romantic relationship that their drag queen friend views as toxic."
  },
  {
        id: 84, title: "Smells Like Teen Virgin", author: 38, warnings: [30, 1, 2], genres: [1], source: [12], intersectionalities: [], 
        identities: [{sexuality: 1, romantic: 4, gender: 1, explicit: 1, prominance: 1}, {sexuality: 2, romantic: 5, gender: 1, explicit: 1, prominance: 2}], 
        description: "Artemis is a Slayer, a human with powerful abilities to hunt monsters. Unfortunately virgin Slayer blood smells great to monsters, especially as the Slayer gets older. " 
        + "Artemis must either have sex, attract a constant stream of monsters, or figure out a different way. (Note, the side character is questioning if ace or demi, put under demi tag for simplicity"
  },
  {
        id: 85, title: "Moonspirited:", author: 39, warnings: [14], genres: [3, 1], source: [12], intersectionalities: [3], 
        identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 1}, {sexuality: 1, romantic: 1, gender: 3, explicit: 2, prominance: 1}], 
        description: "A girl’s sister is kidnapped by the gods, and she will do anything to get her sister back.",
        intersectionalityDetail: "Both characters Japanese inspired, side character nonbinary coded due to non-human nature"
  },
  {
        id: 86, title: "The Third Star", author: 27, warnings: [2], genres: [3], source: [12], intersectionalities: [1, 2], 
        identities: [{sexuality: 1, romantic: 1, gender: 6, explicit: 1, prominance: 1}], 
        description: "Orion and zir queer platonic partners are trapped in a spaceship after escaping a cosmic entity that attacked the space station they were on.",
        intersectionalityDetail: "Autistic"
  },
  {
        id: 87, title: "The Mermaid's Sister", author: 41, warnings: [2, 14], genres: [1], source: [12], intersectionalities: [], 
        identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 1}], 
        description: "A Little Mermaid retelling from the point of view of Ariel’s sister, who is determined to get Ariel back. "
  },
  {
        id: 88, title: "The Hazards of Pressing Play", author: 42, warnings: [6, 15, 31], genres: [10], source: [12], intersectionalities: [2, 3], 
        identities: [{sexuality: 1, romantic: 6, gender: 1, explicit: 1, prominance: 1}, {sexuality: 1, romantic: 5, gender: 1, explicit: 1, prominance: 2}, 
            {sexuality: 1, romantic: 4, gender: 2, explicit: 1, prominance: 2}], 
        description: "Violet’s girlfriend is kidnapped, and Violet must find her before it is too late.",
        intersectionalityDetail: "Main character is a wheelchair user and has spastic cerebral palsy and hyperacusis. Male side character is Egyptian-American"
  },
  {
        id: 89, title: "The Witch of Festa Falls", author: 43, warnings: [14, 11, 29, 22], genres: [1, 11], source: [12], intersectionalities: [], 
        identities: [{sexuality: 1, romantic: 1, gender: 1, explicit: 2, prominance: 1}], description: "A girl in 1730s Norway must find the being that killed her cousin."
  },
  {
        id: 90, title: "The Shimmering Prayer of Sûkiurâq", author: 44, intersectionalities: [2], genres: [1], length: 1, warnings: [2, 16], 
        identities: [{gender: 3, sexuality: 6, romantic: 1, prominance: 1, explicit: 2}], description: "A teen wants to become a magical dancer."
  },
  {
        id: 91, title: "Unspoken", author: 6, intersectionalities: [2], genres: [5], source: [4,10], length: 3, link: "https://aroworlds.com/2019/01/05/hallo-aro-unspoken-k-a-cook/",
        description: "An allo-aro considers how to ask a friend for a sexual queerplatonic relationship.", warnings: [],
        identities: [{sexuality: 4, romantic: 1, gender: 6, explicit: 1, prominance: 1}], intersectionalityDetail: "Main character is agender."
  },
  {
        id: 92, title: "Existence", author: 6, link: "https://aroworlds.com/2019/03/13/hallo-aro-existence-k-a-cook/", length: 3, source: [4],
        identities: [{sexuality: 5, romantic: 1, gender: 6, explicit: 1, prominance: 1},{sexuality: 1, romantic: 1, gender: 1, explicit: 1, prominance: 2}],
        description: "An allo-aro comes to terms with the difficulty of finding the aromantic identity.", warnings: [], genres: [5], intersectionalities: [1]
  },
  {
        id: 93, title: "Neuronormative", author: 6, link: "https://aroworlds.com/2019/07/12/hallo-aro-neuronormative-k-a-cook/", genres: [5],
        description: "An autistic allo-aro struggles with the expectations of society.", intersectionalities: [1], warnings: [], length: 3,
        intersectionalityDetail: "Autism", identities: [{sexuality: 4, romantic: 1, gender: 5, prominance: 1, explicit: 1}], source: [4]
  },
  {
        id: 94, title: "Loveless", author: 6, link: "https://aroworlds.com/2019/08/13/hallo-aro-loveless-k-a-cook/", series: 6, genres: [1],
        description: "An aromantic man discusses his feelings of lovelessness.", warnings: [7], source: [4,10], intersectionalities: [],
        identities: [{sexuality: 5, romantic: 1, gender: 2, explicit: 2, prominance: 1}], length: 3
  },
  {
        id: 95, title: "Question", author: 6, link: "https://aroworlds.com/2020/12/30/hallo-aro-question-k-a-cook/", length: 3, genres: [5],
        identities: [{romantic: 1, sexuality: 4, gender: 5, explicit: 1, prominance: 1}], intersectionalities: [], source: [4], warnings: [14,12],
        description: "Character addresses the difficulties from facing family members' amatonormativity."
  },
  {
        id: 96, title: "Antagonist", author: 6, link: "https://aroworlds.com/2021/11/08/hallo-aro-antagonist-k-a-cook/", genres: [5],
        identities: [{romantic: 1, sexuality: 7, gender: 2, explicit: 1, prominance: 1}], intersectionalities: [2], warnings: [25,18],
        description: "A trans aro man realises he's been cast as the villain.", intersectionalityDetail: "Trans man", source: [4]
  },
  {
        id: 97, title: "Pressure, Side One", author: 6, link: "https://aroworlds.com/2020/05/19/hallo-aro-pressure-side-one-k-a-cook/", genres: [5],
        identities: [{romantic: 1, sexuality: 6, explicit: 1, gender: 6, prominance: 1}], warnings: [14, 25], intersectionalities: [2], length:3,
        description: "Reflections of an aromantic bisexual in an amatonormative, sex-negative world.", source: [4]
  },
  {
        id: 98, title: "Pressure, Side Two", author: 6, link: "https://aroworlds.com/2020/06/23/hallo-aro-pressure-side-two-k-a-cook/", length: 3,
        identities: [{romantic: 1, sexuality: 4, gender: 5, prominance: 1, explicit: 1}], intersectionalities: [], source: [4], genres: [5],
        description: "Reflections of an allo-aro in aromantic spaces favouring ace-aro experiences.", warnings: []
  },
  {
        id: 99, title: "The Wind and the Stars", author: 6, link: "https://aroworlds.com/2018/08/15/the-wind-and-the-stars-k-a-cook/",
        identities: [{romantic: 1, sexuality: 1, gender: 6, explicit: 2, prominance: 1}], genres: [1], warnings: [], intersectionalities: [2],
        description: "A play on the fairy tale structure as an aro-ace protagonist questions assumptions on life.", source: [10]
  },
  // complete these
  {
        id: 100, title: "Old Fashioned", author: 6, link: "https://aroworlds.com/wp-content/uploads/2019/09/old-fashioned-k.-a.-cook.pdf",
        source: [13], warnings: [2], genres: [1], intersectionalities: [1], intersectionalityDetail: "A side character has an amputated leg.",
        identities: [{romantic: 2, sexuality: 3, gender: 1, prominance: 1, explicit: 1},{romantic: 1, sexuality: 8, gender: 3, prominance: 2, explicit: 1}], 
        description: "Amelia March is tired of suitors breaking into her home to profess their undying love for her.", series: 4
  },
  {
        id: 101, title: "Conception", author: 6, link: "https://aroworlds.com/wp-content/uploads/2020/08/conception-k.-a.-cook.pdf",
        source: [13], warnings: [15], genres: [1], intersectionalities: [1,2,3], series: 4, length: 2,
        intersectionalityDetail: "The two main characters are trans and autistic, one has a prosthetic leg and is described as black.",
        identities: [{gender: 1, sexuality: 3, romantic: 2, prominance: 1, explicit:3},{gender: 2, sexuality: 8, romantic: 1, prominance: 1, explicit: 3}], 
        description: "Amelia Marsh is disconcerted to find her cousin on her doorstep, pregnant and with a sword."
  },
  {
        id: 102, title: "Kin of Mind", author: 6, source: [13], warnings: [], genres: [], intersectionalities: [], identities: [], description: ""
  },
  {
        id: 103, title: "Certain Eldritch Artefacts", author: 6, link: "https://aroworlds.com/wp-content/uploads/2019/09/certain-eldritch-artefacts-k.-a.-cook.pdf",
        source: [13], warnings: [15,20], genres: [1], intersectionalities: [1], length: 2, 
        intersectionalityDetail: "The main character is autistic and dispraxic (described as divergent)",
        identities: [{gender: 2, sexuality: 5, romantic: 1, prominance: 1, explicit: 3}], description: ""
  },
  {
        id: 104, title: "Love in the House of the Ravens", author: 6, link: "https://aroworlds.com/wp-content/uploads/2021/06/love-in-the-house-of-the-ravens-k.-a.-cook.pdf",
        source: [13], warnings: [], genres: [], intersectionalities: [], identities: [], description: ""
  },
  {
        id: 105, title: "One Strange Man", author: 6, source: [13], warnings: [], genres: [], intersectionalities: [], identities: [], description: ""
  },
  {
        id: 106, title: "The Morning After", author: 6, source: [13], warnings: [], genres: [], intersectionalities: [], identities: [], description: ""
  },
  {
        id: 107, title: "King's Pawn", author: 6, source: [13], warnings: [], genres: [], intersectionalities: [], identities: [], description: ""
  },
  {
        id: 108, title: "Scholar’s Gambit", author: 6, source: [13], warnings: [], genres: [], intersectionalities: [], identities: [], description: ""
  },
  {
        id: 109, title: "The Adventure King", author: 6, link: "https://aroworlds.com/wp-content/uploads/2019/09/the-adventurer-king-k.-a.-cook.pdf",
        source: [13], warnings: [], genres: [], intersectionalities: [], identities: [], description: ""
  },
  {
        id: 110, title: "Their Courts of Crows", author: 6, link: "https://aroworlds.com/wp-content/uploads/2019/09/their-courts-of-crows-k.-a.-cook.pdf",
        source: [13], warnings: [], intersectionalities: [], genres: [], identities: [], description: ""
  },
  {
        id: 111, title: "Maybe When the Bones Crumble", author: 6, link: "https://aroworlds.com/wp-content/uploads/2020/08/maybe-when-the-bones-crumble-k.-a.-cook.pdf",
        source: [13], warnings: [], intersectionalities: [], genres: [], identities: [], description: ""
  },
  {
        id: 112, title: "A Prince of the Dead", author: 6, link: "https://aroworlds.com/wp-content/uploads/2019/09/a-prince-of-the-dead-k.-a.-cook.pdf",
        source: [13], warnings: [], intersectionalities: [], genres: [], identities: [], description: ""
  },
  {
        id: 113, title: "The King of Gears and Bone", author: 6, link: "https://aroworlds.com/wp-content/uploads/2019/09/the-king-of-gears-and-bone-k.-a.-cook.pdf",
        source: [13], warnings: [], intersectionalities: [], genres: [], identities: [], description: ""
  }
 ]
