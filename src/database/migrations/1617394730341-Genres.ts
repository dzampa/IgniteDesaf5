import {MigrationInterface, QueryRunner} from "typeorm";

export class Genres1617394730341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        'CREATE TABLE "genres" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "genres" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c9b16b62917b5595af982d61234" PRIMARY KEY ("id"))',
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "genres"');
    }

}
