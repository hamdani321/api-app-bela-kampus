import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('/api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  users() {
    return this.usersService.users();
  }
}
