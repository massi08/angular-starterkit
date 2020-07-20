import {Action, createReducer, on} from '@ngrx/store';
import * as GeneralActions from '../actions/general.actions';

export interface State {
  lang: string;
}

export const initialState: State = {
  lang: null
};

const generalReducer = createReducer(
  initialState,
  on(GeneralActions.setAppLanguage, (state, props) => ({...state, lang: props.lang})),
);

export function reducer(state: State | undefined, action: Action) {
  return generalReducer(state, action);
}

export const getLang = (state: State) => state.lang;
