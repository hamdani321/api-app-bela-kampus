import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';
import { LoginDto } from './auth.dto.js';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserTokenPayload } from '../models/users.model.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaClientService: PrismaClientService,
    // private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async login(body: LoginDto) {
    const user = await this.prismaClientService.users.findFirst({
      where: {
        email: body.email,
      },
      include: {
        roles: true,
        mahasiswa: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password!');
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password!');
    }

    const tokenPayload: UserTokenPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
      mahasiswa: user.mahasiswa,
      roles: user.roles,
    };
    console.log(tokenPayload);

    const token = await this.jwtService.signAsync(tokenPayload);

    return {
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      access_token: token,
      token_type: 'Bearer',
    };
  }
}
