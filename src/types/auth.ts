export type ProviderOptions = 'github'
export type Providers = {
  [key in ProviderOptions]: {
    id: ProviderOptions,
    name: string,
    type: 'oauth',
    signinUrl: string,
    callbackUrl: string,
  }
}
