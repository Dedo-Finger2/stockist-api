import { Entity } from "@/core/domain/Entity";

interface IProductTypeProps {
  name: string;
  description?: string;
  userId: string;
  createdAt?: Date;
}

export class ProductType extends Entity<IProductTypeProps> {
  private constructor(props: IProductTypeProps, id?: string) {
    super(props, id);
  }

  public static create(
    { name, description, userId, createdAt }: IProductTypeProps,
    id?: string,
  ): ProductType {
    const props: IProductTypeProps = {
      name,
      description,
      userId,
      createdAt: createdAt ?? new Date(),
    };
    const productType = new ProductType(props, id);
    return productType;
  }
}
