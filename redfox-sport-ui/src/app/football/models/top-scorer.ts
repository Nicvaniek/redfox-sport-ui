import { Player } from './player';

export interface TopScorer {
    rank: number;
    player: Player;
    gamesPlayed: number;
    shotsTaken: number;
    goalsScored: number;
}
