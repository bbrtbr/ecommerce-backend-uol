import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 250, nullable: true })
  image_link: string;

  @CreateDateColumn({ name: 'created_date' })
  created_date: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updated_date: Date;
}
