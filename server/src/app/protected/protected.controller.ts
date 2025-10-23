import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ProtectedService } from './protected.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('protected')
export class ProtectedController {
  constructor(private readonly protectedService: ProtectedService) {}
  
  @UseGuards(JwtAuthGuard)  // <-- This protects the route
  @Get('dashboard')
  getDashboard(@Request() req) {
    // req.user contains { userId, email } from the JWT token
    return {
      message: 'Welcome to dashboard',
      user: req.user
    };
  }

}
