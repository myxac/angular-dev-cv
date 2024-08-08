export interface PersonalInterestsInterface {
  title: string,
  interests?: string[];
}

export class PersonalInterestsModel implements PersonalInterestsInterface {
  constructor(
    public title: string,
    public interests?: string[],
  ) {
  }
}

export function buildPersonalInterestsModel(this: void, apiModel: any): PersonalInterestsInterface {
  return new PersonalInterestsModel(
    apiModel.title,
    apiModel.interests,
  )
}
