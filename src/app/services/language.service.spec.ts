import {LanguageService} from './language.service';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngxs/store';

describe('languageService', () => {
  let service: LanguageService;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(() => {
    translateServiceSpy = jasmine.createSpyObj('TranslateService',
      ['addLangs', 'setDefaultLang', 'getBrowserLang', 'use']);
    storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
    service = new LanguageService(translateServiceSpy, storeSpy);
  });

  it('#isLangSupported should always return true or false', () => {
    expect(service.isLangSupported('en')).toBe(true, 'en should be supported');
    expect(service.isLangSupported('')).toBe(false, 'empty string should not be supported');
    expect(service.isLangSupported(null)).toBe(false, 'null should not be supported');
    expect(service.isLangSupported(undefined)).toBe(false, 'undefined should not be supported');
  });

  it('#setApplicationActiveLanguage should return null if lang is not supported or same as current lang', () => {
    service.currentLang = 'en';
    expect(service.setApplicationActiveLanguage('en')).toBeNull('Did not return Null while setting language to en');
    expect(service.setApplicationActiveLanguage('fr')).not.toBeNull('Returned Null while setting language to fr');
    expect(service.currentLang).toEqual('fr', 'Current lang not correctly set');
    expect(translateServiceSpy.use).withContext('Incorrect parameter passed to translateService').toHaveBeenCalledWith('fr');
  });
});
