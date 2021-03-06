import { BaseEntity, Column, Entity, Generated, OneToOne, PrimaryGeneratedColumn } from "typeorm"; // this file creates a structure (table) for you in the database(pg)

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;
    @Column()
    @Generated("uuid")
    uuid: string;
    @Column({
        type: 'varchar'
    })
    user_role_id: string;

    @Column({
        type: 'varchar', unique  : true
    })
    email: string;

    @Column({
        type: 'varchar'
    })
    firstname: string;

    @Column({
        type: 'varchar'
    })
    phone: string;

    @Column({
        type: 'bit'
    })
    emailVerified: string;

    @Column({
        type: 'varchar'
    })
    password: string;
    @Column({
        type: 'bit'
    })
    profileComplete: string;
    @Column({
        type: 'date'
    })
    last_login: Date;
    @Column({
        type: 'date'
    })
    created_at: Date;
    @Column({
        type: 'bit'
    })
    isActive: string;

    // @OneToOne(() => UserRole, userRole => userRole.user_role_id) // specify inverse side as a second parameter
    // userRole: UserRole;
}

//create a repo after creating the above database structure(table), Repository is being used to create ,save, get, post(CRUD is being done by the repo)