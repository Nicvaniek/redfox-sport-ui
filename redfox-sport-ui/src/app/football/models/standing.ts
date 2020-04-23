import { Team } from './team';

export interface Standing {
    rank?: number;
    team?: Team;
    matchesPlayed?: number;
    matchesWon?: number;
    matchesDrew?: number;
    matchesLost?: number;
    scored?: number;
    conceded?: number;
    points?: number;
    state?: 'RELEGATION' | 'PLAY_OFF' | 'PROMOTION';
}
