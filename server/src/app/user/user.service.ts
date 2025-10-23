import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from 'generated/prisma';
import { ConflictException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class UserService {
  private prisma = new PrismaClient();
  private logger = new Logger(UserService.name);

  async signup(signupDto: SignupDto) {
    const { fullName, email, password } = signupDto;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await this.prisma.users.create({
        data: {
          name: fullName,
          email,
          password: hashedPassword,
        },
      });
      return { message: 'User signed up successfully' };
    } catch (error: any) {
      this.logger.error('Error during signup', 'code' in error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          throw new ConflictException({
            message: 'Email already exists',
            errorType: 'email',
          });
        } else if (error.code == 'P2000') {
          throw new ConflictException({
            message: 'Email is too long',
            errorType: 'email',
          });
        }
      }
      throw Error('An error occurred.');
    }
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.users.findUniqueOrThrow({
      where: { email },
    })
    .catch((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code === 'P2025') {
                throw new NotFoundException({
                    message: 'Email does not exist',
                    errorType: 'email',
                });
            }
        }
      throw error
    });

    const match = await bcrypt.compare(password, user.password)
    .catch((error) => {
        this.logger.error('Error during password comparison', error);
        throw new Error('An error occurred.');
    });
    if (!match) {
      throw new NotFoundException({
        message: 'Incorrect password',
        errorType: 'password',
      });
    }

    const token = jwt.sign(
      { userId: user.id }, 
      process.env.JWTSECRET as string, 
      { expiresIn: '1h' }
    );

    return { message: 'User logged in successfully', token };
  }
}
