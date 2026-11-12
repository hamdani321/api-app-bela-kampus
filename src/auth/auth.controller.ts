import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from './auth.dto.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { CurrentUser } from './decorators/current-user.decorator.js';
import type { Response } from 'express';

@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const resultLogin = await this.authService.login(body);
    response.cookie('access_token', resultLogin.access_token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 1000,
    });
    // response.json(resultLogin);
    return resultLogin;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  getCurrentUser(@CurrentUser() user: any) {
    return user;
  }
}
