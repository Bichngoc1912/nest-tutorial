import { Expose } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDto } from 'src/shared/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose() // nhung field can dua ra ngoai
  username: string;

  @IsNotEmpty()
  @Length(10, 20)
  @Expose()
  password: string;
}
