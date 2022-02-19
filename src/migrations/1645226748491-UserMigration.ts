import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1645226748491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO  \`role\` ( \`RoleName\` ) values (\`ROLE_USER\`) `,
    );
    await queryRunner.query(
      `INSERT INTO  \`role\` ( \`RoleName\` ) values (\`ROLE_ADMIN\`) `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP FROM \`role\``);
  }
}
