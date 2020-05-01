import { FixturesResponse } from 'src/app/football/models/fixtures-response';

export const FOOTBALL_TODAY: FixturesResponse[] = [{
    league: {
        name: 'Premier League',
        logo: 'https://media.api-sports.io/football/leagues/39.png'
    },
    matches: [{
        league: {
            name: 'English Premier League'
        },
        homeTeam: {
            name: 'Manchester United',
            crest: 'https://www.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png/preview'
        },
        awayTeam: {
            name: 'Manchester City',
            crest: 'https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png/preview'
        },
        homeTeamGoals: 0,
        awayTeamGoals: 0,
        time: '24\''
    }, {
        league: {
            name: 'English Premier League'
        },
        homeTeam: {
            name: 'Tottenham',
            crest: 'https://media.api-sports.io/football/teams/47.png'
        },
        awayTeam: {
            name: 'Norwich',
            crest: 'https://media.api-sports.io/football/teams/71.png'
        },
        homeTeamGoals: 1,
        awayTeamGoals: 0,
        time: '88\''
    }, {
        league: {
            name: 'English Premier League'
        },
        homeTeam: {
            name: 'Watford',
            crest: 'https://media.api-sports.io/football/teams/38.png'
        },
        awayTeam: {
            name: 'Chelsea',
            crest: 'https://media.api-sports.io/football/teams/49.png'
        },
        homeTeamGoals: 0,
        awayTeamGoals: 0,
        time: null,
        matchDate: {
            time: '16:00'
        }
    }, {
        league: {
            name: 'English Premier League'
        },
        homeTeam: {
            name: 'Southampton',
            crest: 'https://media.api-sports.io/football/teams/41.png'
        },
        awayTeam: {
            name: 'Everton',
            crest: 'https://media.api-sports.io/football/teams/45.png'
        },
        homeTeamGoals: 0,
        awayTeamGoals: 0,
        time: null,
        matchDate: {
            time: '16:00'
        }
    }, {
        league: {
            name: 'English Premier League'
        },
        homeTeam: {
            name: 'Arsenal',
            crest: 'https://media.api-sports.io/football/teams/42.png'
        },
        awayTeam: {
            name: 'Leicester',
            crest: 'https://media.api-sports.io/football/teams/46.png'
        },
        homeTeamGoals: 0,
        awayTeamGoals: 0,
        time: null,
        matchDate: {
            time: '18:30'
        }
    }]
}, {
    league: {
        name: 'Bundesliga',
        logo: 'https://media.api-sports.io/football/leagues/78.png'
    },
    matches: [{
        league: {
            name: 'German Bundesliga'
        },
        homeTeam: {
            name: 'Bayern Munich',
            crest: 'https://media.api-sports.io/football/teams/157.png'
        },
        awayTeam: {
            name: 'Hannover 96',
            crest: 'https://media.api-sports.io/football/teams/166.png'
        },
        homeTeamGoals: 4,
        awayTeamGoals: 1,
        time: '88\''
    }, {
        league: {
            name: 'German Bundesliga'
        },
        homeTeam: {
            name: 'Bayer Leverkusen',
            crest: 'https://media.api-sports.io/football/teams/168.png'
        },
        awayTeam: {
            name: 'Eintracht Frankfurt',
            crest: 'https://media.api-sports.io/football/teams/169.png'
        },
        homeTeamGoals: 1,
        awayTeamGoals: 0,
        time: '88\''
    }, {
        league: {
            name: 'German Bundesliga'
        },
        homeTeam: {
            name: 'RB Leipzig',
            crest: 'https://media.api-sports.io/football/teams/173.png'
        },
        awayTeam: {
            name: 'Borussia Dortmund',
            crest: 'https://media.api-sports.io/football/teams/165.png'
        },
        homeTeamGoals: 0,
        awayTeamGoals: 0,
        time: null,
        matchDate: {
            time: '22:00'
        }
    }]
}];
