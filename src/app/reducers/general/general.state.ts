import {GeneralStateModel} from './general.state.model';
import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {SetLang} from '../../actions/general.actions';

@State<GeneralStateModel>({
  name: 'general',
  defaults: {
    lang: null,
  }
})
@Injectable()
export class GeneralState {

  @Action(SetLang)
  setLang(ctx: StateContext<GeneralStateModel>, action: SetLang) {
    ctx.patchState({
      lang: action.lang
    });
  }
}
