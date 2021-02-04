import {Action, createReducer, on} from '@ngrx/store';
import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';


export const scoreboardFeatureKey = 'game';

export interface Game {
  home: number;
  away: number;
}

export const initialState: Game = {
  home: 0,
  away: 0,
};


const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(ScoreboardPageActions.resetScore, () => ({ home: 0, away: 0 })),
  on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

// tslint:disable-next-line:typedef
export function reducer(state: Game | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
