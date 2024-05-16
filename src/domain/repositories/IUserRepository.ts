import { ICreateUserRequestDto } from "@/domain/dtos/UserDto";
import { User } from "@/domain/entities/User";

export interface IUserRepository {
  create: (props: ICreateUserRequestDto) => Promise<User>;
}