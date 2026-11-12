import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { PortalService } from './portal.service.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import type { UserTokenPayload } from '../models/users.model.js';
import { ZodValidationPipe } from '../common/pipes/validation.pipe.js';
import { REGISTER_PORTAL_SCHEMA } from './portal.validation.js';
import type { RegistrasiPortalRequest } from '../models/portal.model.js';

@Controller('/api/portal')
export class PortalController {
  constructor(private readonly portalService: PortalService) {}

  @Get()
  async portal() {
    return this.portalService.portal();
  }

  @Post('/register')
  @UseGuards(JwtAuthGuard)
  // @UsePipes(new ZodValidationPipe(REGISTER_PORTAL_SCHEMA))
  registerPortal(
    @Body() data: RegistrasiPortalRequest,
    @CurrentUser() user: UserTokenPayload,
  ) {
    console.log(data);
    console.log(user);

    return this.portalService.register(user, data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/active')
  async getActivePortal(@CurrentUser() user: UserTokenPayload) {
    return this.portalService.getActivePortal(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/data-form/:portalId')
  getDataFormRegistrasi(@Param('portalId') portalId: string) {
    return this.portalService.getDataFormRegistrasi(portalId);
  }

  @Get('/:id')
  async getDetailPortal(@Param('id') id: string) {
    return this.portalService.getDetailPortal(id);
  }
}
