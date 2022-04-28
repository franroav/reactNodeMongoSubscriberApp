class Subs {
  private email: string;
  private name: string;
  private gender: string;
  private address: string;
  constructor(email: string, name: string, gender: string, address: string) {
    this.email = email;
    this.name = name;
    this.gender = gender;
    this.address = address;
  }
}

export class Subscriber extends Subs {
  constructor(email: string, name: string, gender: string, address: string) {
    super(email, name, gender, address);
  }
}
