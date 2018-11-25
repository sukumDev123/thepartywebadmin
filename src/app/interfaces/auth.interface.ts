export interface AuthInterFace {
  email: string
  password: string
}
export interface AuthCallBack {
  data: { email: string; displayName: string; roles: string; success: boolean }
  message: string
  status: number
}
