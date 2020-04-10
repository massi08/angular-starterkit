export class SetLang {
  static readonly type = '[General] Set application lang';

  constructor(public lang: string) {
  }
}
