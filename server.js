const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const factionLeaders = {
    'morathi': {
        'faction': 'Cult of Pleasure',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'Ancient City of Quintex',
        'race': 'Dark Elves'
    },
    'malus darkblade': {
        'faction': 'Hag Graef',
        'requiredGameOrDLC': 'The Shadow & The Blade',
        'startingLocation': 'Dragon Fang Mount',
        'race': 'Dark Elves'
    },
    'crone hellebron': {
        'faction': 'Har Ganeth',
        'requiredGameOrDLC': 'The Queen and the Crone',
        'startingLocation': 'Har Ganeth',
        'race': 'Dark Elves'
    },
    'malekith': {
        'faction': 'Naggarond',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'Naggaroth',
        'race': 'Dark Elves'
    },
    'lokhir fellheart': {
        'faction': 'The Blessed Dread',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Chupayotl',
        'race': 'Dark Elves'
    },
    'rakarth': {
        'faction': 'The Thousand Maws',
        'requiredGameOrDLC': 'Free Total War Access download',
        'startingLocation': 'Isle of Wights',
        'race': 'Dark Elves'
    },
    'tyrion': {
        'faction': 'Eataine',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'Lothern',
        'race': 'High Elves'
    },
    'teclis': {
        'faction': 'Order of Loremasters',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'The Star Tower',
        'race': 'High Elves'
    },
    'alith anar': {
        'faction': 'Nagarythe',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Arnheim',
        'race': 'High Elves'
    },
    'alarielle the radiant': {
        'faction': 'Avelorn',
        'requiredGameOrDLC': 'The Queen and the Crone',
        'startingLocation': 'Gaen Vale',
        'race': 'High Elves'
    },
    'eltharion': {
        'faction': 'Yvresse',
        'requiredGameOrDLC': 'The Warden and the Paunch',
        'startingLocation': 'Tor Yvresse',
        'race': 'High Elves'
    },
    'imrik': {
        'faction': 'Knights of Caledor',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'The Fortress of Vorag',
        'race': 'High Elves'
    },
    'lord mazdamundi': {
        'faction': 'Hexoatl',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'Hexoatl',
        'race': 'Lizardmen'
    },
    'kroq-gar': {
        'faction': 'Last Defenders',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'Temple of Skulls',
        'race': 'Lizardmen'
    },
    "tiktaq'to": {
        'faction': 'Tlaqua',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Tlaqua',
        'race': 'Lizardmen'
    },
    'tehenhauin': {
        'faction': 'Cult of Sotek',
        'requiredGameOrDLC': 'The Prophet and the Warlock',
        'startingLocation': 'Xlanhuapec',
        'race': 'Lizardmen'
    },
    'nakai the wanderer': {
        'faction': 'Spirit of the Jungle',
        'requiredGameOrDLC': 'The Hunter and the Beast',
        'startingLocation': 'No Start City',
        'race': 'Lizardmen'
    },
    'gor-rok': {
        'faction': 'Itza',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Itza',
        'race': 'Lizardmen'
    },
    'oxyotl': {
        'faction': 'Ghosts of Pahaux',
        'requiredGameOrDLC': 'The Silence & The Fury',
        'startingLocation': 'The Frozen City',
        'race': 'Lizardmen'
    },
    'queek headtaker': {
        'faction': 'Clan Mors',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'Karag Orrud',
        'race': 'Skaven'
    },
    'tretch craventail': {
        'faction': 'Clan Rictus',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Hotek\'s Column',
        'race': 'Skaven'
    },
    'deathmaster snikch': {
        'faction': 'Clan Eshin',
        'requiredGameOrDLC': 'The Shadow & The Blade',
        'startingLocation': 'Flayed Rock',
        'race': 'Skaven'
    },
    'ikit claw': {
        'faction': 'Clan Skryre',
        'requiredGameOrDLC': 'The Prophet and the Warlock',
        'startingLocation': 'Skavenblight',
        'race': 'Skaven'
    },
    'throt the unclean': {
        'faction': 'Clan Moulder',
        'requiredGameOrDLC': 'The Twisted and the Twilight',
        'startingLocation': 'Hell Pit',
        'race': 'Skaven'
    },
    'lord skrolk': {
        'faction': 'Clan Pestilens',
        'requiredGameOrDLC': 'WH II',
        'startingLocation': 'Oxyl',
        'race': 'Skaven'
    },
    'markus wulfhart': {
        'faction': "The Huntsmarshal's Expedition",
        'requiredGameOrDLC': 'The Hunter and the Beast',
        'startingLocation': 'Temple of Kara',
        'race': 'The Empire'
    },
    'settra the imperishable': {
        'faction': 'Khemri',
        'requiredGameOrDLC': 'Rise of the Tomb Kings',
        'startingLocation': 'Khemri',
        'race': 'Tomb Kings'
    },
    'high queen khalida': {
        'faction': 'court of lybaras',
        'requiredGameOrDLC': 'Rise of the Tomb Kings',
        'startingLocation': 'Lybaras',
        'race': 'Tomb Kings'
    },
    'grand hierophant khatep': {
        'faction': 'Exiles of Nehek',
        'requiredGameOrDLC': 'Rise of the Tomb Kings',
        'startingLocation': 'Plain of Spiders',
        'race': 'Tomb Kings'
    },
    'arkhan the black': {
        'faction': 'Followers of Nagash',
        'requiredGameOrDLC': 'Rise of the Tomb Kings',
        'startingLocation': 'Wizard Caliph\'s Palace and Sorcerer\'s Islands',
        'race': 'Tomb Kings'
    },
    'luthor harkon': {
        'faction': 'The Awakened',
        'requiredGameOrDLC': 'Curse of the Vampire Coast',
        'startingLocation': 'The Awakening',
        'race': 'Vampire Coast'
    },
    'count noctilus': {
        'faction': 'Dreadfleet',
        'requiredGameOrDLC': 'Curse of the Vampire Coast',
        'startingLocation': 'Galleon\'s Graveyard',
        'race': 'Vampire Coast'
    },
    'aranessa saltspite': {
        'faction': 'Pirates of Sartosa',
        'requiredGameOrDLC': 'Curse of the Vampire Coast',
        'startingLocation': 'Sartosa',
        'race': 'Vampire Coast'
    },
    'cylostra direfin': {
        'faction': 'The Drowned',
        'requiredGameOrDLC': 'Curse of the Vampire Coast',
        'startingLocation': 'Monument of the Moon',
        'race': 'Vampire Coast'
    },
    'sisters of twilight': {
        'faction': 'Heralds of Ariel',
        'requiredGameOrDLC': 'The Twisted and the Twilight',
        'startingLocation': 'The Witchwood',
        'race': 'Wood Elves'
    },
    'drycha': {
        'faction': 'Wargrove of Woe',
        'requiredGameOrDLC': 'Realm of the Wood Elves',
        'startingLocation': 'Gryphon Wood',
        'race': 'Wood Elves'
    },
    'chevaliers de lyonesse': {
        'faction': 'Repanse de Lyonesse',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Copher',
        'race': 'Bretonnia'
    },
    'taurox': {
        'faction': 'Slaughterhorn Tribe',
        'requiredGameOrDLC': 'The Silence & The Fury',
        'startingLocation': 'No Start City',
        'race': 'Beastmen'
    },
    'thorek ironbrow': {
        'faction': "Ironbrow's Expedition",
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Karak Zorn',
        'race': 'Dwarfs'
    },
    'grom the paunch': {
        'faction': 'Broken Axe',
        'requiredGameOrDLC': 'The Warden and the Paunch',
        'startingLocation': 'Massif Orcal',
        'race': 'Greenskins'
    },
    'thorgrim grudgebearer': {
        'faction': 'Karaz-a-Karak',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Karaz-a-Karak',
        'race': 'Dwarfs'
    },
    'grombrindal': {
        'faction': 'Karaz-a-Karak',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Karaz-a-Karak',
        'race': 'Dwarfs'
    },
    'ungrim ironfist': {
        'faction': 'Karak Kadrin',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Karak Kadrin',
        'race': 'Dwarfs'
    },
    'belegar ironhammer': {
        'faction': 'Clan Angrund',
        'requiredGameOrDLC': 'The King and the Warlord',
        'startingLocation': 'Karak Izor',
        'race': 'Dwarfs'
    },
    'karl franz': {
        'faction': 'Reikland',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Altdorf',
        'race': 'The Empire'
    },
    'volkmar the grim': {
        'faction': 'Reikland',
        'requiredGameOrDLC': 'The Grim and the Grave',
        'startingLocation': 'Altdorf',
        'race': 'The Empire'
    },
    'balthasar gelt': {
        'faction': 'The Golden Order',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Pfeildorf',
        'race': 'The Empire'
    },
    'mannfred von carstein': {
        'faction': 'Sylvania',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Castle Drakenhof',
        'race': 'Vampire Counts'
    },
    'heinrich kemmler': {
        'faction': 'The Barrow Legion',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Blackstone Post',
        'race': 'Vampire Counts'
    },
    'vlad von carstein': {
        'faction': 'Von Carstein',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Schwartzhafen',
        'race': 'Vampire Counts'
    },
    'isabella von carstein': {
        'faction': 'Von Carstein',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Schwartzhafen',
        'race': 'Vampire Counts'
    },
    'grimgor ironhide': {
        'faction': 'Grimgors\'s \'Ardboyz',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Black Crag',
        'race': 'Greenskins'
    },
    'azhag the slaughter': {
        'faction': 'Bonerattlaz',
        'requiredGameOrDLC': 'WH I',
        'startingLocation': 'Red Eye Mountain',
        'race': 'Greenskins'
    },
    'wurrzag': {
        'faction': 'The Bloody Handz',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Ekrund',
        'race': 'Greenskins'
    },
    'skarsnik': {
        'faction': 'Crooked Moon',
        'requiredGameOrDLC': 'The King and the Warlord',
        'startingLocation': 'Karak Azgaraz',
        'race': 'Greenskins'
    },
    'khazrak the one-eye': {
        'faction': 'Warherd of the One-Eye',
        'requiredGameOrDLC': 'Call of the Beastmen',
        'startingLocation': 'No Start City',
        'race': 'Beastmen'
    },
    'malagor the dark omen': {
        'faction': 'Harbinger of Disaster',
        'requiredGameOrDLC': 'Call of the Beastmen',
        'startingLocation': 'No Start City',
        'race': 'Beastmen'
    },
    'morghur the shadowgrave': {
        'faction': 'Warherd of the Shadowgrave',
        'requiredGameOrDLC': 'Call of the Beastmen',
        'startingLocation': 'No Start City',
        'race': 'Beastmen'
    },
    'archaon the everchosen': {
        'faction': 'Warriors of Chaos',
        'requiredGameOrDLC': 'Chaos Warriors Race Pack',
        'startingLocation': 'No Start City',
        'race': 'Chaos'
    },
    'sigvald the magnificent': {
        'faction': 'Warriors of Chaos',
        'requiredGameOrDLC': 'Chaos Warriors Race Pack',
        'startingLocation': 'No Start City',
        'race': 'Chaos'
    },
    'kholek suneater': {
        'faction': 'Warriors of Chaos',
        'requiredGameOrDLC': 'Chaos Warriors Race Pack',
        'startingLocation': 'No Start City',
        'race': 'Chaos'
    },
    'king louen leoncoeur': {
        'faction': 'Couronne',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Couronne and L\'Anguille',
        'race': 'Bretonnia'
    },
    'alberic de bordeleaux': {
        'faction': 'Bordeleaux',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Bordeleaux and Aquitaine',
        'race': 'Bretonnia'
    },
    'the fay enchantress': {
        'faction': 'Carcassonne',
        'requiredGameOrDLC': 'Free Steam download',
        'startingLocation': 'Castle Carcassone and Brionne',
        'race': 'Bretonnia'
    },
    'orion': {
        'faction': 'Talsyn',
        'requiredGameOrDLC': 'Realm of the Wood Elves',
        'startingLocation': 'Talsyn',
        'race': 'Wood Elves'
    },
    'durthu': {
        'faction': 'Argwylon',
        'requiredGameOrDLC': 'Realm of the Wood Elves',
        'startingLocation': 'Argwylon',
        'race': 'Wood Elves'
    },
    'wulfrik the wanderer': {
        'faction': 'World Walkers',
        'requiredGameOrDLC': 'Norsca(DLC)',
        'startingLocation': 'Icedrake Fjord',
        'race': 'Norsca'
    },
    'throgg': {
        'faction': 'Wintertooth',
        'requiredGameOrDLC': 'Norsca(DLC)',
        'startingLocation': 'Winter Pyre',
        'race': 'Norsca'
    },
    'unknown': {
        'faction': 'unknown',
        'requiredGameOrDLC': 'unknown',
        'startingLocation': 'unknown',
        'race': 'unknown'
    },


}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})



app.get('/api', (request, response)=>{
    response.json(factionLeaders)
})

app.get('/api/:name', (request, response) =>{
    const factionLeadersInfo = request.params.name.toLowerCase()
    if(factionLeaders[factionLeadersInfo]){
        response.json(factionLeaders[factionLeadersInfo])
    }else{
        response.json(factionLeaders['unknown'])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})