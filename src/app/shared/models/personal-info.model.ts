export interface PersonalDataInterface {
  name?: string,
  email?: string,
  phone?: number,
  address?: string,
  birthday?: string,
  nationality?: string,
  workPermit?: string,
}

export interface PersonalInfoInterface {
  title: string,
  photo?: string,
  githubLink?: string,
  personalData?: PersonalDataInterface
}

class PersonalInfoModel implements PersonalInfoInterface {
  constructor(
    public title: string,
    public photo?: string,
    public githubLink?: string,
    public personalData?: PersonalDataInterface,
  ) {
  }
}

class PersonalDataModel implements PersonalDataInterface {
  constructor(
    public name?: string,
    public email?: string,
    public phone?: number,
    public address?: string,
    public birthday?: string,
    public nationality?: string,
    public workPermit?: string,
  ) {
  }
}

export function buildPersonalInfoModel(this: void, apiModel: any): PersonalInfoInterface {
  return new PersonalInfoModel(
    apiModel.title,
    apiModel.photo,
    apiModel.githubLink,

    new PersonalDataModel(
      apiModel.name,
      apiModel.email,
      apiModel.phone,
      apiModel.address,
      apiModel.birthday,
      apiModel.nationality,
      apiModel.workPermit,
    )
  )
}
