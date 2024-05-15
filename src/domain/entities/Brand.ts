import { Entity } from "@/core/domain/Entity";

interface IBrandProps {
  name: string;
  description?: string;
  image?: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Brand extends Entity<IBrandProps> {
  private constructor(props: IBrandProps, id?: string) {
    super(props, id);
  }

  public static create(
    { name, userId, description, image, createdAt, updatedAt }: IBrandProps,
    id?: string,
  ): Brand {
    const props: IBrandProps = {
      name,
      userId,
      description,
      image,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? new Date(),
    };
    const brand = new Brand(props, id);
    return brand;
  }
}
