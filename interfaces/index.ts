export type IUser = {
  username: string,
  email: string,
  password: string,
}

export interface IOAuthAccessToken {
  _id: string,
  access_token: string,
  user: IUser,
}

export interface IResetPassword {
  password: string,
  oldPassword: string,
}

export interface IDashboardFilterValues {
  isByRevelance: boolean,
  price: "highToLow" | "lowToHigh",
  rating: number,
  isNewest: boolean,
  roomType: number,
  rentType: number,
  amenities: number,
  distance: number,
  cost: number,
  isLeftHanded: boolean,
}

export interface ISortByFilter {
  title: string,
  onclick?: () => any,
  isMarked?: boolean,
}