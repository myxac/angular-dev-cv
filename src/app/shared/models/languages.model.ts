export interface LanguagesInterface {
  title: string,
  languageKnowledge?: [{ name: string, level: number }];
}

export class LanguagesModel implements LanguagesInterface {
  constructor(
    public title: string,
    public languageKnowledge?: [{ name: string, level: number }],
  ) {
  }
}

export function buildLanguagesModel(this: void, apiModel: any): LanguagesInterface {
  return new LanguagesModel(apiModel.title, apiModel.languageKnowledge)
}
