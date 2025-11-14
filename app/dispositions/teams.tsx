interface TeamDetails {
    title: string
    logo: string
    backdrop: string
    remark: string
}

export const teams: { [key: string]: TeamDetails } = {
    'valorant': {
        title: 'Valorant',
        logo: '/teams/valorant_logo.webp',
        backdrop: '/teams/valorant_backdrop.webp',
        remark: ''
    },
    'marvel_rivals': {
        title: 'Marvel Rivals',
        logo: '/teams/marvel_rivals_logo.webp',
        backdrop: '/teams/marvel_rivals_backdrop.webp',
        remark: ''
    },
    'overwatch_2': {
        title: 'Overwatch 2',
        logo: '/teams/overwatch_2_logo.webp',
        backdrop: '/teams/overwatch_2_backdrop.webp',
        remark: ''
    },
}