import { ICreateUserRequestDto } from "../dtos/UserDto";
import { InMemoryUserRepository } from "../repositories/in-memory/InMemoryUserRepository";

export class RegisterUser {
  private readonly userRepository: InMemoryUserRepository;

  constructor(userRepository: InMemoryUserRepository) {
    this.userRepository = userRepository;
  }

  async perform({ email, name }: ICreateUserRequestDto) {
    const user = await this.userRepository.create({ name, email });
    return user;
  }
}