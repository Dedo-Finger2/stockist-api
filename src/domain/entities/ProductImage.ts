import { Entity } from "@/core/domain/Entity";

interface IProductImageProps {
  productId: string;
  brandId: string;
  createdAt?: Date;
}

export class ProductImage extends Entity<IProductImageProps> {
  private constructor(props: IProductImageProps, id?: string) {
    super(props, id);
  }

  public static create(
    { productId, brandId, createdAt }: IProductImageProps,
    id?: string,
  ): ProductImage {
    const props: IProductImageProps = {
      brandId,
      productId,
      createdAt: createdAt ?? new Date(),
    };
    const productImage = new ProductImage(props, id);
    return productImage;
  }
}
