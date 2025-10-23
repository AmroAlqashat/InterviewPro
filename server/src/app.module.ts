import { Module } from '@nestjs/common';
import { UserModule } from './app/user/user.module';
import { ProtectedModule } from './app/protected/protected.module';

@Module({
  imports: [UserModule, ProtectedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
