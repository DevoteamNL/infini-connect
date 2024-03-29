import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../users/entities/user.entity';
import { JwtPayload } from './jwt-auth.strategy';

@Injectable()
export class JwtAuthService {
  private readonly logger = new Logger(JwtAuthService.name);

  constructor(private jwtService: JwtService) {}

  login(user: User) {
    const payload: JwtPayload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
