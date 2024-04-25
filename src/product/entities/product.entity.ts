import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;
  
  @Column({ length: 10, nullable: false })
  sku: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ length: 250, nullable: false })
  description: string;

  @Column({ length: 500, nullable: false })
  large_description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discount_price: number;

  @Column({ type: 'int', nullable: true })
  discount_percent: number;

  @Column({ default: false })
  is_new: boolean;

  @Column({ length: 250, nullable: true })
  image_link: string;

  @Column({ length: 1000, nullable: true })
  other_images_link: string;

  @CreateDateColumn({ name: 'created_date' })
  create_date: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updated_date: Date;
}
