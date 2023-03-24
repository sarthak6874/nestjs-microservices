export class CreateUserLogsEvent {
  constructor(
    public readonly userId: string,
    public readonly activity: string
  ) {}
}
