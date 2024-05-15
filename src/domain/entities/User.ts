import { Entity } from "@/core/domain/Entity";

interface IUserProps {
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User extends Entity<IUserProps> {
  private constructor(props: IUserProps, id?: string) {
    super(props, id);
  }

  public static create(
    { name, email, createdAt, updatedAt }: IUserProps,
    id?: string,
  ): User {
    const props: IUserProps = {
      name,
      email,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? new Date(),
    };
    const user = new User(props, id);
    return user;
  }
}
