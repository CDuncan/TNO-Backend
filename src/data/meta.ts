export const npFactionsReal = {
    cleanbois: 'Cleanbois',
    lostmc: 'Lost MC',
    changgang: 'Chang Gang',
    vagos: 'Vagos',
    gsf: 'GSF',
    ssb: 'SSB',
    pegasus: 'Pegasus',
    hoa: 'HOA',
    doj: 'DoJ',
    asrr: 'ASRR',
    angels: 'Angels',
    nbc: 'NBC',
    bbmc: 'BBMC',
    burgershot: 'Burger Shot',
    development: 'Development',
    doc: 'DoC',
    prison: 'Prison',
    mechanic: 'Mechanic',
    harmony: 'Harmony',
    quickfix: 'QuickFix',
    tunershop: 'Tuner Shop',
    larpers: 'LARPers',
    police: 'Police',
    medical: 'Medical',
    independent: 'Independent',
    otherfaction: 'Other Faction',
    other: 'Other',
    darkweb: 'Dark Web',
    news: 'News',
    russians: 'Russians',
    condemnedmc: 'Condemned MC',
    mersions: 'Mersions',
    lunatix: 'Lunatix',
    marabunta: 'Marabunta',
    bsk: 'BSK',
    podcast: 'Podcast',
} as const;

export const npFactionsMeta = {
    allnopixel: 'All NoPixel',
    alltwitch: 'All Twitch',
    othernp: 'Other NP',
    publicnp: 'Public NP',
} as const;

type NpFactionsReal = typeof npFactionsReal;
type NpFactionsMeta = typeof npFactionsMeta;

export const npFactions: NpFactionsReal & NpFactionsMeta = { ...npFactionsReal, ...npFactionsMeta } as const;

type NpFactions = typeof npFactions;

export type FactionRealMini = keyof NpFactionsReal;
export type FactionRealFull = (NpFactionsReal)[FactionRealMini];

export type FactionMini = keyof NpFactions;
export type FactionFull = (NpFactions)[FactionMini];

export const npFactionsRealMini: FactionRealMini[] = (Object.keys(npFactionsReal) as FactionRealMini[]);