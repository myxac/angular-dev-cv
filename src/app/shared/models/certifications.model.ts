export interface CertificationsListInterface {
  certification: string;
  date: string;
  order: number;
}

export interface CertificationsInterface {
  title: string;
  certificationsList?: CertificationsListInterface[];
}

export class CertificationsModel implements CertificationsInterface {
  constructor(
    public title: string,
    public certificationsList?: CertificationsListInterface[]
  ) {}
}

export function buildCertificationsModel(
  this: void,
  apiModel: any
): CertificationsInterface {
  return new CertificationsModel(apiModel.title, apiModel.certificationsList);
}
