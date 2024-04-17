import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductTable1713302876185 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE product (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                sku VARCHAR(10) NOT NULL,
                category_id INT NOT NULL,
                description VARCHAR(250) NOT NULL,
                large_description VARCHAR(500) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                discount_price DECIMAL(10, 2),
                discount_percent INT,
                is_new BOOLEAN DEFAULT FALSE,
                image_link VARCHAR(250),
                other_images_link VARCHAR(1000),
                created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (category_id) REFERENCES category(id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE product`);
    }
}
