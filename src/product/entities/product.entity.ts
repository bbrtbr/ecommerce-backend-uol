import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
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

  @Column({ type: 'int', nullable: false })
  categoryId: number;

  @Column({ length: 250, nullable: false })
  description: string;

  @Column({ length: 500, nullable: false })
  largeDescription: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discountPrice: number;

  @Column({ type: 'int', nullable: true })
  discountPercent: number;

  @Column({ default: false })
  isNew: boolean;

  @Column({ length: 250, nullable: true })
  imageLink: string;

  @Column({ length: 1000, nullable: true })
  otherImagesLink: string;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
