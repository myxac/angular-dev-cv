import {
  buildCertificationsModel,
  buildEducationModel,
  buildLanguagesModel,
  buildPersonalInfoModel,
  buildPersonalInterestsModel,
  buildSkillsModel,
  buildWorkExperienceModel,
  CertificationsInterface,
  EducationInterface,
  LanguagesInterface,
  PersonalInfoInterface,
  PersonalInterestsInterface,
  SkillsInterface,
  WorkExperienceInterface,
} from "../internals";

export type ApiModelType =
  PersonalInfoInterface
  | PersonalInterestsInterface
  | LanguagesInterface
  | WorkExperienceInterface
  | EducationInterface
  | SkillsInterface
  | CertificationsInterface;

export function buildApiModel(component: string, apiResult: any): ApiModelType {
  switch (component) {
    case 'personalInfo':
      return buildPersonalInfoModel(apiResult);
    case 'personalInterests':
      return buildPersonalInterestsModel(apiResult);
    case 'languages':
      return buildLanguagesModel(apiResult);
    case 'experience':
      return buildWorkExperienceModel(apiResult);
    case 'education':
      return buildEducationModel(apiResult);
    case 'skills':
      return buildSkillsModel(apiResult);
    case 'certifications':
      return buildCertificationsModel(apiResult);

    default:
      return buildPersonalInfoModel(apiResult);
  }
}
