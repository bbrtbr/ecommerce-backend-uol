import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(
    page: number = 1,
    pageSize: number = 10,
    orderBy: string = 'default',
    orderDirection: 'ASC' | 'DESC' = 'ASC',
  ): Promise<Product[]> {
    const skip = (page - 1) * pageSize;
    let orderOptions = {};

    if (orderBy != 'default') {
      orderOptions = { [orderBy]: orderDirection };
      return await this.productRepository.find({
        skip,
        take: pageSize,
        order: orderOptions,
      });
    } else {
      return await this.productRepository.find({
        skip,
        take: pageSize,
      });
    }
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id: id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
