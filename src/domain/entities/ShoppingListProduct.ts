import { Entity } from "@/core/domain/Entity";

interface IShoppingListProductProps {
  shoppingListId: string;
  productId: string;
  brandId?: string;
  pricePaid?: number;
  quantityBought?: number;
}

export class ShoppingListProduct extends Entity<IShoppingListProductProps> {
  private constructor(props: IShoppingListProductProps, id?: string) {
    super(props, id);
  }

  public static create(
    {
      productId,
      shoppingListId,
      brandId,
      pricePaid,
      quantityBought,
    }: IShoppingListProductProps,
    id?: string,
  ): ShoppingListProduct {
    const props: IShoppingListProductProps = {
      productId,
      shoppingListId,
      brandId,
      pricePaid,
      quantityBought,
    };
    const shoppingListProduct = new ShoppingListProduct(props, id);
    return shoppingListProduct;
  }
}
