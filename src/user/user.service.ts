import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './person.repository';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserRepository) private userRepository: UserRepository){

    }
  async create(user){
  return await  this.userRepository.save(user);
}
async read(){
    return await this.userRepository.find({select: ['id','email','emailVerified','firstname','isActive','password','phone','profileComplete','last_login']});
}
    
}
