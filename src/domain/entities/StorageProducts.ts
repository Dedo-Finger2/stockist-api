import { Entity } from "@/core/domain/Entity";

export enum StorageProductsStatus {
  fine = "Fine",
  inRisk = "In-Risk",
  missing = "Missing",
  inStock = "InStock",
}

interface IStorageProductsProps {
  storageId: string;
  productId: string;
  brandId: string;
  quantity: number;
  status: StorageProductsStatus;
  createdAt?: Date;
}

export class StorageProduct extends Entity<IStorageProductsProps> {
  private constructor(props: IStorageProductsProps, id?: string) {
    super(props, id);
  }

  public static create(
    {
      brandId,
      productId,
      quantity,
      status,
      storageId,
      createdAt,
    }: IStorageProductsProps,
    id?: string,
  ): StorageProduct {
    const props: IStorageProductsProps = {
      brandId,
      productId,
      quantity,
      status: status ?? StorageProductsStatus.inStock,
      storageId,
      createdAt,
    };
    const storageProduct = new StorageProduct(props, id);
    return storageProduct;
  }
}
