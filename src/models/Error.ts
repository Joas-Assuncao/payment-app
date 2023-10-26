export interface IErrorJson {
  errors: IError[];
}

export interface IError {
  code: string;
  description: string;
}
