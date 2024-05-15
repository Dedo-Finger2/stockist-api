import { Entity } from "@/core/domain/Entity";

interface IProductProps {
  name: string;
  description?: string;
  productTypeId: string;
  unitTypeId: string;
  userId: string;
  minQuantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product extends Entity<IProductProps> {
  private constructor(props: IProductProps, id?: string) {
    super(props, id);
  }

  public static create(
    {
      name,
      description,
      userId,
      minQuantity,
      productTypeId,
      unitTypeId,
      createdAt,
      updatedAt,
    }: IProductProps,
    id?: string,
  ): Product {
    const props: IProductProps = {
      name,
      minQuantity,
      productTypeId,
      unitTypeId,
      userId,
      description,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? new Date(),
    };
    const product = new Product(props, id);
    return product;
  }
}
