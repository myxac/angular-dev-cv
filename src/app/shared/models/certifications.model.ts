export interface CertificationsInterface {
  title: string;
  certificationsList?: [{ certification: string, date: string }],
}

export class CertificationsModel implements CertificationsInterface {
  constructor(
    public title: string,
    public certificationsList?: [{ certification: string, date: string }],
  ) {
  }
}

export function buildCertificationsModel(this: void, apiModel: any): CertificationsInterface {
  return new CertificationsModel(
    apiModel.title,
    apiModel.certificationsList,
  )
}
