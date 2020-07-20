import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DEFAULT_LANG, LANG_ARRAY} from '../app.constants';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as GeneralActions from '../actions/general.actions';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: string;

  constructor(private translateService: TranslateService, private store: Store<fromRoot.State>) {
  }

  init() {
    this.translateService.addLangs(LANG_ARRAY);
    this.translateService.setDefaultLang(DEFAULT_LANG);
    this.setLangWithBrowserOrDefaultLanguage();
  }

  setLangWithBrowserOrDefaultLanguage() {
    let lang;
    if (this.isLangSupported(this.translateService.getBrowserLang())) {
      lang = this.translateService.getBrowserLang();
    } else {
      lang = DEFAULT_LANG;
    }
    this.setApplicationActiveLanguage(lang);
  }

  isLangSupported(lang: string): boolean {
    if (!lang || typeof lang !== 'string') {
      return false;
    }
    const langRegex = new RegExp(LANG_ARRAY.join('|'), 'gi');
    return lang.match(langRegex).length > 0;
  }

  /**
   * Util that we can use if we use locales
   * @param locale string
   */
  getLangFromLocale(locale: string): string {
    if (!locale) {
      return null;
    }
    let lang = locale;
    // Get preferred lang ==> first string before ","
    if (lang.indexOf(',') !== -1) {
      lang = lang.split(',')[0];
    }
    // Get lang from locale ex: get en from en-US
    if (lang.indexOf('-') !== -1) {
      lang = lang.split('-')[0];
    }
    // Get lang from locale ex: get en from en_US
    if (lang.indexOf('_') !== -1) {
      lang = lang.split('_')[0];
    }
    return lang;
  }

  setApplicationActiveLanguage(lang: string) {
    if (!this.isLangSupported(lang) || lang === this.currentLang) {
      return null;
    }
    this.currentLang = lang;
    this.translateService.use(lang);
    this.store.dispatch(GeneralActions.setAppLanguage({
      lang
    }));
  }
}
