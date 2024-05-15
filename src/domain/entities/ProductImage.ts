import { Entity } from "@/core/domain/Entity";

interface IProductImageProps {
  productId: string;
  brandId: string;
}

export class ProductImage extends Entity<IProductImageProps> {
  private constructor(props: IProductImageProps, id?: string) {
    super(props, id);
  }

  public static create(
    { productId, brandId }: IProductImageProps,
    id?: string,
  ): ProductImage {
    const props: IProductImageProps = {
      brandId,
      productId,
    };
    const productImage = new ProductImage(props, id);
    return productImage;
  }
}
