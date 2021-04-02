import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdersxUsers1617394768980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        'CREATE TABLE "orders_users" ("usersId" uuid NOT NULL, "ordersId" uuid NOT NULL, CONSTRAINT "PK_cd4067d574477fd5c7693be4879" PRIMARY KEY ("usersId", "ordersId"))',
      );
      await queryRunner.query(
        'CREATE INDEX "IDX_e5263d029d8644de829d5e7c15" ON "orders_users" ("usersId") ',
      );
      await queryRunner.query(
        'CREATE INDEX "IDX_934b0d8f9d0084c97d3s3a4d32" ON "orders_users" ("ordersId") ',
      );
      await queryRunner.query(
        'ALTER TABLE "orders_users" ADD CONSTRAINT "FK_e5263d029d8644de829d5e7c15a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
      );
      await queryRunner.query(
        'ALTER TABLE "orders_users" ADD CONSTRAINT "FK_934b0d8f9d0084c97d3s3a4d32d" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        'ALTER TABLE "orders_users" DROP CONSTRAINT "FK_934b0d8f9d0084c97d3s3a4d32d"',
      );
      await queryRunner.query(
        'ALTER TABLE "orders_users" DROP CONSTRAINT "FK_e5263d029d8644de829d5e7c15a"',
      );
      await queryRunner.query('DROP INDEX "IDX_934b0d8f9d0084c97d3s3a4d32"');
      await queryRunner.query('DROP INDEX "IDX_e5263d029d8644de829d5e7c15"');
      await queryRunner.query('DROP TABLE "orders_users"');
    }

}
