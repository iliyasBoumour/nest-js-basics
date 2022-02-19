import { User } from './user.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';
export enum RoleEnum {
  ROLE_USER = 'ROLE_USER',
  ROLE_ADMIN = 'ROLE_ADMIN',
}
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.ROLE_USER,
  })
  RoleName: RoleEnum;
  @ManyToMany(() => User)
  users: User[];
}
