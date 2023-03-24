import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserLogs {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    name: 'user_id',
    nullable: false,
    default: '',
  })
  userId: string;

  @Column({
    nullable: false,
    default: '',
  })
  activity: string;
}
