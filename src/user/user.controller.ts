import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {Response} from 'express'
@Controller('user')
export class UserController {

    constructor(private user:UserService){
        // this.run();
    }

    //controller is an endpoint
    @Post()
    run(@Body() res : Response){

        // let obj = {
        //     // id: ,
        //     // uuid: ,
        //     user_role_id: 5,
        //     email: "unite@gmail.com",
        //     firstname:"Unite",
        //     phone:"0766666666" ,
        //     emailVerified: 0,
        //     password:"222222" ,
        //     profileComplete: 0,
        //     last_login: "1998-01-12",
        //     created_at:"1998-01-12",
        //     isActive: 1
        // }
        console.log("***" + res)
        return this.user.create(res);
    }

   @Get()
   test(){
       return this.user.read();
   }

}
