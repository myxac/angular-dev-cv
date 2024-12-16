export interface SocialMediaLinksInterface {
  github?: string;
  linkedin?: string;
  xing?: string;
}

export class SocialMediaLinksModel implements SocialMediaLinksInterface {
  constructor(
    public github?: string,
    public linkedin?: string,
    public xing?: string
  ) {}
}

export function builSocialMediaLinksModel(
  this: void,
  apiModel: any
): SocialMediaLinksInterface {
  return new SocialMediaLinksModel(
    apiModel.github,
    apiModel.linkedin,
    apiModel.xing
  );
}
