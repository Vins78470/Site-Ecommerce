// person.model.ts
export class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public password: string,
      public confirmPassword: string
    ) {}
  }
  