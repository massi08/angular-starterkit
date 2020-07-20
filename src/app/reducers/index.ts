import {ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromGeneral from './general.reducer';

export interface State {
  general: fromGeneral.State;
}

export const reducers: ActionReducerMap<State> = {
  general: fromGeneral.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// States
export const generalState = (state: State) => state.general;

// Selectors
export const getLang = createSelector(generalState, fromGeneral.getLang);
