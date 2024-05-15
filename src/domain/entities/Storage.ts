import { Entity } from "@/core/domain/Entity";

interface IStorageProps {
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Storage extends Entity<IStorageProps> {
  private constructor(props: IStorageProps, id?: string) {
    super(props, id);
  }

  public static create(
    { userId, createdAt, updatedAt }: IStorageProps,
    id?: string,
  ): Storage {
    const props: IStorageProps = {
      userId,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? new Date(),
    };
    const storage = new Storage(props, id);
    return storage;
  }
}
