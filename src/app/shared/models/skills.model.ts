export interface SkillsListInterface {
  technologies: string[],
  tools: string[],
  design: string[],
  patterns: string[],
  softskills: string[],
}

export class SkillsListModel implements SkillsListInterface {
  constructor(
    public technologies: string[],
    public tools: string[],
    public design: string[],
    public patterns: string[],
    public softskills: string[],
  ) {
  }
}

export interface SkillsInterface {
  title: string,
  skills?: SkillsListInterface,
}

export class SkillsModel implements SkillsInterface {
  constructor(
    public title: string,
    public skills?: SkillsListInterface,
  ) {
  }
}

export function buildSkillsModel(this: void, apiModel: any): SkillsInterface {
  return new SkillsModel(
    apiModel.title,

    new SkillsListModel(
      apiModel.skillsList.technologies,
      apiModel.skillsList.tools,
      apiModel.skillsList.design,
      apiModel.skillsList.patterns,
      apiModel.skillsList.softskills,
    )
  )
}
