import { FootballMatch } from 'src/app/football/models/football-match';

export const BUNDESLIGA_TODAY: FootballMatch[] = [{
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
}];
