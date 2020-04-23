import { Team } from './team';
import { League } from './league';

export interface FootballMatch {
    matchId?: number;
    league?: League;
    homeTeam?: Team;
    awayTeam?: Team;
    homeTeamGoals?: number;
    awayTeamGoals?: number;
    matchDate?: {
        date?: string;
        time?: string;
    };
    time?: string;
}
