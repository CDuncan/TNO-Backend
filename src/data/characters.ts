/* eslint-disable object-curly-newline */

import { FactionFull } from './meta';

interface Character {
    name: string;
    faction?: FactionFull;
    displayName?: number;
    nicknames?: string[];
    leader?: boolean;
    highCommand?: boolean;
    affiliate?: boolean;
    assume?: 'assumeNpNoOther' | 'assumeNp' | 'assumeOther' | 'someOther';
    assumeServer?: 'whitelist' | 'public';
}

type NpCharacters = { [key: string]: Character[] };

const reg = (r: RegExp): string => `/${r.source}/`;

// Make character map

export const npCharacters: NpCharacters = {
    '0Reed': [
        { name: 'Reed Dankleaf', faction: 'Lost MC' },
    ],
    '80bsaget': [
        { name: 'Tim Lee', displayName: 0 },
        { name: '[Officer] Bexar McCree', faction: 'Police' },
    ],
    '52chains': [
        { name: 'Fidel Guevara', nicknames: ['Don', 'Cabron'] },
        { name: 'Carmine "The Mouse" Costello' },
    ],
    aaron_rp: [
        { name: 'Aaron Alexander', faction: 'BSK', displayName: 0 },
    ],
    AaronOnAir: [
        { name: '[Officer] Dan Faily', faction: 'Police', nicknames: ['485'] },
        { name: 'Sal T. Block', faction: 'ASRR', displayName: 0 },
    ],
    abbay: [
        { name: 'Olivia Harvey' },
    ],
    abbbz: [
        { name: 'Sanjay Patel', faction: 'Burger Shot' },
    ],
    abby: [
        { name: 'Big Bertha', displayName: 0 },
        { name: 'Irma Gawd', displayName: 0 },
        { name: 'Ivy Wood' },
    ],
    abbyduren: [
        { name: 'Khrystal Vibez' },
    ],
    AbdulHD: [
        { name: 'Abdul AlRahim' },
        { name: '[Judge] Ali Habibi', faction: 'DoJ' },
        { name: 'Mustafa Habibi' },
        { name: 'Fahad AlArabi', faction: 'DoC' },
    ],
    Abou_: [
        { name: 'Modi Janta', faction: 'NBC' },
    ],
    Acaibear: [
        { name: '[Officer] Emily Reinhart', faction: 'Police' },
        { name: 'Jolene Mushkin', nicknames: ['Little Red'] },
    ],
    adeptthebest: [
        { name: 'Hannah Hiltop' },
        { name: '[Officer] Selena Mendoza', faction: 'Police' },
        { name: 'Mari Posa', displayName: 0 },
    ],
    adnormaltv: [
        { name: 'Ivan Gorbahtjov' },
    ],
    Adzzstarr: [
        { name: '[Dr.] Valentine', faction: 'Medical' },
    ],
    AfriicanSnowball: [
        { name: '[Justice] Buck Stanton', faction: 'DoJ' },
        { name: '[Deputy] Dwayne Carter IV', faction: 'Police', displayName: 2 },
        { name: 'Leland "LJ" Jones', faction: 'Pegasus' },
    ],
    Afro: [
        { name: 'Dexx Martin', faction: 'GSF', leader: true },
        { name: 'Jacob Harth', faction: 'Dark Web', leader: true },
        { name: 'Chris "CP" Porter' },
        { name: 'Sayid Mitra', nicknames: ['Sayeet'], displayName: 0 },
        { name: 'David "The Mime" Wonders', nicknames: ['"Concrete" Man'] },
        { name: 'Gordon Parks', nicknames: ['DoorLord'] },
    ],
    AidenNortha: [
        { name: '[Deputy] Kevin Keyte', faction: 'Police', displayName: 1 },
    ],
    aintitadam: [
        { name: 'Scruffy Doodle', faction: 'Burger Shot' },
    ],
    Airborne: [
        { name: '[Judge] Dennis LaBarre', faction: 'DoJ' },
        { name: 'Unity', nicknames: ['Cat'] },
    ],
    akaMONKEY: [
        { name: 'Arturo Ortiz', faction: 'Vagos' },
        { name: 'CamRon "Peanut" Giles', faction: 'SSB' },
        { name: 'Timoteo "TT" Bushnell', nicknames: ['Rasta'] },
    ],
    aleks: [
        { name: '[Chief of Police] Bobby Smith', faction: 'Police', leader: true, nicknames: ['Bob', 'Chief'], displayName: 1 },
        { name: '[FIB Agent] Heath Mercer', faction: 'Police' },
        { name: 'Vasily "V" Sazkaljovich', faction: 'Pegasus' },
    ],
    alexten0909: [
        { name: 'Alexander Campbell', faction: 'Angels', nicknames: ['Alex'], displayName: 3 },
    ],
    Alisha: [
        { name: 'Alisha Wuornos' },
    ],
    alpacagurl92: [
        { name: 'April Fooze', nicknames: ['first time'], displayName: 0 },
    ],
    AlyPlayNinja: [
        { name: '[Officer] Amelia Frost', faction: 'Police' },
    ],
    AndyMilonakis: [
        { name: 'Lil Erf', displayName: 0 },
        { name: 'Carmen Amuso' },
    ],
    AnimatedJF: [
        { name: 'Cameron Dupres', faction: 'DoJ' },
    ],
    AnneMunition: [
        { name: 'Sequoia Springs' },
    ],
    Anomaly: [
        { name: 'Ping Ping Samuelson', nicknames: ['Ping Ping'], displayName: 4 },
        { name: 'Larry Papidopoulos', nicknames: ['Papi'] },
    ],
    AnthonyZ: [
        { name: 'Tony Corleone', faction: 'Cleanbois' },
        { name: '[Officer] Anthony Copleone', faction: 'Police' },
    ],
    Apitoxin11: [
        { name: 'Trigger Freebird', faction: 'Harmony' },
    ],
    APPLESHAMPOO: [
        { name: '[Dispatch] Nancy Ree', faction: 'Police', displayName: 1 },
        { name: 'Gioconda "Gio" Coppola' },
    ],
    Arcadum: [
        { name: 'Svelt Tlevs', nicknames: ['Wizard'] },
    ],
    Armeeof1: [
        { name: 'Milton Pointdexter' },
    ],
    Ash_on_LoL: [
        { name: 'Ash Ketchup', faction: 'Burger Shot' },
    ],
    Ashi: [
        { name: 'Fiona Stewart', nicknames: ['Fi-ho-na'] },
        { name: 'Annie May', displayName: 0 },
    ],
    ashlynn: [
        { name: 'Cassie Cupcakes', faction: 'Angels' },
        { name: '[Officer] Brenda Pancake', faction: 'Police', displayName: 1, nicknames: ['Pancakes'] },
    ],
    Asteroba: [
        { name: '[D.A.] Larry Hallow', faction: 'DoJ' },
        { name: '[Deputy] Aaron Byson', faction: 'Police' },
        { name: 'Kermy Fulker', faction: 'HOA' },
        { name: '[EMS] Boba Stone', faction: 'Medical' },
    ],
    AuriEllis: [
        { name: 'Ursula Leichenberg', faction: 'News Media' },
    ],
    aurvinR: [
        { name: '[ADA] John Doe', faction: 'DoJ' },
    ],
    Aus24: [
        { name: 'Jordan Walker', faction: 'Harmony' },
        { name: '[Officer] Jack Davenport', faction: 'Police' },
    ],
    AustinCreed: [
        { name: 'Austin Creed', displayName: 0 },
    ],
    Autumn: [
        { name: 'Autumn Rhodes' },
    ],
    Auxidental: [
        { name: 'Trey Romano', faction: 'Pegasus' },
    ],
    AvaGG: [
        { name: 'Karen Dahmer', faction: 'Chang Gang', affiliate: true, nicknames: ['Kawen'] },
    ],
    aXed_U: [
        { name: 'Hans Snitzel' },
    ],
    Baki961: [
        { name: 'Yoshimoto Nakanishi' },
    ],
    bananabrea: [
        { name: 'Claire Seducer', faction: 'Angels' },
        { name: 'Becky Hopper', displayName: 0 },
        { name: '[Officer] Tyme Reducer', faction: 'Police' },
    ],
    BananaDuck: [
        { name: 'Billy Sprinkle', displayName: 0 },
        { name: 'Jimmy Limbs', displayName: 0 },
        { name: 'Ravi Ravson', displayName: 0 },
    ],
    barryscottlive: [
        { name: 'Barry Scott' },
    ],
    BazzaGazza: [
        { name: 'Barry Benson', faction: 'BBMC', displayName: 0 },
    ],
    BCBeastly: [
        { name: 'Herbert The Pervert' },
    ],
    BeardedGuysGaming: [
        { name: 'Jose Pincha' },
    ],
    BennniStreams: [
        { name: 'Santiago "Santi" Madrid', faction: 'Vagos', nicknames: [reg(/\bSanti/)] },
        { name: 'Antonio Reyes', nicknames: [reg(/\bAntonio/)] },
        { name: 'Pablo Madrid', faction: 'Vagos', nicknames: ['Diablo'] },
    ],
    BFLY: [
        { name: '[Dr.] Torah Andrews', faction: 'Medical' },
    ],
    biggieferreira: [
        { name: 'Shevy Santanna', faction: 'Vagos' },
    ],
    BikeMan: [
        { name: 'Chet Summerset', assume: 'assumeNpNoOther' },
    ],
    Biotoxz_: [
        { name: '[Barbarian /] Bjorn', faction: 'LARPers' },
    ],
    BJPofficial: [
        { name: '[Lawyer /] Buford J. Preston', faction: 'DoJ' },
    ],
    Blaustoise: [
        { name: 'Mickey S', faction: 'Chang Gang', nicknames: ['Downbad'] },
    ],
    bldrs: [
        { name: 'Kaleb "Kleb" Rush', faction: 'HOA' },
        { name: '[Officer] Ryan Wright', faction: 'Police' },
    ],
    bLuE622: [
        { name: 'Boe Jangles', faction: 'Chang Gang', affiliate: true },
    ],
    bmcloughlin22: [
        { name: '[ADA] Lachlan Pike', faction: 'DoJ' },
    ],
    Bomaah: [
        { name: 'Viper Rodriguez', assume: 'assumeOther' },
    ],
    BoschMerchant: [
        { name: 'Anto Murphy', faction: 'Chang Gang' },
    ],
    boxbox: [
        { name: 'Bo Xbox' },
    ],
    Braders: [
        { name: 'Jeff Arnold' },
    ],
    breakyx: [
        { name: 'Dris Peters', faction: 'SSB' },
    ],
    BRIT: [
        { name: 'Tori Corleone', nicknames: ['Bologna'] },
    ],
    Brofain: [
        { name: 'Kodak Bodega' },
    ],
    buddha: [
        { name: 'Lang Buddha', faction: 'Cleanbois', leader: true, nicknames: ['Circle Andy'] },
        { name: '[Deputy] Kevin Kona', faction: 'Police' },
        { name: 'Esteban Julio Ricardo Montoya De La Rosa Ramirez' },
    ],
    Burn: [
        { name: 'Johnny Silverhand', displayName: 0 },
        { name: 'Asmon Bronze', displayName: 0, nicknames: ['AsmonBronze', 'Transmog'] },
        { name: 'Norman "Norm" Yoder' },
        { name: 'Moe Nopoli', displayName: 0 },
        { name: 'Mentle Block', faction: 'ASRR' },
        { name: 'Sasuke Johnson' },
        { name: 'Chi "Chi-ku" Ku' },
        { name: 'Plankton ?' },
        { name: 'Bruce "The Dank Knight" Strayne' },
        { name: 'Brocky Potage', displayName: 1 },
        { name: 'Gordo Ramsay', displayName: 0 },
    ],
    ButterRoyaleTV: [
        { name: 'Deejay Bartello' },
    ],
    Buzterwow: [
        { name: '? "Brother Mehof" ?' },
    ],
    bythybeard: [
        { name: 'Wade Willson', faction: 'Lost MC' },
        { name: '[Officer] Sexton Hardcastle', faction: 'Police', displayName: 1 },
    ],
    CallMeGrub: [
        { name: '[Deputy] Isaac Richardson', faction: 'Police' },
    ],
    CallMeKevin: [
        { name: 'Grognak The Destroyer', assume: 'assumeNpNoOther' },
    ],
    capsure: [
        { name: 'Dimitri Nekola', faction: 'Pegasus' },
    ],
    Carmen: [
        { name: 'Carmella Corset' },
    ],
    Carter: [
        { name: 'Spencer Smith', nicknames: ['Mormon'] },
    ],
    casek_: [
        { name: 'Cesar Conchas', faction: 'Vagos', displayName: 0 },
    ],
    CathFawr: [
        { name: 'Summer Mersion', faction: 'GSF', displayName: 0 },
        { name: 'Natya Block', faction: 'ASRR', displayName: 0 },
        { name: "[Lawyer /] Shannon O'Banion", faction: 'DoJ', displayName: 0 },
        { name: '[Officer] Lydia Vale', faction: 'Police' },
    ],
    Cathie: [
        { name: '[Deputy] Anita Cox', faction: 'Police' },
        { name: 'Ninacska Mihkala', faction: 'Russians', nicknames: ['Nina'], displayName: 3 },
        { name: 'Kaelyn "Kae" East', faction: 'SSB' },
    ],
    CaussiePreacher: [
        { name: '[EMS] Jack Preacher', faction: 'Medical' },
    ],
    Chalupa_Pants: [
        { name: 'Julio Thomas', faction: 'HOA' },
        { name: '[Deputy] Marco Holiday', faction: 'Police' },
    ],
    Chap: [
        { name: 'Bryan Chapman', displayName: 0 },
    ],
    charlieblossom: [
        { name: 'Georgina "Windsong" Williams' },
    ],
    Chief: [
        { name: 'Baada Ka', faction: 'HOA', nicknames: ['Chief'], displayName: 3, assume: 'assumeNpNoOther' },
    ],
    Choi: [
        { name: '[Dr.] Choi Zhangsun', faction: 'Medical', leader: true },
    ],
    ChrisTombstone: [
        { name: 'Flop Dugong' },
    ],
    CinnamonToastKen: [
        { name: 'Chuck Colton' },
        { name: 'Buck Colton', nicknames: ['Book', 'Bucky', 'Cultan'] },
    ],
    chairhandler: [
        { name: 'Carl Crimes' },
    ],
    Chaseman7GG: [
        { name: 'Miguel Guerrero', faction: 'Vagos' },
    ],
    ChelbM: [
        { name: 'Alan Kyles', faction: 'NBC', displayName: 0 },
    ],
    ClassyPax: [
        { name: 'Madam Ming', displayName: 0 },
        { name: '[Dr.] Ethan Maw', faction: 'Medical', displayName: 2 },
    ],
    CoconutB: [
        { name: '? ?' },
    ],
    CodeMiko: [
        { name: 'Code Psyko', displayName: 0 },
    ],
    ConfusedDevil: [
        { name: '[Deputy] Travis Tribble', faction: 'Police' },
    ],
    ConnorCronus: [
        { name: '[Dr.] Isaac Smith', faction: 'Medical' },
        { name: 'Roman "Mask" Sionis', nicknames: ['Black Mask'] },
    ],
    Coolio: [
        { name: 'Dequarius "Big D" Johnson', faction: 'Chang Gang' },
        { name: '[Deputy] Adam Hopping', faction: 'Police' },
    ],
    CptCheeto: [
        { name: '[Officer] Scott Ridley', faction: 'Police' },
    ],
    CrayonPonyfish: [
        { name: 'Sadie Thistle' },
        { name: 'Wynona Fontaine', faction: 'DoC', displayName: 2 },
        { name: 'Wilhelmina Copperpot', displayName: 2 },
    ],
    crimsonswordsman: [
        { name: 'Raphael Kristof', faction: 'HOA' },
    ],
    Crunchy: [
        { name: '[Dr.] Agnes Ranbough', faction: 'Medical' },
        { name: 'Grimoire "Gremlin" Hauttogs' },
    ],
    CrystalMushroom: [
        { name: 'Regina Bunny' },
    ],
    Crystalst: [
        { name: 'Four "4T" Tee', faction: 'ASRR', displayName: 0 },
        { name: 'Amie Rush' },
    ],
    CurtisRyan: [
        { name: 'Curtis Swoleroid', nicknames: ['"Demon" of Lean Street', 'Curt'] },
        { name: '[Officer] Stephen McClane', faction: 'Police' },
        { name: 'Cornelius "Cornbread" Scott', faction: 'GSF' },
    ],
    curvyelephant: [
        { name: '[Deputy] Matt Rhodes', faction: 'Police' },
        { name: 'Ryan Parker', faction: 'Lost MC' },
        { name: '[Lawyer /] Kevin Shaw', faction: 'DoJ' },
    ],
    Curvyllama: [
        { name: '[Deputy] Lorenzo L', faction: 'Police', displayName: 1 },
        { name: 'Freya Manning' },
    ],
    cyr: [
        { name: 'Joe Caine', displayName: 0 },
        { name: "Khan Di'Sendo", displayName: 0 },
        { name: 'Uchiha Jones', faction: 'Chang Gang' },
        { name: 'Fred Hurst', nicknames: [reg(/Lim.\s?Bizkif/)] },
    ],
    Dadulio: [
        { name: '[Deputy] Franky Dulio', faction: 'Police' },
    ],
    DanGheesling: [
        { name: 'Tanner Buttermaker', displayName: 1 },
    ],
    DanHawk1ns: [
        { name: 'Benny Gomez', faction: 'Burger Shot' },
    ],
    Darthbobo77: [
        { name: 'Rudi Rinsen', faction: 'Lost MC', leader: true },
    ],
    dasMEHDI: [
        { name: 'Nino Chavez', faction: 'Cleanbois' },
        { name: '[Officer] Brian Knight', faction: 'Police', nicknames: ['495'] },
        { name: 'Ryan Kindle', faction: 'HOA' },
        { name: 'Reema', nicknames: ['The "Whorelord"'] },
    ],
    DavidB_NP: [
        { name: 'Vladimir "Vlad" Ivanov', faction: 'Russians' },
    ],
    Deansocool: [
        { name: 'Dean Quincy', faction: 'NBC', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    Denior13: [
        { name: 'Keith "Bulldog" Dooger', faction: 'Lost MC' },
    ],
    Denis3D: [
        { name: '[Development /] Denis3D', faction: 'Development', nicknames: ['3D'] },
    ],
    devolore: [
        { name: '[Officer] Cassius Kennedy', faction: 'Police', nicknames: ['Cash'] },
    ],
    dibitybopty: [
        { name: '[Officer] Gus Gorman', faction: 'Police' },
    ],
    DigiiTsuna: [
        { name: '[Dr.] Kai King', faction: 'Medical', displayName: 2 },
    ],
    DisbeArex: [
        { name: 'Oki Doki', faction: 'Burger Shot', displayName: 0 },
    ],
    DKane: [
        { name: 'Cletus McCoy' },
    ],
    DocWizard: [
        { name: '[Judge] John Bailey', faction: 'DoJ' },
        { name: '[Officer] TJ Walker', faction: 'Police' },
        { name: 'Preston Landor' },
    ],
    Dogbert: [
        { name: '[Deputy] Rocko Colombo', faction: 'Police', nicknames: [reg(/\bcol.mb./)] },
        { name: 'Luther Caine', faction: 'HOA' },
    ],
    Dorken: [
        { name: 'Valentina' },
        { name: 'Nicholine Quinn' },
    ],
    Doug: [
        { name: 'Gazpacho Prince', nicknames: ['Pachi', 'Spachi'] },
        { name: 'William "W" Told', nicknames: ['Lil Pump'] },
    ],
    DougisRaw: [
        { name: 'Jason Sharpe', displayName: 0 },
    ],
    Dr_Knope: [
        { name: 'Patrit "Mete" Metemahaan', faction: 'HOA' },
    ],
    DROwSeph420: [
        { name: 'John "Geno" Collins', faction: 'GSF' },
    ],
    Dunrunnin12: [
        { name: 'Thomas Dwayne', nicknames: ['The Narrator'], displayName: 0 },
        { name: 'Nay "Delamain" Rater' },
    ],
    durptastic: [
        { name: 'Otis Goody', faction: 'Burger Shot' },
    ],
    dwjft: [
        { name: 'Dean Watson', leader: true },
        { name: '[Officer] Derby West Bromwich', faction: 'Police', displayName: 3 },
        { name: '[Development /] DW', faction: 'Development', nicknames: ['tinkering'] },
    ],
    Dyrus: [
        { name: 'Louis Hill', displayName: 0 },
    ],
    eebern: [
        { name: 'Huck Guthrie', faction: 'HOA' },
    ],
    either: [
        { name: 'Jaden Christopher' },
    ],
    Elochai: [
        { name: 'Tao Chen' },
    ],
    ElvisRP: [
        { name: '[Deputy] John Dorian', faction: 'Police' },
    ],
    Evee: [
        { name: '[Judge] Antigone Weston', faction: 'DoJ', assumeServer: 'whitelist' },
        { name: '[Officer] Antigone Weston', faction: 'Police', assumeServer: 'public' },
        { name: '[Judge] Whitney Crawford', faction: 'DoJ' },
        { name: 'Adrienne West' },
        { name: 'Meggie "Megan" Right' },
        { name: 'Bree Matthews' },
        { name: 'Demi Black' },
    ],
    EvilShatner: [
        { name: 'Anna Swallows', displayName: 0 },
    ],
    EsfandTV: [
        { name: '[Deputy] Cletus Cornwood', faction: 'Police' },
        { name: 'Ali Farmand', displayName: 0 },
    ],
    explodicy: [
        { name: 'Ted Kindly' },
    ],
    extralivia: [
        { name: 'Jess ?', faction: 'SSB' },
    ],
    F3ARzZ: [
        { name: 'Ranjit Raventish', faction: 'BSK' },
    ],
    Fairlight_Excalibur: [
        { name: 'Raja Bahadur', faction: 'QuickFix', leader: true },
        { name: '[Officer] Alexander "Fox" Fawkes', faction: 'Police' },
    ],
    Fairzz91: [
        { name: 'Huxley Johnson', faction: 'DoC' },
        { name: 'Paddy Patrickson', faction: 'Lost MC' },
    ],
    FalconryGal: [
        { name: 'Jenna Tuttle', displayName: 2 },
    ],
    FalloftheSeason: [
        { name: '[EMS] Orianna "Ori" Frost', faction: 'Medical', nicknames: ['Olive'] },
        { name: 'Ophelia Quinn' },
    ],
    Familybanter: [
        { name: '[Dr.]  Jayce Petra', faction: 'Medical', displayName: 0 },
        { name: 'Taran Raid', faction: 'Lost MC', displayName: 0 },
    ],
    Farmhouse78: [
        { name: 'Jane Farmer' },
        { name: 'Steven Hayes', faction: 'Burger Shot', displayName: 0 },
    ],
    FeliciaDay: [
        { name: 'Cherryclarie Dinwittie', nicknames: ['CherryClaire'], displayName: 3 },
    ],
    FerretRP: [
        { name: 'Alberto Weaselton', faction: 'Lost MC' },
    ],
    Fiendota: [
        { name: 'Jonathan "Magnum" Humes', nicknames: [reg(/\bP\.?\s*I\b/)] },
    ],
    Five0AnthO: [
        { name: '[Trooper] Tony Andrews', faction: 'Police', highCommand: true, leader: true },
        { name: 'Rhode Block', faction: 'ASRR', displayName: 0 },
    ],
    FloMcNasty_TV: [
        { name: 'Richard Chiclets', faction: 'Burger Shot', displayName: 0 },
    ],
    Forlorn79: [
        { name: '[EMS] Amoris Pax', faction: 'Medical' },
    ],
    forsen: [
        { name: 'Sven Snusberg', faction: 'Cleanbois' },
        { name: 'Mason Foorhees' },
    ],
    FortyOne: [
        { name: 'Jose Martin Perez', nicknames: ['JMP'] },
        { name: '[Deputy] John Archer', faction: 'Police' },
        { name: 'Lucas Ortiz', displayName: 0 },
        { name: 'Don Russo', displayName: 0 },
        { name: 'Jacob "Funny Man" Storm' },
        { name: 'Arious "Breezy" Campbell' },
    ],
    FourMilli: [
        { name: 'Brad Bett', faction: 'NBC' },
    ],
    FragZone: [
        { name: 'Derek Bogart', faction: 'Condemned MC' },
    ],
    frogbound: [
        { name: 'Edward Nygma' },
        { name: 'Alexander Egorov' },
    ],
    fuslie: [
        { name: 'April Fooze', nicknames: ['first time'], displayName: 0 },
    ],
    Fyzicul: [
        { name: '[Shaman /] Keith "Lando" Wanderlust', faction: 'LARPers', nicknames: ['Stormborn', 'Shaman', 'Mountain Kingdom'], displayName: 0 },
    ],
    Gabz: [
        { name: '[Development /] Gabz', faction: 'Development', nicknames: ['3D'] },
    ],
    GameDemented: [
        { name: '[Deputy] Peter Johnson', faction: 'Police' },
    ],
    Garek: [
        { name: '[Cleric /] Burt "Gloryon" Beans', faction: 'LARPers', nicknames: ['Cleric'] },
    ],
    GattisTV: [
        { name: 'Carlos Guzman', faction: 'Vagos', displayName: 0 },
    ],
    Gavbin_: [
        { name: '[Judge] Gavin Holliday', faction: 'DoJ' },
    ],
    GeneralEmu: [
        { name: '[Officer] Lance Malton', faction: 'Police' },
    ],
    ggqf: [
        { name: '[Paladin /] Stagdancer', faction: 'LARPers', nicknames: ['Gea'] },
        { name: '[Officer] Bennett Calhoun', faction: 'Police' },
    ],
    goldelena: [
        { name: 'August Vakarian' },
    ],
    GoldGlove: [
        { name: 'Marvin King', nicknames: ['Marv'], displayName: 3 },
    ],
    GrandPOObear: [
        { name: 'Mick Flair', displayName: 0 },
    ],
    Greekgodx: [
        { name: '"Tay Tay" Tyrone', nicknames: ['TayTay'] },
        { name: 'Tea Tea', faction: 'Police', displayName: 0 },
    ],
    GreenishMonkey: [
        { name: 'Bobby Brown', faction: 'Chang Gang' },
        { name: 'James Brown', faction: 'Police', displayName: 0 },
    ],
    GTAWiseGuy: [
        { name: 'Eddie Marshall', faction: 'Tuner Shop' },
        { name: '[Officer] Jim Underwood', faction: 'Police', nicknames: ['437'] },
        { name: '[Development /] GTAWiseGuy', faction: 'Development', nicknames: ['Handling', 'Fixes', 'Fixing'] },
        { name: 'Igor Skovacic' },
        { name: 'RayRay' },
        { name: 'Maury Mersion', faction: 'Mersions' },
    ],
    GutturalSteve: [
        { name: 'Tomathy Steampipe', faction: 'Burger Shot' },
    ],
    HARMSwahy: [
        { name: 'Blaine Burke', faction: 'Angels' },
    ],
    Harry: [
        { name: 'Harry Brown', faction: 'Pegasus' },
    ],
    HasanAbi: [
        { name: 'Humberto Antonio Donato Pecorino', nicknames: ['Don', 'Donnie', reg(/\bOva[h']? here\b/)], displayName: 5, faction: 'Cleanbois' },
    ],
    Hedisaurus: [
        { name: '[EMS] Hedi Saurus', faction: 'Medical', assume: 'assumeNpNoOther' },
        { name: '[Dispatch] Ramona Celeste', faction: 'Police', displayName: 1 },
    ],
    HexagonistLIVE: [
        { name: '[Deputy] Vincent Glass', faction: 'Police', displayName: 2 },
    ],
    HeyOrbz: [
        { name: '[Officer] Casey Valentine', faction: 'Police' },
        { name: 'Richie Mersion', faction: 'Mersions', displayName: 0 },
    ],
    HiredGunRP: [
        { name: '[Deputy] Colt Shepherd', faction: 'Police' },
    ],
    Hirona: [
        { name: '[Trooper] Olivia Copper', faction: 'Police' },
        { name: 'Emily Maw', faction: 'Harmony' },
        { name: 'Jenny Hawk', displayName: 0 },
        { name: 'Onya Block', faction: 'ASRR', displayName: 0 },
        { name: 'Debbie Hopper', displayName: 0 },
        { name: 'Griselda "Zelda" Harth', faction: 'HOA' },
        { name: 'Olga Sazkaljovich', faction: 'Pegasus', nicknames: ['Olgaa', 'Olgaaa', 'Olgaaaa'] },
    ],
    hobbittrash: [
        { name: '[Justice] Katya Zamalodchikova', faction: 'DoJ', displayName: 1 },
        { name: '[Officer] Tracy Martell', faction: 'Police', nicknames: ['Cop'] },
        { name: 'Jane Obama', displayName: 0 },
        { name: 'Rounda Block', faction: 'ASRR', displayName: 0 },
        { name: "Kayden Dell'Anno" },
    ],
    HonathanTV: [
        { name: '[Deputy] Honathan Yolo', faction: 'Police' },
    ],
    Hoss: [
        { name: 'Chip Wheeler', faction: 'BBMC', displayName: 0 },
    ],
    Hotted89: [
        { name: '[Deputy] Matthew Espinoz', faction: 'Police', nicknames: ['Airspinoz', 'Air 1 Andy'] },
        { name: 'Joaquin "JJ" Jimenes', faction: 'Vagos' },
        { name: 'Allen Widemann', faction: 'Chang Gang' },
    ],
    huddy_nz: [
        { name: 'Ash Huddy Hudson', faction: 'Lunatix' },
    ],
    HutchMF: [
        { name: 'Hutch Hutcherson' },
        { name: 'Drew "Dead Eye Drew"', nicknames: ['DeadEye'] },
        { name: '[Deputy] Jaryd Peak', faction: 'Police' },
        { name: 'Hutch Hendrickson' },
    ],
    IAmSoul_RP: [
        { name: 'Johnathen Riker' },
    ],
    ikittyyyy: [
        { name: 'Kitty Dream', faction: 'Burger Shot' },
    ],
    ilenol: [
        { name: 'Max Larson', faction: 'Pegasus', displayName: 0 },
    ],
    ImClammy: [
        { name: 'AK', faction: 'SSB' },
        { name: 'Derek Monroe' },
    ],
    INFLUXPictures: [
        { name: 'Tony Venucci', displayName: 0 },
    ],
    inix: [
        { name: 'Mortimer Scottsfold', nicknames: ['Yung Fierro'], displayName: 3 },
    ],
    Intelleqt: [
        { name: 'Donovan "DK" King', faction: 'GSF' },
    ],
    ironmonkeytv: [
        { name: 'Winston Bolt', faction: 'Pegasus' },
        { name: 'Dragon' },
    ],
    itmeJP: [
        { name: 'Wilbur Higgins' },
    ],
    ItsJustJosh: [
        { name: 'Levi Dawson', faction: 'SSB' },
    ],
    ItsLeslie: [
        { name: '[Wizard /] KyrinChan "Leyla" WeuhBou', faction: 'LARPers', nicknames: ['Nightingale', 'Wizard', 'Embervale'] },
    ],
    ItsLSG: [
        { name: '[Officer] Jack Miller', faction: 'Police' },
    ],
    ItsSammyP: [
        { name: 'Mando Thompson', faction: 'SSB' },
        { name: 'Tyrone "Big T" Thompson', faction: 'SSB' },
    ],
    ItsSlikeR: [
        { name: 'Abe Moe', nicknames: ['Don', 'Baldy', 'Bald'], displayName: 0 },
        { name: 'Abraham Mohammed' },
    ],
    JaboodyShow: [
        { name: 'Jerry Curl', displayName: 0 },
        { name: 'Vincent' },
    ],
    Jack: [
        { name: 'Jack Cortair', faction: 'NBC' },
    ],
    jacobpibbtv: [
        { name: 'Jacob Pibb' },
    ],
    Jadez: [
        { name: '? "Mother Midnight" ?' },
    ],
    jakenbakeLIVE: [
        { name: 'Ryu Tenga' },
    ],
    Javaaaa: [
        { name: 'Joseph Yorinobu', nicknames: ['Majima', 'Goro'], displayName: 3 },
        { name: 'Lillia Claurel' },
    ],
    JayAitch5: [
        { name: 'Lil Cap', displayName: 0 },
    ],
    Jayce: [
        { name: 'Lil Loco', faction: 'Vagos', displayName: 0 },
        { name: 'Riley Johnson' },
        { name: 'Pepe Roni', displayName: 0 },
        { name: 'Molly Minaj', displayName: 0 },
        { name: 'Robert "Mr. Rodgers" Rodgers' },
    ],
    JdotField: [
        { name: 'Miles Landon', faction: 'Pegasus' },
        { name: 'Jake LaMotta', displayName: 0 },
        { name: 'Drew Jackson', faction: 'GSF' },
    ],
    Jellypeanut: [
        { name: 'Rai "Juuls" Cumberwoood' },
        { name: '[Prince] Habib Khalid' },
    ],
    jennylouise1997: [
        { name: '[Dispatch] Louise Campbell', faction: 'Police' },
    ],
    jimmytulip: [
        { name: 'Wayne Biggaz', faction: 'Chang Gang', nicknames: [reg(/\bwe+y+n/)] },
    ],
    JJLake: [
        { name: 'Jay Jarvis', faction: 'Pegasus' },
    ],
    JoblessGarrett: [
        { name: 'Garrett Jobless', faction: 'Chang Gang' },
        { name: '[Officer] Garry Berry', faction: 'Police' },
    ],
    JoeSmitty123: [
        { name: '[Officer] Michael Murphy', faction: 'Police' },
    ],
    jogiejoey: [
        { name: 'Jessie Jugg' },
        { name: 'Eva Wall' },
        { name: '[Dr.] Emma Gaine', faction: 'Medical' },
        { name: '[Lawyer /] Maggie Kayden', faction: 'DoJ' },
    ],
    Jonthebroski: [
        { name: 'Denzel Williams', faction: 'Cleanbois', nicknames: ['The "Cleaner"'] },
        { name: 'Dio Ivanov', faction: 'Russians' },
        { name: 'Holden D. Block', faction: 'ASRR', displayName: 0 },
        { name: '[Officer] Johnny Divine', faction: 'Police', displayName: 0 },
    ],
    JoshOG: [
        { name: 'Mario Le-Pipe', faction: 'Chang Gang', affiliate: true, displayName: 0 },
    ],
    JOVIAN: [
        { name: '[Deputy] Billiam Williams', faction: 'Police', displayName: 1 },
    ],
    JPKMoto: [
        { name: '[ADA] Odessa Pearson', faction: 'DoJ' },
        { name: 'Nora Dupres' },
        { name: 'Zee Nanakaze Mathers' },
    ],
    Jubby: [
        { name: 'Ricardo Perez', faction: 'Burger Shot', displayName: 1 },
    ],
    Judd: [
        { name: '[Chief Justice] Coyote Russell', faction: 'DoJ', displayName: 1 },
        { name: 'Judd Lincoln' },
        { name: 'Reverend I.M. Voland', faction: 'Dark Web' },
    ],
    Juggs: [
        { name: 'Lenny Large', faction: 'Burger Shot', nicknames: [reg(/\blenny/)], displayName: 0 },
        { name: 'Traevon Williams', nicknames: ['The Barber'], displayName: 3 },
    ],
    JukeBoxEM: [
        { name: 'Tony Foster' },
        { name: 'Shane Jones', faction: 'DoC' },
    ],
    JustaMinx: [
        { name: 'Mercy Peggers' },
    ],
    JustJamie: [
        { name: 'Tommy Cruizer', faction: 'Tuner Shop' },
    ],
    Jyeahlisa: [
        { name: '[Therapist] Thalia Hayes', faction: 'Medical' },
        { name: '[Lawyer /] Lees Grey', faction: 'DoJ' },
    ],
    Kaceytron: [
        { name: 'Bobbi Jo', displayName: 0 },
    ],
    Kainalo: [
        { name: 'Risto Suolamies' },
    ],
    KaoruHare: [
        { name: '[Therapist] Kizzy Neveah', faction: 'Medical' },
    ],
    KaoticaXD: [
        { name: 'Victoria "Vivi" Veine', faction: 'HOA' },
    ],
    Kari: [
        { name: '[Deputy] Mina Price', faction: 'Police' },
        { name: '[EMS] Khloe Brooks', faction: 'Medical' },
    ],
    Karma: [
        { name: 'Bobby Johnson', displayName: 0 },
    ],
    karnt1: [
        { name: 'Arush', faction: 'GSF' },
    ],
    Kate: [
        { name: 'Nancy Drew' },
    ],
    KatFires: [
        { name: 'Novah Walker', faction: 'Chang Gang' },
        { name: '[Officer] Ensley Alton', faction: 'Police', nicknames: ['521'], displayName: 1 },
    ],
    KattValkyrie: [
        { name: '[EMS] Valkyrie Sunshot', faction: 'Medical' },
        { name: 'Katt Vincent' },
    ],
    kClient: [
        { name: 'Daquan "Peanut" Dumas', faction: 'NBC' },
    ],
    Keeno: [
        { name: 'Kyle Brovloski' },
    ],
    Kemony: [
        { name: 'Susie Carmichael' },
    ],
    KezieEve: [
        { name: 'Ghost Storm', faction: 'GSF' },
    ],
    KillrBeauty: [
        { name: 'Catherine Scratch', faction: 'Lost MC', nicknames: ['Cat'], displayName: 3 },
    ],
    Kimchi: [
        { name: 'Sun Moon' },
    ],
    Kimmykix: [
        { name: 'April Thompson', faction: 'Pegasus' },
    ],
    Kinamazing: [
        { name: '[Officer] Emma Dupont', faction: 'Police', nicknames: ['Dupog'] },
    ],
    King_1455: [
        { name: 'Cooch Cassidy', faction: 'Lost MC' },
    ],
    KinkyHobo_: [
        { name: '[Lawyer /] Gill Schultz', faction: 'DoJ', displayName: 1 },
    ],
    Kitboga: [
        { name: 'Edna Moose' },
        { name: '[Deputy] Claire Annette Reed', faction: 'Police' },
    ],
    Kite61: [
        { name: 'Rusty Johnson' },
    ],
    Kiva: [
        { name: '[Mayor] Andi Jones', faction: 'HOA', nicknames: ['Ant'], displayName: 3 },
        { name: 'Navi Gates' },
    ],
    Kiwo: [
        { name: '[Deputy] Lauren Forcer', faction: 'Police' },
        { name: 'Mia Mersion', faction: 'Pegasus' },
        { name: 'Evita "Mother" Nimm', faction: 'Dark Web' },
        { name: 'Ava Ridge', nicknames: ['Silence', reg(/darkness/)] },
        { name: 'Marta Volkov' },
    ],
    KL33Si: [
        { name: '[Dr.] Emily Ducksworth', faction: 'Medical', displayName: 0 },
    ],
    Knotty: [
        { name: 'Guy Jones', faction: 'NBC', displayName: 0 },
    ],
    Knut: [
        { name: 'Bjorn Eiriksson' },
    ],
    koil: [
        { name: '[Trooper] Kael Soze', faction: 'Police', highCommand: true, leader: true, nicknames: ['are illegal'] },
        { name: '[Officer] Francis Francer', faction: 'Police', displayName: 1 },
        { name: '[Development /] Koil', faction: 'Development', nicknames: ['Code'] },
        { name: 'Saint Jospeh', nicknames: ['Jesus', 'Joseph', 'XUJIA', 'EMC'], displayName: 0 },
        { name: 'Ray Ray', faction: 'ASRR', displayName: 0 },
        { name: 'Otto Delmar' },
    ],
    Kongfue: [
        { name: 'Karl "KJ" Johnny', faction: 'Vagos' },
    ],
    KristoferYee: [
        { name: 'Jay Que', displayName: 0 },
    ],
    Kunaives: [
        { name: 'Wally Veloce', faction: 'BSK' },
    ],
    KuroKunoichi13: [
        { name: 'Natalia Omar' },
    ],
    Kyle: [
        { name: 'Alabaster Slim', nicknames: ['Pimp'], displayName: 2 },
        { name: 'Hampton Brandon', nicknames: ['TTD', 'Ten Toes Down'] },
        { name: '[Sheriff] Kyle Pred', faction: 'Police', leader: true },
        { name: 'Brett Biggledoinks' },
        { name: "[Lawyer /] Rory O'Banion", faction: 'DoJ', displayName: 0 },
        { name: 'Wyatt Derp', faction: 'Lost MC' },
        { name: 'Pal Gore' },
    ],
    kyliebitkin: [
        { name: '[Deputy] Brittany Angel', faction: 'Police' },
        { name: 'Mary Mushkin', displayName: 0 },
    ],
    Jackhuddo: [
        { name: 'Shane Powers', nicknames: ['ShaneO', 'ShanO'] },
        { name: 'Hubbo Samson' },
    ],
    LadyHope: [
        { name: '[Officer] Lily Pond', faction: 'Police' },
        { name: 'Isabella "Izzy" Carrington', faction: 'Harmony' },
    ],
    LadyLynxx: [
        { name: '[EMS] Saphira Sinclair', faction: 'Medical' },
        { name: 'Jaed Smith' },
    ],
    LAGTVMaximusBlack: [
        { name: 'Outto-Tune "OTT" Tyrone', faction: 'BSK', nicknames: [reg(/\b[O0]\S?TT/)] },
    ],
    Lairdo_: [
        { name: 'Henry King' },
    ],
    LarryX7: [
        { name: 'Jose "Cousin" Luis Santana', faction: 'Vagos' },
    ],
    LaS_: [
        { name: 'Jesse "Baby Joker" Morales', assume: 'assumeOther' },
    ],
    LeWolfy: [
        { name: '[Deputy] Dante Wolf', faction: 'Police' },
    ],
    lilypichu: [
        { name: 'Tulip Peach' },
    ],
    LINK_EZ: [
        { name: 'Linkle Jones', displayName: 1 },
    ],
    LIRIK: [
        { name: 'Clayvon Barksdale', faction: 'Cleanbois' },
        { name: '[Officer] Bayvon Barksdale', faction: 'Police', nicknames: ['555'], displayName: 2 },
        { name: 'Abe Vaughn', displayName: 0 },
        { name: 'Avon Barksdale', faction: 'Cleanbois', leader: true },
    ],
    Lisilsanya: [
        { name: '[EMS] Lei Sanya', faction: 'Medical', nicknames: ['Lasagna'], displayName: 0 },
    ],
    Lord_Kebun: [
        { name: 'Mr. K', faction: 'Chang Gang', leader: true, displayName: 0, nicknames: ['Chang', 'The "Dragon"'] },
        { name: '[Deputy] Richard Richardson', faction: 'Police', nicknames: ['585'] },
    ],
    LordJasta: [
        { name: 'Chris McGrawl' },
    ],
    Loserfruit: [
        { name: '[EMS] Lizzie Bien', faction: 'Medical' },
    ],
    loveANG3L: [
        { name: 'Kendra Davis', faction: 'Vagos' },
    ],
    Lovinurstyle: [
        { name: 'Rose Edwards' },
        { name: 'Leah Strong' },
    ],
    Lt_Raven: [
        { name: '[Officer] Vladimir Raven', faction: 'Police', highCommand: true },
    ],
    LtSerge: [
        { name: '[Dr.] Serge Cross', faction: 'Medical', displayName: 2 },
    ],
    Lucky_RP: [
        { name: 'Marlo Stanfield', faction: 'GSF', nicknames: [reg(/ma?rlo/)] },
    ],
    LuckyxMoon: [
        { name: '[Judge] ? Devereaux', faction: 'DoJ' },
        { name: '[Judge] Jessica Wesker', faction: 'DoJ' },
    ],
    ludwig: [
        { name: 'Klevin Ballsworth' },
    ],
    luka_aus: [
        { name: '[Officer] Luka Kozlov', faction: 'Police' },
        { name: 'Gazza Maloo', faction: 'Lost MC' },
    ],
    Lullichiiqa: [
        { name: 'Liv Lassen' },
    ],
    luminariarayne: [
        { name: 'Ekaterina Alekseyevna', nicknames: ['Trina'], displayName: 1 },
        { name: 'Barbie Chan' },
    ],
    LunaOni: [
        { name: '[Officer] Claire Everly', faction: 'Police' },
    ],
    Lyndi: [
        { name: 'Violet Van Housen', faction: 'Angels' },
        { name: 'Willow Wolfhart', faction: 'DoC' },
    ],
    Lysium: [
        { name: 'Benji Ramos', faction: 'Vagos', nicknames: ['B'] },
        { name: 'Dean Duncan', faction: 'DoC' },
    ],
    Macaiyla: [
        { name: 'Jolene Grace', nicknames: ['Savannah'] },
    ],
    MacL0ven: [
        { name: 'Negan Graham', faction: 'Lost MC' },
    ],
    Madmoiselle: [
        { name: '[Therapist] Pixie Plum', faction: 'Medical' },
    ],
    Madoreline: [
        { name: '[Officer] Elizabeth Reed', faction: 'Police' },
    ],
    Maggna: [
        { name: '[EMS] Mari Jones', faction: 'Medical', nicknames: ['MJ'], displayName: 3 },
    ],
    malikouthere: [
        { name: 'Tito Conchas', faction: 'Vagos' },
    ],
    mantistobagan: [
        { name: '[Officer] Domenic Toretti', faction: 'Police' },
        { name: 'Ike Block', faction: 'ASRR', displayName: 0 },
        { name: '[Lawyer /] Jerry Callow', faction: 'DoJ', displayName: 1 },
        { name: 'Pepe Silvia' },
    ],
    Markiplier: [
        { name: 'Stan Wheeler' },
    ],
    MartinCreek: [
        { name: 'Bertha Clark' },
    ],
    MasterMisuri: [
        { name: 'Jesus Antonio Lopez Contreras', faction: 'HOA' },
    ],
    MatchaSmash: [
        { name: '[EMS] Rowan Hunter', faction: 'Medical' },
    ],
    Mattie: [
        { name: '[Dr.] Mikhail Keehl', faction: 'DoC', displayName: 2 },
    ],
    MattRP: [
        { name: '[Officer] Jack Ripley', faction: 'Police' },
    ],
    McconnellRet: [
        { name: '? "Bench Guy" ?' },
    ],
    Meatwrist: [
        { name: 'Chad "Chodie" Brodie' },
    ],
    meeka_a: [
        { name: '[EMS] William "Middy" Haze', faction: 'Medical' },
    ],
    MEKABEAR: [
        { name: 'Erin Cox' },
        { name: 'Ari Tistu', displayName: 0 },
        { name: '[Deputy] Amber Gold', faction: 'Police', displayName: 0 },
    ],
    MeMayoi: [
        { name: 'Yoi Tsukita' },
    ],
    Mervin: [
        { name: 'Mervin Potts' },
    ],
    Mexi: [
        { name: '[Deputy] Clarence Williams', faction: 'Police', displayName: 1 },
    ],
    michaelreeves: [
        { name: 'NoPixel ?' },
    ],
    Mick: [
        { name: 'Gladys Berry' },
    ],
    Middleditch: [
        { name: 'Stanley Tuttles' },
    ],
    Miggitymaan: [
        { name: 'Jayce Wyatt' },
        { name: '[Officer] Damien Alexander', faction: 'Police' },
        { name: '[Deputy] Kurt Leonard', faction: 'Police', assume: 'assumeOther' },
    ],
    MikeTheBard: [
        { name: 'Hubcap Jones', displayName: 0 },
        { name: 'Jack Nova', displayName: 0 },
    ],
    mikezout14: [
        { name: '[Deputy] Michael Rodgers', faction: 'Police' },
    ],
    MiltonTPike1: [
        { name: 'Kiki Chanel' },
        { name: 'Dob Darker', nicknames: ['Dice is Right', 'Right Dice'], displayName: 0 },
        { name: 'Giovanni Atello', displayName: 1 },
        { name: 'Hazel Nutte' },
        { name: 'Merlin Edmondstoune' },
        { name: 'William "Bill Ding" Ding', nicknames: ['Bill'] },
    ],
    Ming: [
        { name: 'Ming Jingtai', assume: 'assumeNp' },
    ],
    miniminter: [
        { name: 'Peter Shufflebottom', displayName: 0 },
    ],
    MinusFive: [
        { name: '[Officer] Jason Bidwell', faction: 'Police' },
    ],
    MIQQA: [
        { name: '[EMS] Janus Lee', faction: 'Medical' },
    ],
    Moboking: [
        { name: '[Ranger] Ellis Pinzon', faction: 'Police', nicknames: ['Ronaldo'] },
        { name: 'Aleksander Bogorov', faction: 'Angels', nicknames: ['Aleks'], displayName: 3 },
        { name: 'Elijiah "Middle E" Parks', faction: 'SSB' },
    ],
    moistcr1tikal: [
        { name: 'Charles White', displayName: 0 },
    ],
    MOONMOON: [
        { name: '[Deputy] Lenny Hawk', faction: 'Police', displayName: 0, assume: 'assumeNp' },
        { name: '[Shadowlord /] Bernice Caldershot', faction: 'LARPers' },
        { name: 'Ro Block', faction: 'ASRR', displayName: 0 },
        { name: 'Yung Dab', nicknames: ['The "Gnome"'] },
    ],
    mrborealislive: [
        { name: 'Rudolph ?', faction: 'Burger Shot' },
    ],
    MrMoonsHouse: [
        { name: 'Freddy Price', displayName: 0 },
    ],
    MrMouton: [
        { name: 'Chuck Mouton', displayName: 0 },
        { name: 'Han Pandler' },
    ],
    MsTeamKK: [
        { name: 'Riley Carter', faction: 'BBMC' },
    ],
    MurderCrumpet: [
        { name: 'Cindy Lou' },
    ],
    MurphyBraun: [
        { name: '[Justice] Holden', faction: 'DoJ' },
        { name: 'Marvin Peanut', nicknames: ['Marv'] },
        { name: '[Lawyer /] Murphy Braun', faction: 'DoJ', displayName: 0 },
    ],
    Myladyballs: [
        { name: 'Veronica Garcia', faction: 'Vagos' },
    ],
    Mythematic: [
        { name: 'Mike Rosoftsam', faction: 'Cleanbois', affiliate: true },
    ],
    Nakkida: [
        { name: '[Ranger] Tessa Lamb', faction: 'Police', displayName: 1 },
        { name: 'Taylor "Onyx" White', faction: 'Police' },
        { name: 'Rachel Parker' },
    ],
    Natettvrp: [
        { name: 'Carlos "Carlitos" Loco', faction: 'Vagos' },
    ],
    Natsumiii: [
        { name: 'Natalie Sumi' },
    ],
    Navajo: [
        { name: 'Clarence Carter' },
    ],
    NefariousCharm: [
        { name: '[EMS] Maya Jane', faction: 'Medical' },
    ],
    Nerdandi: [
        { name: 'Petunia Susan Brookshire' },
    ],
    netsirk: [
        { name: '[EMS] Nettie Machete', faction: 'Medical' },
    ],
    neutreN: [
        { name: 'Octane "Hypergoof" ?' },
    ],
    NeveRossa: [
        { name: 'Dawn Hearte', faction: 'Medical' },
    ],
    NewFaceSuper: [
        { name: 'Davey Doherty' },
    ],
    Nidas: [
        { name: 'Leslie Ling', displayName: 0, nicknames: ['Lingberg'] },
    ],
    Nikez: [
        { name: '[Development /] Nikez', faction: 'Development' },
        { name: 'Nick Simone', displayName: 0 },
        { name: '[Officer] Cody Sharp', faction: 'Police' },
    ],
    NikkisARiot: [
        { name: '[Deputy] Jenny Hall', faction: 'Police', nicknames: [reg(/\bje\S{1,3}y/)] },
    ],
    Nmplol: [
        { name: 'Buddy Black' },
    ],
    NoElusionz: [
        { name: 'Bobby Schmiguel', faction: 'BSK', nicknames: ['Bobby Beats'] },
    ],
    noKingu: [
        { name: '[Deputy] Henri King', faction: 'Police' },
    ],
    NotoriousNorman: [
        { name: 'Chips Ahoy' },
    ],
    Nottics: [
        { name: 'Raymundo Ortiz', faction: 'Vagos', nicknames: [reg(/\br+ay/)] },
        { name: 'Raul Rodriguez', nicknames: [reg(/\br+au+l/)] },
    ],
    NovalokHD: [
        { name: '[Officer] Ben Casanova', faction: 'Police' },
    ],
    Ntviiper: [
        { name: 'Kian Mercer', faction: 'HOA' },
    ],
    nxsiah: [
        { name: 'Zelaya Fernando', faction: 'Prison', nicknames: ['Z', 'Laya'] },
    ],
    NymN: [
        { name: 'Frank Fritugo' },
    ],
    o_Oakleyz_o: [
        { name: '[Deputy] Samuel Holtz', faction: 'Police' },
    ],
    OccamsSabre: [
        { name: '[Lawyer /] Benjamin Crane', faction: 'DoJ' },
        { name: '[Justice] Ray Montag', faction: 'DoJ' },
        { name: 'Busta Block', faction: 'ASRR', displayName: 0 },
        { name: '[Officer] Jeffrey Bundy', faction: 'Police' },
    ],
    Octopimp: [
        { name: '[Sorceror /] Chut McMillan', faction: 'LARPers', nicknames: ['Chut The Magnificent', 'Sorcerer'] },
    ],
    Odablock: [
        { name: 'Lil Baldy', displayName: 0, assume: 'assumeOther' },
        { name: 'Big O', displayName: 0 },
    ],
    OfficialTaco: [
        { name: 'Charles "Taco" Prince', faction: 'Chang Gang' },
    ],
    OG_Tyger: [
        { name: '[Officer] Peter Frost', faction: 'Police' },
    ],
    ogWiked: [
        { name: 'Dwayne Flores' },
        { name: 'Truth Flores' },
    ],
    OhMadOne: [
        { name: '[Lawyer /] Ginzu Okada', faction: 'DoJ' },
    ],
    OllyPop: [
        { name: 'Ivy Poppins' },
        { name: 'Evee Poppins' },
    ],
    omie: [
        { name: 'Marty Shanks', faction: 'Burger Shot', assumeServer: 'public' },
    ],
    OwenSeven: [
        { name: '[Officer] Owen Svensen', faction: 'Police' },
    ],
    PapaChip: [
        { name: 'Channing "Chain" Turner', faction: 'BBMC' },
    ],
    Pengwin: [
        { name: '[Deputy] Jerry Perkins', faction: 'Police' },
        { name: 'Dustin "Dark Shadow" Manson' },
        { name: 'Kenneth "Ken-sama" Foreman', faction: 'Burger Shot' },
    ],
    PENTA: [
        { name: '[Deputy] Randy Wrangler', faction: 'Police', nicknames: ['Wranglin'] },
        { name: 'Jordan Steele', displayName: 0, nicknames: ['"Parking" God', 'Phoenix Messiah'] },
        { name: 'Ricky Robins', faction: 'Cleanbois' },
        { name: 'Mike Block', faction: 'ASRR', leader: true, displayName: 0 },
        { name: 'Chase Clouter' },
        { name: 'Jane Obama', displayName: 0 },
    ],
    peterparkTV: [
        { name: 'Peener Pogue' },
    ],
    Pez_Br0: [
        { name: 'Pez Speedwagon', faction: 'BBMC' },
        { name: 'Pezzy Pee' },
    ],
    PlasticLittle: [
        { name: 'Parson "Frosty" Brown', faction: 'Lost MC' },
    ],
    PmsProxy: [
        { name: '[Officer] Kira Light', faction: 'Police' },
        { name: 'Ella Stone' },
    ],
    pokelawls: [
        { name: 'Bogg Dann' },
        { name: 'Lacari Anemay' },
    ],
    pokimane: [
        { name: 'Celine LaCroix' },
    ],
    Pons: [
        { name: '[Officer] Chet Manley', faction: 'Police' },
        { name: '[Officer] Bodean Tucker', faction: 'Police', nicknames: ['Bo'] },
    ],
    PriddyFresh: [
        { name: 'Tupac Shakur' },
    ],
    Primal: [
        { name: '[Officer] Kareem Lyon', faction: 'Police', displayName: 1 },
    ],
    PsiSyn: [
        { name: '[Officer] Lucio Panini', faction: 'Police', assumeServer: 'public' },
    ],
    Pssychotic: [
        { name: 'Jason Paul', faction: 'Lost MC', nicknames: ['JP'] },
        { name: 'Hades', nicknames: ['Dog'] },
    ],
    Purge9090: [
        { name: 'Jack Frent', faction: 'DoC', displayName: 0 },
    ],
    qMARIOx: [
        { name: 'Fernando "Mario" Reyes', nicknames: ['"Mario" from the Barrio'] },
    ],
    qurquru: [
        { name: '[Officer] Vladimir Reznik', faction: 'Police' },
    ],
    Ragonath: [
        { name: 'Maxwell Devitt', displayName: 0 },
    ],
    Raided: [
        { name: '[Officer] Gage Draider', faction: 'Police' },
        { name: '[Development /] Raided', faction: 'Development' },
    ],
    Ramee: [
        { name: 'Ramee El-Rahman', faction: 'Chang Gang', nicknames: ['The "Warlord"', 'The "Vulture"', 'SBS Patient-0'] },
        { name: '[Ranger] Conan Clarkson', faction: 'Police' },
    ],
    Rasta: [
        { name: 'Dunn Robinson', assume: 'assumeNpNoOther' },
        { name: 'Mary Livingston', displayName: 0 },
    ],
    RatedEpicz: [
        { name: 'Randy Bullet', faction: 'Chang Gang', nicknames: ['Lazy-Eye Bullet'] },
        { name: '[Trooper] AJ Hunter', faction: 'Police' },
    ],
    Ray__C: [
        { name: 'Raymond "Ray" Romanov', faction: 'Cleanbois', nicknames: ['Ray', reg(/\brussia/)] },
    ],
    ray308win: [
        { name: '[FIB Agent] Lyonel Winchester', faction: 'Police' },
    ],
    Realzman: [
        { name: '[EMS] Connor', faction: 'Medical' },
        { name: 'Malakai' },
    ],
    ReinaRP: [
        { name: 'Mona Sanchez' },
    ],
    RemiTheSiren: [
        { name: '[Dr.] Lily Harte', faction: 'Medical', displayName: 2 },
        { name: 'Wednesday Mushkin', faction: 'HOA' },
    ],
    reno_raines: [
        { name: 'Manny McDaniels', faction: 'HOA' },
    ],
    RevRoach: [
        { name: "Happy D'Klown" },
    ],
    RickMongoLIVE: [
        { name: '[D.A.] Rick Mongo', faction: 'DoJ', assume: 'assumeNpNoOther' },
    ],
    RiZRP: [
        { name: 'Nikita Reznikov', faction: 'Pegasus' },
    ],
    rlly: [
        { name: 'Shelly Targaryen', faction: 'Burger Shot', nicknames: ['Shelleh'] },
        { name: 'Kelly Smith' },
    ],
    RobotNinjaPants: [
        { name: '[ADA] Jacob Slate', faction: 'DoJ' },
    ],
    roflgator: [
        { name: 'Robert Spowylamywanowski', nicknames: ['Rob', 'Polish', 'Night Manager'], displayName: 3 },
    ],
    Rose: [
        { name: '[Deputy] Maggie Dean', faction: 'Police' },
    ],
    Roxmiral: [
        { name: 'Ruby Morris' },
        { name: 'Nikki Drools', faction: 'DoC' },
        { name: 'Sherry Paie', faction: 'Burger Shot', displayName: 1 },
        { name: 'Sherry Lee' },
    ],
    RudeNoodleNPC: [
        { name: 'Tee Veeman', faction: 'Burger Shot' },
    ],
    s0upes: [
        { name: 'James "Apples" Apeller' },
        { name: '[Officer] Silas Grimmer', faction: 'Police' },
        { name: 'Ryder S. Block', faction: 'ASRR', displayName: 0 },
        { name: 'Ezekiel "Zero" Rogaine' },
    ],
    Saiiren: [
        { name: 'Ai "Betch" Musori', nicknames: ['Bitch'], displayName: 0 },
        { name: '"~Podcast~"', nicknames: ['Podcast'], faction: 'OtherNP' },
    ],
    Sal_Rosenberg: [
        { name: 'Sal Rosenberg' },
    ],
    Sams: [
        { name: 'Dimitri Barkov', faction: 'HOA' },
    ],
    Sareff: [
        { name: 'Violet Noreguarde', faction: 'Vagos' },
        { name: '[D.A.] Paige Green', faction: 'DoJ' },
        { name: 'Chasity Dawes' },
    ],
    SAVx: [
        { name: 'Johnny Cassle' },
    ],
    sashagrey: [
        { name: 'Enza Zissou' },
    ],
    Sax850: [
        { name: 'Motya Satovksy', faction: 'Russians' },
        { name: '[Officer] Olof Gunnarsson', faction: 'Police' },
    ],
    SayeedBlack: [
        { name: 'Arush Patel "Speedy" Santana', faction: 'Vagos', leader: true, nicknames: ['El Jefe'] },
        { name: 'Sayeed White', faction: 'DoC', nicknames: ['Mr. White'], displayName: 3 },
    ],
    ScarletSpace: [
        { name: 'Penny Farthing' },
    ],
    SeaNanners: [
        { name: 'Ronjulio Escjulio' },
    ],
    Selvek: [
        { name: 'Jeffrey Price', displayName: 0 },
        { name: '[Officer] Jack Sawyer', faction: 'Police' },
    ],
    SgtApollo: [
        { name: 'Salem Barghouthi' },
    ],
    shaggy_steve: [
        { name: '[Deputy] Jimmy Gordon', faction: 'Police' },
    ],
    Shindur: [
        { name: '[Deputy] Joey Keys', faction: 'Police' },
    ],
    shiny: [
        { name: '[Dispatch] Honey Buns', faction: 'Police', nicknames: ['D-21'] },
        { name: 'Pebbles ?', nicknames: ['Dog'] },
        { name: '[Archdruid /] Clyde "Meowfurryon" Eastside', faction: 'LARPers', nicknames: ['Druid', 'Archdruid', 'Malfurryon'] },
    ],
    Shortyyguy: [
        { name: 'Eddie Delish', faction: 'Cleanbois' },
    ],
    Shotz: [
        { name: 'Vinny Pistone', faction: 'Chang Gang' },
        { name: 'Mr J', faction: 'Chang Gang', displayName: 0 },
        { name: '[Officer] John Mineo', faction: 'Police' },
    ],
    Shrimp_: [
        { name: 'Bradley Kickass', faction: 'Burger Shot', displayName: 0 },
        { name: 'Jimmy Bending', displayName: 0 },
        { name: '[Mr.] Watt Son', displayName: 0 },
    ],
    shroud: [
        { name: 'Richard Hard' },
    ],
    SiirToast: [
        { name: 'Anton Belov', faction: 'Russians' },
    ],
    Silent: [
        { name: 'Juan Carlos "Flippy" Hernandez', leader: true, nicknames: ['FLIPPPPY', 'FLIPPPY', 'FLIPPPPPY'] },
        { name: '[Officer] Joel Garcia', faction: 'Police' },
    ],
    SilentSentry: [
        { name: 'Ron Otterman', faction: 'News Media', nicknames: [reg(/🎥/)], displayName: 0 },
        { name: 'Michael Michaels Jr.', nicknames: ['MMJR'], displayName: 0 },
        { name: 'Iroquois "Snake" Plisken', displayName: 0 },
        { name: 'Ziggy Flint', nicknames: [reg(/🌿/)], displayName: 0 },
    ],
    SimpleD88: [
        { name: '[A.D.A.] Blake Specter', faction: 'DoJ' },
        { name: '[Lawyer /] Reggie Might', faction: 'DoJ' },
    ],
    Simplyje2ns: [
        { name: 'Jean Steele', displayName: 0 },
    ],
    sips_: [
        { name: 'Tito Higgins' },
    ],
    SirPink: [
        { name: 'Reginald "Reggie" Bigglesby', faction: 'Burger Shot' },
    ],
    Skannerz_: [
        { name: 'Wayne Kerr' },
    ],
    SkipGently: [
        { name: 'John Riggs' },
    ],
    skippypoppin: [
        { name: 'Kevin Whipaloo', faction: 'Burger Shot', leader: true, displayName: 0 },
    ],
    Skitx0: [
        { name: 'Smino "Hitta" Brown', faction: 'GSF', assume: 'assumeNpNoOther' },
    ],
    Slasher2099: [
        { name: '[Officer] Darrel McCormik', faction: 'Police' },
        { name: '[K9 Trooper] Fenton', faction: 'Police', nicknames: ['Fentons'] },
    ],
    Smaczny: [
        { name: 'Conrad Gross' },
    ],
    smo_och: [
        { name: 'Mike Smoore', faction: 'Vagos', displayName: 0 },
    ],
    SmokySloth: [
        { name: 'Bovice Wilkinson', faction: 'Prison' },
        { name: 'Tayvadius "Chef" Jamarcus Livingston III', faction: 'GSF' },
    ],
    sock22: [
        { name: '[Deputy] Richard Dark', faction: 'Police' },
    ],
    SodaKite: [
        { name: 'Ellie Dono', faction: 'Cleanbois' },
        { name: 'Chell Phish', displayName: 0 },
    ],
    sodapoppin: [
        { name: 'Kevin Whipaloo', faction: 'Burger Shot', leader: true, displayName: 0 },
        { name: 'Tappy "Cat" Nippers', nicknames: ['Cat'], displayName: 0 },
    ],
    Sp00nerism: [
        { name: 'Harry Phartz' },
    ],
    Spaceboy: [
        { name: 'Melbert "Mel" Rickenbacker' },
        { name: 'Adrian Block', faction: 'ASRR', displayName: 0 },
        { name: '[Deputy] Pat Downing', faction: 'Police' },
        { name: 'Casey Boyd', nicknames: ['Caseboy', 'L8PD'], displayName: 0 },
    ],
    Spekel: [
        { name: 'Sonya Summers', nicknames: ['Black Betty'] },
        { name: 'Chloe Lesterol' },
        { name: '[Officer] Scarlett Winters', faction: 'Police' },
    ],
    spicybackpain: [
        { name: 'Kray-Tor Skullfondler', faction: 'HOA' },
    ],
    Ssaab: [
        { name: 'Al Saab', faction: 'HOA', displayName: 2 },
        { name: '[Deputy] Sam Baas', faction: 'Police', nicknames: ['Samir', 'Baasem'], displayName: 2 },
    ],
    steamcharlie: [
        { name: '[Deputy] Sydney Bearmont', faction: 'Police', displayName: 1 },
    ],
    ster: [
        { name: 'Guy Dance' },
        { name: 'Gerald Wagner', displayName: 0 },
    ],
    stitchybird: [
        { name: 'Daphne Tillamuck Valentino', faction: 'Lunatix' },
        { name: 'Abigail "Abi" Sharp' },
    ],
    Stoner_Minded: [
        { name: '[Officer] Frank Williams', faction: 'Police', displayName: 1 },
    ],
    Striking_Fast: [
        { name: 'Gerard "Dewey" Hawthorne', nicknames: ['Dewie'] },
    ],
    SullyRP: [
        { name: 'Jack "Sully" Sullivan' },
    ],
    summit1g: [
        { name: '[Deputy] John Charleston', faction: 'Police' },
        { name: 'Charles "Chawa" Johnson', faction: 'Chang Gang' },
    ],
    Sunni: [
        { name: 'Hilda Bulking', faction: 'Vagos' },
    ],
    SuperBunneh: [
        { name: '[EMS] Mila Smoak', faction: 'Medical' },
        { name: 'Madison "Maddy" Fox', faction: 'GSF' },
    ],
    Sur_Lee: [
        { name: 'Mitch "Dumbass" Bader' },
    ],
    Surefour: [
        { name: '[Officer] Kenny Hawk', faction: 'Police', displayName: 0 },
        { name: '[Ranger /] Clarence Trueshot', faction: 'LARPers', nicknames: ['Ranger'], displayName: 0 },
    ],
    Suspect: [
        { name: 'Marcos Da Silva' },
    ],
    suzy_q: [
        { name: 'Dreah Johnson' },
    ],
    Svennoss: [
        { name: 'Barry Svensson', faction: 'Pegasus' },
    ],
    Sweet_Anita: [
        { name: 'Marylin Hilton' },
    ],
    SwizzMB: [
        { name: 'Miguel Almerion' },
    ],
    Sykkuno: [
        { name: 'Yuno Sykk', faction: 'Cleanbois', displayName: 1 },
    ],
    SynthHunter: [
        { name: 'Hunter "Wingman" Skye', faction: 'ASRR' },
    ],
    Syraphic: [
        { name: 'Elena Marilyn Vega' },
        { name: 'Emilia Salvatore' },
    ],
    t3r0: [
        { name: '[Dr.] Andrew Ducksworth', faction: 'Medical', displayName: 2 },
    ],
    TaliaMar: [
        { name: 'Mya ?' },
    ],
    tara_: [
        { name: '[EMS] Sarah Ableton', faction: 'Medical' },
    ],
    Tasara22: [
        { name: 'Tuesday Phillips' },
        { name: 'Milena' },
    ],
    Tehrani: [
        { name: 'Boris Ivanov', faction: 'Russians', leader: true },
        { name: 'Hector Guzman', faction: 'Vagos' },
    ],
    TenguOP: [
        { name: 'Wally Veloce' },
    ],
    TerribleJamie: [
        { name: 'Lavante "L" Lamano', faction: 'GSF' },
    ],
    Test: [
        { name: 'Test6' },
    ],
    TezMate: [
        { name: '[Deputy] Nicholas Riggs', faction: 'Police' },
    ],
    TFNeraZe: [
        { name: '[Deputy] Michael Dunning', faction: 'Police' },
    ],
    Tfue: [
        { name: 'Tucker Johnson', faction: 'Chang Gang' },
    ],
    thaCOOP: [
        { name: '[Officer] Luke Holliday', faction: 'Police' },
        { name: '[Judge] Coop Holliday', faction: 'DoJ', displayName: 1 },
        { name: 'Matthew Payne', displayName: 2 },
        { name: 'Remee El-Rahman' },
    ],
    Thadrius: [
        { name: '[Deputy] Jonathan Dazzler', faction: 'Police', nicknames: ['Johnny'], displayName: 2 },
        { name: 'Slappy McGaffey' },
    ],
    the_halfhand: [
        { name: 'Jack "Sully" Sullivan' },
        { name: '[Officer] Oscar Fitzpatrick', faction: 'Police', nicknames: ['Fitz', 'Patrick'] },
    ],
    TheAaronShaq: [
        { name: '? "Glue Guy" ?', faction: 'Burger Shot' },
    ],
    TheBigMeech: [
        { name: 'Pilbis Shonly', faction: 'NBC' },
        { name: 'Tyler Kwando', displayName: 0 },
    ],
    TheChief1114: [
        { name: 'Fingle Dan', faction: 'ASRR', displayName: 0, assume: 'assumeNpNoOther' },
    ],
    TheDondi: [
        { name: 'Arthur Hammond', nicknames: ['The "Doctor"'] },
        { name: '[Officer] Delaney', faction: 'Police' },
    ],
    TheGeekEntry: [
        { name: 'Stacey Doyle' },
        { name: 'Jenn Bordeaux', nicknames: ['Frenchie', 'French'] },
    ],
    theLGX: [
        { name: 'Bryce Miller', nicknames: ['BDawg'] },
        { name: 'Diego Marquez' },
        { name: 'Roland Nelson' },
    ],
    Timmac: [
        { name: '[Deputy] T.J. Mack', faction: 'Police', assumeServer: 'whitelist' },
        { name: 'Gomer Colton', nicknames: ['Gomey'], assumeServer: 'whitelist' },
        { name: '[Trooper] T.J. Mack', faction: 'Police', assumeServer: 'public' },
    ],
    Timmy2: [
        { name: 'Orlando Jones', faction: 'SSB', nicknames: ['OJ'] },
        { name: 'Chino G', faction: 'Vagos' },
        { name: 'Cardell "CJ" Jones', faction: 'SSB' },
    ],
    Tinker: [
        { name: '[Deputy] Theodore Tinker', faction: 'Police' },
        { name: 'Sean Tinker', faction: 'Pegasus', displayName: 0 },
    ],
    TinySpark: [
        { name: '[Deputy] Daisy Dukakis', faction: 'Police' },
    ],
    TinyStunt: [
        { name: '[EMS] Bailey Jade', faction: 'Medical' },
    ],
    ToastRP: [
        { name: 'Paulie' },
    ],
    Tobiii: [
        { name: '[Development /] Tobiii', faction: 'Development' },
    ],
    Trainwreckstv: [
        { name: 'Douglas "Doug Buck" Buck', displayName: 0 },
    ],
    Traumz: [
        { name: 'Edward Thatch', nicknames: ['Captain Moosebeard'], displayName: 3 },
    ],
    travpiper: [
        { name: 'Carlos "Cheddar" Sanchez', faction: 'HOA' },
        { name: '[Deputy] William Gunner', faction: 'Police', nicknames: ['Willy'] },
        { name: 'Warren Wallace' },
        { name: 'Charlie Colcord' },
        { name: 'Hazard' },
    ],
    traycee: [
        { name: 'Lexi Law', faction: 'Angels' },
    ],
    TwistedBones: [
        { name: 'Mark White', displayName: 0 },
        { name: 'Hank Marston', displayName: 0 },
        { name: 'Marcus Black', faction: 'GSF', displayName: 0 },
    ],
    TwistedManifest: [
        { name: 'Jack Valentino', faction: 'Lunatix' },
    ],
    UberHaxorNova: [
        { name: 'Siz Fulker', faction: 'HOA', leader: true, nicknames: ['uhnSuffer'] },
        { name: 'Toh Biggles Fitzcharles', displayName: 0, nicknames: ['Yaes'] },
        { name: '[Deputy] Barry Briddle', faction: 'Police' },
    ],
    uhSnow: [
        { name: '[Trooper] Jackie Snow', faction: 'Police' },
        { name: 'Mikey Mersion' },
    ],
    Umadbrahlive: [
        { name: 'Leonel Martinez', faction: 'Vagos', nicknames: ['lion'], displayName: 2 },
        { name: 'Sergio Lopez', faction: 'Marabunta', leader: true },
        { name: 'Big E', faction: 'SSB', leader: true, nicknames: ['Big L'], displayName: 0 },
    ],
    Vader: [
        { name: 'Eugene Zuckerberg', faction: 'Cleanbois', nicknames: ['Old Man'] },
        { name: 'Nacho Block', faction: 'ASRR', displayName: 0 },
        { name: '[Deputy] Rob Banks', faction: 'Police' },
        { name: 'Tuong Ru Kim' },
    ],
    VADIKUS007: [
        { name: 'Yuri Grozniy', displayName: 0 },
    ],
    Vaerinis: [
        { name: '[Officer] Thomas Metzger', faction: 'Police' },
    ],
    VaguePWNage: [
        { name: 'Ramsay', faction: 'SSB' },
    ],
    ValorWasTaken: [
        { name: 'Esteban Julio-Cruz-Perez-Rodriguez', faction: 'Marabunta' },
    ],
    Vigors: [
        { name: '[Warlock /] Kayn "Yager Demonblood" Larp', faction: 'LARPers', nicknames: ['Warlock', 'Fighter', 'Yager', 'Demonblood'], displayName: 0 },
    ],
    Viviana: [
        { name: 'Griselda Ambrose', nicknames: ['Granny'] },
        { name: 'Lana Valentine' },
    ],
    VTechas: [
        { name: 'Daryl Dixon', faction: 'HOA' },
    ],
    w00ter: [
        { name: '[Deputy] Peter Rogers', faction: 'Police' },
    ],
    Wayward: [
        { name: '[Judge] Wayne Ardson', faction: 'DoJ' },
        { name: 'Angelo "Leo Nardo" Nardo', nicknames: ['Leo'] },
        { name: 'Jack "The Joker" Knaves', nicknames: ['The "Joker"'] },
        { name: 'Bowser' },
    ],
    WeCameAsBecca: [
        { name: '[Dr.] Kennedy Adams', faction: 'Medical' },
    ],
    Wehtuns: [
        { name: '[Lawyer /] Lawrence Splainer', faction: 'DoJ', displayName: 2 },
    ],
    Whippy: [
        { name: 'Irwin Dundee', faction: 'BBMC', displayName: 2 },
        { name: '[Officer] Crocodile "Croc" Steve', faction: 'Police', nicknames: ['Cop'] },
        { name: 'James Tinklebottom' },
    ],
    WhiteyRP: [
        { name: '[Officer] Alex Casterman', faction: 'Police' },
        { name: 'Finlay' },
    ],
    WillerZ: [
        { name: 'Will Earnz', displayName: 0 },
    ],
    willneff: [
        { name: '"James Marco" St. Marco', nicknames: ['marko', 'marcoing', 'markoing'] },
        { name: "? \"Don's Mother\" ?", nicknames: ['Mama', 'Donna'] },
    ],
    Wolfabelle: [
        { name: 'Bianca Walters' },
    ],
    WTFGameNation: [
        { name: '[Dr.] Noah Drake', faction: 'Medical' },
    ],
    WuPingNOTEggRoll: [
        { name: 'Wu "Egg Roll" Ping' },
    ],
    wvngie: [
        { name: 'Le Wang', faction: 'Vagos', displayName: 0 },
    ],
    xQcOW: [
        { name: 'Jean "X" Paul', nicknames: ['Ghost Rider', 'Rider'], displayName: 0 },
        { name: '[Deputy] Pierre "PP" Paul', faction: 'Police', displayName: 0 },
        { name: 'Jean Pierre', displayName: 0 },
    ],
    Xiceman: [
        { name: 'Mike Wadum', faction: 'Vagos', nicknames: ['El Gringo'] },
        { name: '[Deputy] Mike Bayo', faction: 'Police' },
    ],
    XMOTHATRUCKAX: [
        { name: 'Ronald "Red" Juggler' },
    ],
    xReklez: [
        { name: 'AJ', faction: 'SSB' },
        { name: 'Chico Guzman', faction: 'Vagos' },
    ],
    YoinksOG: [
        { name: 'Doug Canada' },
    ],
    yooApollo: [
        { name: 'Martin Julio-Perez-Cruz-Rodriguez', faction: 'Marabunta' },
    ],
    Zaquelle: [
        { name: '[Officer] Mackenzie Hayes', faction: 'Police', assume: 'assumeNp' },
    ],
    ZayTyree: [
        { name: 'Renato Ortiz', faction: 'Vagos', displayName: 0 },
    ],
    Zerkaa: [
        { name: 'Tommy Tate', displayName: 0 },
    ],
    Ziggy: [
        { name: '[Ranger] Ziggy Buggs', faction: 'Police', displayName: 1 },
        { name: '[Lawyer /] Norman Bones', faction: 'DoJ', displayName: 0 },
    ],
    zirnrp: [
        { name: 'Solomon Seerson' },
    ],
    Zoil: [
        { name: 'Skunkz Wallace' },
    ],
    Zotbot: [
        { name: '[Physiotherapist] Leon Marks', faction: 'Medical' },
    ],
};
