import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsString } from 'class-validator';

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    fullName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(35)
    password: string;
}