export interface ExperienceInterface {
  company: string,
  startDate: string,
  endDate: string,
  job: string,
  place: string,
  tasks: string[],
}

export class ExperienceModel implements ExperienceInterface {
  constructor(
    public company: string,
    public startDate: string,
    public endDate: string,
    public job: string,
    public place: string,
    public tasks: string[],
  ) {
  }
}

export function buildExperienceModel(this: void, apiModel: any): ExperienceInterface[] {
  let experienceModel: ExperienceModel[] = [];
  apiModel.forEach((item: any) => {
    experienceModel.push(new ExperienceModel(
      item.company,
      item.startDate,
      item.endDate,
      item.job,
      item.place,
      item.tasks,
    ));
  });

  return experienceModel;
}

export interface WorkExperienceInterface {
  title: string,
  erfahrung?: ExperienceInterface[],
}

export class WorkExperienceModel implements WorkExperienceInterface {
  constructor(
    public title: string,
    public erfahrung?: ExperienceInterface[],
  ) {
  }
}

export function buildWorkExperienceModel(this: void, apiModel: any): WorkExperienceInterface {
  return new WorkExperienceModel(
    apiModel.title,
    buildExperienceModel(apiModel.erfahrung),
  )
}
