export interface NotFoundInterface {
  title: string;
  text: string;
  home: string;
}

export class NotFoundModel implements NotFoundInterface {
  constructor(public title: string, public text: string, public home: string) {}
}

export function buildNotFoundModel(
  this: void,
  apiModel: any
): NotFoundInterface {
  return new NotFoundModel(apiModel.title, apiModel.text, apiModel.home);
}
