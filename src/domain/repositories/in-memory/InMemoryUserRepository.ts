import { ICreateUserRequestDto } from "@/domain/dtos/UserDto";
import { User } from "@/domain/entities/User";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
  async create ({ name, email }: ICreateUserRequestDto): Promise<User> {
    const user = User.create({ name, email });
    return user;
  }
}