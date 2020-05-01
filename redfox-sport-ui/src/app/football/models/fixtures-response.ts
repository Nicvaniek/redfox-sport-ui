import { League } from './league';
import { FootballMatch } from './football-match';

export interface FixturesResponse {
    league: League;
    matches: FootballMatch[];
}
