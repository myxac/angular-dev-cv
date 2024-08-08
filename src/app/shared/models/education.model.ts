export interface EducationInterface {
  title: string,
  educationList?: [{
    degree: string,
    details: string,
    endDate: string,
    institution: string,
    startDate: string,
  }];
}

export class EducationModel implements EducationInterface {
  constructor(
    public title: string,
    public educationList?: [{
      degree: string,
      details: string,
      endDate: string,
      institution: string,
      startDate: string,
    }],
  ) {
  }
}

export function buildEducationModel(this: void, apiModel: any): EducationInterface {
  return new EducationModel(
    apiModel.title,
    apiModel.educationList,
  )
}
