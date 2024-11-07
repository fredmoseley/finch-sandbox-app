export interface SandboxCreateResponse {
    access_token: string
    payroll_provider_id: string,
    company_id: string
    sandbox_time: string
  }
  export interface SandboxCreateRequest {
    provider_id: string,
    products: string[],
    emplyoee_size? : number
  }

  export interface SusccessResponse {
    success: boolean
  }