let burnimage = '<img style="width: 2vh; height: auto;" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx2m-6a187f20-c54f-443c-abb5-6304a14d1d39.png/v1/fill/w_895,h_893/fire_energy_card_vector_symbol_by_biochao_dezrx2m-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cngybS02YTE4N2YyMC1jNTRmLTQ0M2MtYWJiNS02MzA0YTE0ZDFkMzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MrtaX3vm446Kd5jU02FfLdjMSyXljqW0ahnU8jEo0aE" alt="">';
let paraimage = '<img style="width: 2vh; height: auto;" src="https://pm1.aminoapps.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg" alt="">';
let playerstatusimage = ''
let rivalstatusimage = ''
let playerstatus = false
let rivalstatus = false
let playerburned = false
let rivalburned = false
let playerpara = false
let rivalpara = false
let app = document.getElementById('app')
let randomencounter = "";
let statstates = [
    2 / 8, 2 / 7, 2 / 6, 2 / 5, 2 / 4, 2 / 3, 2 / 2, 3 / 2, 4 / 2, 5 / 2, 6 / 2, 7 / 2, 8 / 2
]

let playerattack = 6;
let rivalattack = 6;
let playerdefense = 6;
let rivaldefense = 6;
let playeraccuracy = 1
let rivalaccuracy = 1

let player = {
    name: 'Red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/d/d3/Lets_Go_Pikachu_Eevee_Red.png/250px-Lets_Go_Pikachu_Eevee_Red.png',
    avatar: `<div>
    <div style="text-align:center">Red</div>
    <img src="https://archives.bulbagarden.net/media/upload/thumb/d/d3/Lets_Go_Pikachu_Eevee_Red.png/250px-Lets_Go_Pikachu_Eevee_Red.png" alt="}">
    `,
    pokemon: [],
}

let rival = {
    name: 'Aaron',
    avatar: `<div style="position: fixed; top: 5%; right: 5%; width: 150px; text-align: center">
    Aaron
    <img style="width: 14vh; height: auto" src="https://images6.fanpop.com/image/photos/34100000/Aaron-pokemon-aaron-34187812-313-474.gif" alt="">
    </div>
    `,
    startviewavatar: `
    <div style="margin-left: 2.3vh">
    <img style = "width: 14vh; height: auto" src="https://www.serebii.net/pokemonmasters/syncpairs/cynthia.png" alt="">
    </div>
    `,


    pokemon: [
        {
            name: "Heracross",
            maxhealth: 180,
            health: 180,
            image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokedex/0/04/800px-Ash_Heracross.png",
            level: 53,
            speed: 85,
            move1name: 'Close Combat',
            move1: 'Closecombat',
            move2name: 'Megahorn',
            move2: 'Megahorn',
            move3name: 'Thief',
            move3: 'Thief',
            move4name: 'Thief',
            move4: 'Thief',
        },
        {
            name: "Drapion",
            maxhealth: 200,
            health: 200,
            image: "https://i.ytimg.com/vi/Kcsml3uOX0k/sddefault.jpg",
            level: 55,
            speed: 95,
            move1name: 'Knock Off',
            move1: 'Knockoff',
            move2name: 'Knock Off',
            move2: 'Knockoff',
            move3name: 'Earthquake',
            move3: 'Earthquake',
            move4name: 'Bite',
            move4: 'Bite',
        },
        {
            name: "Golem",
            maxhealth: 220,
            health: 220,
            image: "https://staticg.sportskeeda.com/editor/2021/05/27b99-16224530347239-800.jpg",
            level: 55,
            speed: 45,
            move1name: 'Explosion',
            move1: 'Explosion',
            move2name: 'Stone Edge',
            move2: 'Stoneedge',
            move3name: 'Earthquake',
            move3: 'Earthquake',
            move4name: 'Double Edge',
            move4: 'Doubleedge',
        },
        {
            name: "Hippowdon",
            maxhealth: 240,
            health: 240,
            image: "https://i.ebayimg.com/images/g/1uYAAOSwTcNiRJVo/s-l1200.jpg",
            level: 57,
            speed: 47,
            move1name: 'Fire Fang',
            move1: 'Firefang',
            move2name: 'Earthquake',
            move2: 'Earthquake',
            move3name: 'Crunch',
            move3: 'Crunch',
            move4name: 'Body Slam',
            move4: 'Bodyslam',
        },
        {
            name: "Rapidash",
            maxhealth: 280,
            health: 280,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3321c70e-a1a8-4754-9c16-dde2c745e9c4/d2kqb11-0afeb81f-c7ac-439f-9b1a-151f565bc58b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzMjFjNzBlLWExYTgtNDc1NC05YzE2LWRkZTJjNzQ1ZTljNFwvZDJrcWIxMS0wYWZlYjgxZi1jN2FjLTQzOWYtOWIxYS0xNTFmNTY1YmM1OGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fnAg8zaAUmg0pnaw78HKJgv3L-zVtTODYNeCMnBVgek",
            level: 57,
            speed: 105,
            move1name: 'Flare Blitz',
            move1: 'Flareblitz',
            move2name: 'Protect',
            move2: 'Protect',
            move3name: 'Swords Dance',
            move3: 'Swordsdance',
            move4name: 'Will o wisp',
            move4: 'Willowisp',
        },
        {
            name: "Infernape",
            maxhealth: 300,
            health: 300,
            image: "https://staticg.sportskeeda.com/editor/2021/11/63a3e-16374329308049-1920.jpg",
            level: 59,
            speed: 108,
            move1name: 'Close Combat',
            move1: 'Closecombat',
            move2name: 'Mach Punch',
            move2: 'Machpunch',
            move3name: 'Will o Wisp',
            move3: 'Willowisp',
            move4name: 'Flare Blitz',
            move4: 'Flareblitz',
        },
        {
            name: "Bronzong",
            maxhealth: 300,
            health: 300,
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/437.png",
            level: 59,
            speed: 33,
            move1name: 'Trick Room',
            move1: 'Trickroom',
            move2name: 'Zen Headbutt',
            move2: 'Zenheadbutt',
            move3name: 'Earthquake',
            move3: 'Earthquake',
            move4name: 'Bulldoze',
            move4: 'Bulldoze',
        },
        {
            name: "Alakazam",
            maxhealth: 320,
            health: 320,
            image: "https://facts.net/wp-content/uploads/2023/07/18-facts-about-alakazam-1689385517.jpg",
            level: 61,
            speed: 120,
            move1name: 'Thunder Wave',
            move1: 'Thunderwave',
            move2name: 'Shadow Ball',
            move2: 'Shadowball',
            move3name: 'Nasty Plot',
            move3: 'Nastyplot',
            move4name: 'Thunderbolt',
            move4: 'Thunderbolt',
        },
        {
            name: "Garchomp",
            maxhealth: 340,
            health: 340,
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
            level: 61,
            speed: 102,
            move1name: 'Earthquake',
            move1: 'Earthquake',
            move2name: 'Draco Meteor',
            move2: 'Dracometeor',
            move3name: 'Dragon Dance',
            move3: 'Dragondance',
            move4name: 'Dragon Tail',
            move4: 'Dragontail',
        },
        {
            name: "Bidoof",
            maxhealth: 400,
            health: 400,
            image: "https://facts.net/wp-content/uploads/2023/07/12-facts-about-bidoof-1689335853.jpg",
            level: 65,
            speed: 1000,
            move1name: 'Judgement',
            move1: 'Judgement',
            move2name: 'Hyper Beam',
            move2: 'Hyperbeam',
            move3name: 'Swords Dance',
            move3: 'Swordsdance',
            move4name: 'Hyper Beam',
            move4: 'Hyperbeam',
        },
    ],
}

let pokemon = [
    {
        name: "Dwebble",
        maxhealth: 120,
        health: 120,
        image: "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season14/season14_ep11_ss01.jpg",
        level: 50,
        speed: 55,
        move1name: 'Iron Defense',
        move1: 'Irondefense',
        move2name: 'Protect',
        move2: 'Protect',
        move3name: 'Stone Edge',
        move3: 'Stoneedge',
        move4name: 'Bulldoze',
        move4: 'Bulldoze',
    },
    {
        name: "Froakie",
        maxhealth: 120,
        health: 120,
        image: "https://dotesports.com/wp-content/uploads/2022/06/15073426/ezgif-2-440236c90c.jpg?w=1200",
        level: 50,
        speed: 71,
        move1name: 'Tackle',
        move1: 'Tackle',
        move2name: 'Growl',
        move2: 'Growl',
        move3name: 'Swords Dance',
        move3: 'Swordsdance',
        move4name: 'Protect',
        move4: 'Protect',
    },
    {
        name: "Spritzee",
        maxhealth: 170,
        health: 170,
        image: "https://facts.net/wp-content/uploads/2023/07/13-facts-about-spritzee-1689760604.jpg",
        level: 50,
        speed: 23,
        move1name: 'Psychic',
        move1: 'Psychic',
        move2name: 'Recover',
        move2: 'Recover',
        move3name: 'Lunar Blessing',
        move3: 'Lunarblessing',
        move4name: 'Protect',
        move4: 'Protect',
    },
    {
        name: "Pikachu",
        maxhealth: 150,
        health: 150,
        image: "https://facts.net/wp-content/uploads/2023/07/20-facts-about-pikachu-1689578613.jpg",
        level: 50,
        speed: 90,
        move1name: 'Tackle',
        move1: 'Tackle',
        move2name: 'Growl',
        move2: 'Growl',
        move3name: 'Thunderbolt',
        move3: 'Thunderbolt',
        move4name: 'Protect',
        move4: 'Protect',
    },
    {
        name: "Gengar",
        maxhealth: 200,
        health: 200,
        image: "https://archives.bulbagarden.net/media/upload/thumb/4/4d/Ash_Gengar.png/250px-Ash_Gengar.png",
        level: 50,
        speed: 110,
        move1name: 'Will o wisp',
        move1: 'Willowisp',
        move2name: 'Shadow Ball',
        move2: 'Shadowball',
        move3name: 'Nasty Plot',
        move3: 'Nastyplot',
        move4name: 'Thunderbolt',
        move4: 'Thunderbolt',
    },
    {
        name: "Geodude",
        maxhealth: 150,
        health: 150,
        image: "https://facts.net/wp-content/uploads/2023/07/18-facts-about-geodude-1689579210.jpg",
        level: 50,
        speed: 20,
        move1name: 'Tackle',
        move1: 'Tackle',
        move2name: 'Growl',
        move2: 'Growl',
        move3name: 'Swords Dance',
        move3: 'Swordsdance',
        move4name: 'Stone Edge',
        move4: 'Stoneedge',
    },
    {
        name: "Gible",
        maxhealth: 150,
        health: 150,
        image: "https://facts.net/wp-content/uploads/2023/07/19-facts-about-gible-1689243192.jpg",
        level: 50,
        speed: 42,
        move1name: 'Dragon Claw',
        move1: 'Dragonclaw',
        move2name: 'Take Down',
        move2: 'Takedown',
        move3name: 'Swords Dance',
        move3: 'Swordsdance',
        move4name: 'Earthquake',
        move4: 'Earthquake',
    },
    {
        name: "Heracross",
        maxhealth: 220,
        health: 220,
        image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokedex/0/04/800px-Ash_Heracross.png",
        level: 50,
        speed: 85,
        move1name: 'Close Combat',
        move1: 'Closecombat',
        move2name: 'Megahorn',
        move2: 'Megahorn',
        move3name: 'Swords Dance',
        move3: 'Swordsdance',
        move4name: 'Thief',
        move4: 'Thief',
    },
    {
        name: "Drapion",
        maxhealth: 200,
        health: 200,
        image: "https://i.ytimg.com/vi/Kcsml3uOX0k/sddefault.jpg",
        level: 50,
        speed: 95,
        move1name: 'Knock Off',
        move1: 'Knockoff',
        move2name: 'Cross Poison',
        move2: 'Crosspoison',
        move3name: 'Bite',
        move3: 'Bite',
        move4name: 'Earthquake',
        move4: 'Earthquake',
    },
    {
        name: "Golem",
        maxhealth: 220,
        health: 220,
        image: "https://staticg.sportskeeda.com/editor/2021/05/27b99-16224530347239-800.jpg",
        level: 50,
        speed: 45,
        move1name: 'Explosion',
        move1: 'Explosion',
        move2name: 'Stone Edge',
        move2: 'Stoneedge',
        move3name: 'Earthquake',
        move3: 'Earthquake',
        move4name: 'Giga Impact',
        move4: 'Gigaimpact',
    },
    {
        name: "Hippowdon",
        maxhealth: 220,
        health: 220,
        image: "https://i.ebayimg.com/images/g/1uYAAOSwTcNiRJVo/s-l1200.jpg",
        level: 50,
        speed: 47,
        move1name: 'Fire Fang',
        move1: 'Firefang',
        move2name: 'Earthquake',
        move2: 'Earthquake',
        move3name: 'Crunch',
        move3: 'Crunch',
        move4name: 'Body Slam',
        move4: 'Bodyslam',
    },
    {
        name: "Rapidash",
        maxhealth: 180,
        health: 180,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3321c70e-a1a8-4754-9c16-dde2c745e9c4/d2kqb11-0afeb81f-c7ac-439f-9b1a-151f565bc58b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzMjFjNzBlLWExYTgtNDc1NC05YzE2LWRkZTJjNzQ1ZTljNFwvZDJrcWIxMS0wYWZlYjgxZi1jN2FjLTQzOWYtOWIxYS0xNTFmNTY1YmM1OGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fnAg8zaAUmg0pnaw78HKJgv3L-zVtTODYNeCMnBVgek",
        level: 50,
        speed: 105,
        move1name: 'Flare Blitz',
        move1: 'Flareblitz',
        move2name: 'Tackle',
        move2: 'Tackle',
        move3name: 'Swords Dance',
        move3: 'Swordsdance',
        move4name: 'Will o wisp',
        move4: 'Willowisp',
    },
    {
        name: "Infernape",
        maxhealth: 180,
        health: 180,
        image: "https://staticg.sportskeeda.com/editor/2021/11/63a3e-16374329308049-1920.jpg",
        level: 50,
        speed: 108,
        move1name: 'Close Combat',
        move1: 'Closecombat',
        move2name: 'Mach Punch',
        move2: 'Machpunch',
        move3name: 'Will o Wisp',
        move3: 'Willowisp',
        move4name: 'Flare Blitz',
        move4: 'Flareblitz',
    },
    {
        name: "Bronzong",
        maxhealth: 200,
        health: 200,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/437.png",
        level: 50,
        speed: 33,
        move1name: 'Trick Room',
        move1: 'Trickroom',
        move2name: 'Zen Headbutt',
        move2: 'Zenheadbutt',
        move3name: 'Earthquake',
        move3: 'Earthquake',
        move4name: 'Bulldoze',
        move4: 'Bulldoze',
    },
    {
        name: "Alakazam",
        maxhealth: 170,
        health: 170,
        image: "https://facts.net/wp-content/uploads/2023/07/18-facts-about-alakazam-1689385517.jpg",
        level: 50,
        speed: 120,
        move1name: 'Psychic',
        move1: 'Psychic',
        move2name: 'Thunder Wave',
        move2: 'Thunderwave',
        move3name: 'Nasty Plot',
        move3: 'Nastyplot',
        move4name: 'Thunderbolt',
        move4: 'Thunderbolt',
    },
    {
        name: "Garchomp",
        maxhealth: 220,
        health: 220,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
        level: 50,
        speed: 102,
        move1name: 'Earthquake',
        move1: 'Earthquake',
        move2name: 'Draco Meteor',
        move2: 'Dracometeor',
        move3name: 'Dragon Dance',
        move3: 'Dragondance',
        move4name: 'Dragon Tail',
        move4: 'Dragontail',
    },
    {
        name: "Lugia",
        maxhealth: 250,
        health: 250,
        image: "https://videogames.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTk2MjE5ODY0ODc5MjExODI0/pokemon-go-lugia-1.jpg",
        level: 50,
        speed: 110,
        move1name: 'Calm Mind',
        move1: 'Calmmind',
        move2name: 'Dragon Rush',
        move2: 'Dragonrush',
        move3name: 'Brave Bird',
        move3: 'Bravebird',
        move4name: 'Body Slam',
        move4: 'Bodyslam',
    },
    {
        name: "Arceus",
        maxhealth: 260,
        health: 260,
        image: "https://www.denofgeek.com/wp-content/uploads/2022/02/Arceus-art.v1.jpg?fit=2208%2C1436",
        level: 50,
        speed: 120,
        move1name: 'Calm Mind',
        move1: 'Calmmind',
        move2name: 'Judgment',
        move2: 'Judgement',
        move3name: 'Brave Bird',
        move3: 'Bravebird',
        move4name: 'Giga Impact',
        move4: 'Gigaimpact',
    },
    {
        name: "Bidoof",
        maxhealth: 100,
        health: 100,
        image: "https://facts.net/wp-content/uploads/2023/07/12-facts-about-bidoof-1689335853.jpg",
        level: 50,
        speed: 31,
        move1name: 'Tackle',
        move1: 'Tackle',
        move2name: 'Body Slam',
        move2: 'Bodyslam',
        move3name: 'Swords Dance',
        move3: 'Swordsdance',
        move4name: 'Growl',
        move4: 'Growl',
    },
    {
        name: "Weavile",
        maxhealth: 170,
        health: 170,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png",
        level: 50,
        speed: 125,
        move1name: 'Thief',
        move1: 'Thief',
        move2name: 'Swords Dance',
        move2: 'Swordsdance',
        move3name: 'Bite',
        move3: 'Bite',
        move4name: 'Shadow Ball',
        move4: 'Shadowball',
    },
    {
        name: "Slowbro",
        maxhealth: 180,
        health: 180,
        image: "https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9821_701E10362_01.jpg",
        level: 50,
        speed: 30,
        move1name: 'Calm Mind',
        move1: 'Calmmind',
        move2name: 'Surf',
        move2: 'Surf',
        move3name: 'Psychic',
        move3: 'Psychic',
        move4name: 'Splash',
        move4: 'Splash',
    },
    {
        name: "Breloom",
        maxhealth: 170,
        health: 170,
        image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokedex/2/29/Kenny_Breloom.png",
        level: 50,
        speed: 70,
        move1name: 'Mach Punch',
        move1: 'Machpunch',
        move2name: 'Power Up Punch',
        move2: 'Poweruppunch',
        move3name: 'Bullet Seed',
        move3: 'Bulletseed',
        move4name: 'Close Combat',
        move4: 'Closecombat',
    },
    {
        name: "Magikarp",
        maxhealth: 50,
        health: 50,
        image: "https://static.pokemonpets.com/images/monsters-images-800-800/2129-Shiny-Magikarp.webp",
        level: 50,
        speed: 80,
        move1name: 'Tackle',
        move1: 'Tackle',
        move2name: 'Splash',
        move2: 'Splash',
        move3name: 'Splash',
        move3: 'Splash',
        move4name: 'Splash',
        move4: 'Splash',
    }
]

let viewstate = 0;
let caughtpokemonname;
let test = 0;
let currentroster = '';
let catchedIndex = 0;
let onlyonce = true;
let playergigaimpactcd = 0
let rivalgigaimpactcd = 0
let playerlead;
let playermovemessage;
let rivalmovemessage;
let buttonsenabled = true;
let speedcheck;
let currentview = "start";
let battlemessage = ''
let playerrosterlength;
let rivalrosterlength;
let playerisfaster
let usermove
let turndecider

const adventuretheme = new Audio('sounds/adventuretheme.mp3')
const championtheme = new Audio('sounds/championtheme.mp3')
const elitefourtheme = new Audio('sounds/elitefourtheme.mp3')
const victorytheme = new Audio('sounds/victorytheme.mp3')
victorytheme.loop = true;
adventuretheme.loop = true;
championtheme.loop = true;
elitefourtheme.loop = true;
const tackle = new Audio('sounds/tackle.mp3')
const gigaimpact = new Audio('sounds/gigaimpact.mp3')
const willowisp = new Audio('sounds/willowisp.mp3')
const shadowball = new Audio('sounds/shadowball.mp3')
const poisonjab = new Audio('sounds/poisonjab.mp3')
const trickroom = new Audio('sounds/trickroom.mp3')
const firefang = new Audio('sounds/firefang.mp3')
const bite = new Audio('sounds/bite.mp3')
const zenheadbutt = new Audio('sounds/zenheadbutt.mp3')
const knockoff = new Audio('sounds/knockoff.mp3')
const thief = new Audio('sounds/thief.mp3')
const machpunch = new Audio('sounds/machpunch.mp3')
const explosion = new Audio('sounds/explosion.mp3')
const protect = new Audio('sounds/protect.mp3')
const dragontail = new Audio('sounds/dragontail.mp3')
const poweruppunch = new Audio('sounds/poweruppunch.mp3')
const thunderbolt = new Audio('sounds/thunderbolt.mp3')
const bodyslam = new Audio('sounds/bodyslam.mp3')
const thunderwave = new Audio('sounds/thunderwave.mp3')
const splash = new Audio('sounds/splash.mp3')
const surf = new Audio('sounds/surf.mp3')
const judgment = new Audio('sounds/judgment.mp3')
const calmmind = new Audio('sounds/calmmind.mp3')
const dracometeor = new Audio('sounds/dracometeor.mp3')
const earthquake = new Audio('sounds/earthquake.mp3')
const bravebird = new Audio('sounds/bravebird.mp3')
const dragonrush = new Audio('sounds/dragonrush.mp3')
const doubleedge = new Audio('sounds/doubleedge.mp3')
const nastyplot = new Audio('sounds/nastyplot.mp3')
const irontail = new Audio('sounds/irontail.mp3')
const flareblitz = new Audio('sounds/flareblitz.mp3')
const crunch = new Audio('sounds/crunch.mp3')
const megahorn = new Audio('sounds/megahorn.mp3')
const closecombat = new Audio('sounds/closecombat.mp3')
const takedown = new Audio('sounds/takedown.mp3')
const recover = new Audio('sounds/recover.mp3')
const stoneedge = new Audio('sounds/stoneedge.mp3')
const lunardance = new Audio('sounds/lunardance.mp3')
const rollout = new Audio('sounds/rollout.mp3')
const swordsdance = new Audio('sounds/swordsdance.mp3')
const growl = new Audio('sounds/growl.mp3')
const irondefense = new Audio('sounds/irondefense.mp3')
const hyperbeam = new Audio('sounds/hyperbeam.mp3')
const dragonclaw = new Audio('sounds/dragonclaw.mp3')
const bulletseed = new Audio('sounds/bulletseed.mp3')
const psychic = new Audio('sounds/psychic.mp3')
const bulldoze = new Audio('sounds/bulldoze.mp3')
const potion = new Audio('sounds/potion.mp3')
const magikarp = new Audio('sounds/magikarp.mp3')
const breloom = new Audio('sounds/breloom.mp3')
const slowbro = new Audio('sounds/slowbro.mp3')
const weavile = new Audio('sounds/weavile.mp3')
const bidoof = new Audio('sounds/bidoof.mp3')
const arceus = new Audio('sounds/arceus.mp3')
const lugia = new Audio('sounds/lugia.mp3')
const garchomp = new Audio('sounds/garchomp.mp3')
const alakazam = new Audio('sounds/alakazam.mp3')
const bronzong = new Audio('sounds/bronzong.mp3')
const infernape = new Audio('sounds/infernape.mp3')
const rapidash = new Audio('sounds/rapidash.mp3')
const hippowdon = new Audio('sounds/hippowdon.mp3')
const golem = new Audio('sounds/golem.mp3')
const heracross = new Audio('sounds/heracross.mp3')
const geodude = new Audio('sounds/geodude.mp3')
const gengar = new Audio('sounds/gengar.mp3')
const spritzee = new Audio('sounds/spritzee.mp3')
const dwebble = new Audio('sounds/dwebble.mp3')
const froakie = new Audio('sounds/froakie.mp3')
const gible = new Audio('sounds/gible.mp3')
const drapion = new Audio('sounds/drapion.mp3')
const pikachu = new Audio('sounds/pikachu.mp3')
const statrise = new Audio('sounds/statrise.mp3')
const statfall = new Audio('sounds/statfall.mp3')

const sounds = {
    heracross: heracross,
    drapion: drapion,
    pikachu: pikachu,
    magikarp: magikarp,
    breloom: breloom,
    slowbro: slowbro,
    weavile: weavile,
    bidoof: bidoof,
    arceus: arceus,
    lugia: lugia,
    garchomp: garchomp,
    alakazam: alakazam,
    bronzong: bronzong,
    infernape: infernape,
    rapidash: rapidash,
    hippowdon: hippowdon,
    golem: golem,
    heracross: heracross,
    geodude: geodude,
    gengar: gengar,
    spritzee: spritzee,
    froakie: froakie,
    dwebble: dwebble,
    gible: gible,
};


appDiv.querySelectorAll('div').forEach(div => {
    let num = parseFloat(div.textContent);
    if (!isNaN(num)) {
        div.textContent = num.toFixed(0);
    }
});
