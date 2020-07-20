import {createAction, props} from '@ngrx/store';

export const setAppLanguage = createAction(
  '[General] Set app language',
  props<{ lang: string }>()
);
