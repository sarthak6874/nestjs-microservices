export class CreateUserEvent {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}
}
