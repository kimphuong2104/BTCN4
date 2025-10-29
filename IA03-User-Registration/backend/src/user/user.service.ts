import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async register(email: string, password: string) {
    const exist = await this.prisma.user.findUnique({ where: { email } });
    if (exist) throw new BadRequestException('Email already registered');

    const rounds = Number(this.config.get('BCRYPT_ROUNDS') ?? 10);
    const hash = await bcrypt.hash(password, rounds);

    const user = await this.prisma.user.create({
      data: { email, password: hash },
      select: { id: true, email: true, createdAt: true },
    });

    return { message: 'Register success', user };
  }
}
