import { describe, it, expect } from "vitest";
import { RegisterUser } from "./RegisterUser";
import { InMemoryUserRepository } from "@/domain/repositories/in-memory/InMemoryUserRepository";
import { ICreateUserRequestDto } from "@/domain/dtos/UserDto";
import { User } from "@/domain/entities/User";

type SutResponse = {
  sut: RegisterUser;
  userRepository: InMemoryUserRepository,
};

const makeSut = (): SutResponse => {
  const userRepository = new InMemoryUserRepository();
  const sut = new RegisterUser(userRepository);
  return {
    sut,
    userRepository,
  };
};

describe("RegisterUser use case", () => {
  it("should register a new user", async () => {
    const { sut } = makeSut();
    const userData: ICreateUserRequestDto = {
      name: "fake_name",
      email: "fake_email",
    };

    const user = await sut.perform(userData);

    expect(user).toBeInstanceOf(User);
  });
});