import {GeneralStateModel} from './general.state.model';
import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SetLang} from '../../actions/general.actions';

@State<GeneralStateModel>({
  name: 'general',
  defaults: {
    lang: null,
  }
})
@Injectable()
export class GeneralState {

  @Selector()
  static getLang(state: GeneralStateModel) {
    return state.lang;
  }

  @Action(SetLang)
  setLang(ctx: StateContext<GeneralStateModel>, action: SetLang) {
    ctx.patchState({
      lang: action.lang
    });
  }
}
