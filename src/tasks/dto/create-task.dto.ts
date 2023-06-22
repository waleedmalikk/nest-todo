/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
@Exclude()
export class CreateTaskDTO {
  uuid:string

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MinLength(5, { message: 'Title must be at least 5 characters long' })
  @MaxLength(20, { message: 'Title cannot exceed 20 characters' })
  title: string

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MinLength(5, { message: 'Description must be at least 5 characters long' })
  @MaxLength(50, { message: 'Description cannot exceed 50 characters' })
  description: string

  @Expose()
  @IsBoolean()
  @IsNotEmpty()
  reminder: boolean
}
