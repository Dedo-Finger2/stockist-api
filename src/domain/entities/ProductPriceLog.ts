import { Entity } from "@/core/domain/Entity";

interface IProductPriceLogProps {
  productId: string;
  price: number;
  brandId: string;
  createdAt?: Date;
}

export class ProductPriceLog extends Entity<IProductPriceLogProps> {
  private constructor(props: IProductPriceLogProps, id?: string) {
    super(props, id);
  }

  public static create(
    { brandId, price, productId, createdAt }: IProductPriceLogProps,
    id?: string,
  ): ProductPriceLog {
    const props: IProductPriceLogProps = {
      brandId,
      price,
      productId,
      createdAt: createdAt ?? new Date(),
    };
    const productPriceLog = new ProductPriceLog(props, id);
    return productPriceLog;
  }
}
