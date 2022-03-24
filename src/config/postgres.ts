import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "Letsdoit!",
    database: "CRUD",
    entities: [__dirname + '/../entities/*/.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
    
  }