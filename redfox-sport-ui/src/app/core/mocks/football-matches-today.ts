import { FootballMatch } from './models/football-match';

export const FOOTBALL_TODAY: FootballMatch[] = [{
    league: {
        name: 'English Premier League'
    },
    homeTeam: {
        name: 'Man United',
        crest: 'https://www.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png/preview'
    },
    awayTeam: {
        name: 'Man City',
        crest: 'https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png/preview'
    },
    homeTeamGoals: 0,
    awayTeamGoals: 0,
    time: '24\''
}, {
    league: {
        name: 'EFL Cup'
    },
    homeTeam: {
        name: 'Liverpool',
        crest: 'https://www.thesportsdb.com/images/media/team/badge/uvxuqq1448813372.png/preview'
    },
    awayTeam: {
        name: 'Derby',
        crest: 'https://www.thesportsdb.com/images/media/team/badge/jioo4z1557155744.png/preview'
    },
    homeTeamGoals: 0,
    awayTeamGoals: 0,
    time: null,
    matchDate: {
        time: '18:00'
    }
}, {
    league: {
        name: 'UEFA Champions League'
    },
    homeTeam: {
        name: 'Real Madrid',
        crest: 'https://www.thesportsdb.com/images/media/team/badge/vwvwrw1473502969.png/preview'
    },
    awayTeam: {
        name: 'Dortmund',
        crest: 'https://www.thesportsdb.com/images/media/team/badge/qtsqtx1473453261.png/preview'
    },
    homeTeamGoals: 1,
    awayTeamGoals: 2,
    time: '88\''
}];
