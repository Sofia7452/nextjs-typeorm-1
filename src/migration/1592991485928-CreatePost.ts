import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePost1592991485928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //升级数据库
        return await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    //主键
                    isPrimary: true,
                    //自动创建
                    isGenerated: true,
                    //自增长创建
                    generationStrategy: 'increment'
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'content',
                    //长度更长，varchar长度有限制
                    type: 'text'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //降级数据库
        return await queryRunner.dropTable('posts')
    }

}
