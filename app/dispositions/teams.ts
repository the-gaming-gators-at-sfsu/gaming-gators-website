interface Player {
    name: string
    title: string
    description: string
    photo: string
}

export interface TeamMeta {
    displayName: string
    remark: string
    roster: Player[]
}

export interface TeamDetails extends TeamMeta {
    logo: string
    backdrop: string
}

const TEAMS_ASSETS_DIRECTORY = '/teams/'
const LOGO_CONTENT_AFFIX = '_logo.webp'
const BACKDROP_CONTENT_AFFIX = '_backdrop.webp'

const teamMetas: { [key: string]: TeamMeta } = {
    'valorant': {
        displayName: 'Valorant',
        remark: '',
        roster: [
            {
                name: '',
                title: '',
                description: '',
                photo: ''
            }
        ]
    },
    'marvel_rivals': {
        displayName: 'Marvel Rivals',
        remark: '',
        roster: []
    },
    'overwatch': {
        displayName: 'Overwatch',
        remark: '',
        roster: []
    },
    'counter_strike_2': {
        displayName: 'Counter Strike: 2',
        remark: '',
        roster: []
    }
}

const teams: { [key: string]: TeamDetails } = {}

for (const teamName of Object.keys(teamMetas)) {
    teams[teamName] = {
        ...teamMetas[teamName],
        logo: TEAMS_ASSETS_DIRECTORY + teamName + "/" + teamName + LOGO_CONTENT_AFFIX,
        backdrop: TEAMS_ASSETS_DIRECTORY + teamName + "/" + teamName + BACKDROP_CONTENT_AFFIX
    }
}

export { teams }