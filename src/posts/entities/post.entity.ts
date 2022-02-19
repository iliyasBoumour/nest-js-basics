import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column()
  readonly title: string;
  @Column()
  readonly image: string;
  @Column()
  readonly description: string;
}
