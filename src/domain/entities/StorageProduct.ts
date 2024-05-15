import { Entity } from "@/core/domain/Entity";

export enum StorageProductStatus {
  fine = "Fine",
  inRisk = "In-Risk",
  missing = "Missing",
  inStock = "InStock",
}

interface IStorageProductProps {
  storageId: string;
  productId: string;
  brandId: string;
  quantity: number;
  status: StorageProductStatus;
  createdAt?: Date;
}

export class StorageProduct extends Entity<IStorageProductProps> {
  private constructor(props: IStorageProductProps, id?: string) {
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
    }: IStorageProductProps,
    id?: string,
  ): StorageProduct {
    const props: IStorageProductProps = {
      brandId,
      productId,
      quantity,
      status: status ?? StorageProductStatus.inStock,
      storageId,
      createdAt,
    };
    const storageProduct = new StorageProduct(props, id);
    return storageProduct;
  }
}
