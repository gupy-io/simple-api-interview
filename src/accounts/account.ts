interface AccountParams {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export class Account {
  public id?: number;
  public name: string;
  public email: string;
  public password: string;

  constructor({ id, name, email, password }: AccountParams) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
