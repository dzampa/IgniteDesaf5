import {MigrationInterface, QueryRunner} from "typeorm";

export class Genresxgames1617394755870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        'CREATE TABLE "genres_games" ("gamesId" uuid NOT NULL, "genresId" uuid NOT NULL, CONSTRAINT "PK_cd4067d574477fd5c7693be1234" PRIMARY KEY ("gamesId", "genresId"))',
      );
      await queryRunner.query(
        'CREATE INDEX "IDX_e5263d029d8644de829aae7c15" ON "genres_games" ("gamesId") ',
      );
      await queryRunner.query(
        'CREATE INDEX "IDX_934b0d8f9d0084c97d387a4d32" ON "genres_games" ("genresId") ',
      );
      await queryRunner.query(
        'ALTER TABLE "genres_games" ADD CONSTRAINT "FK_e5263d029d8644de829aae7c15a" FOREIGN KEY ("gamesId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
      );
      await queryRunner.query(
        'ALTER TABLE "genres_games" ADD CONSTRAINT "FK_934b0d8f9d0084c97d387a4d32d" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        'ALTER TABLE "genres_games" DROP CONSTRAINT "FK_934b0d8f9d0084c97d387a4d32d"',
      );
      await queryRunner.query(
        'ALTER TABLE "genres_games" DROP CONSTRAINT "FK_e5263d029d8644de829aae7c15a"',
      );
      await queryRunner.query('DROP INDEX "IDX_934b0d8f9d0084c97d387a4d32"');
      await queryRunner.query('DROP INDEX "IDX_e5263d029d8644de829aae7c15"');
      await queryRunner.query('DROP TABLE "genres_games"');
    }

}
