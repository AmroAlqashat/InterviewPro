import { Module } from '@nestjs/common';
import { ProtectedService } from './protected.service';
import { ProtectedController } from './protected.controller';

@Module({
  controllers: [ProtectedController],
  providers: [ProtectedService],
})
export class ProtectedModule {}
