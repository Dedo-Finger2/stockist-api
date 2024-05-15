import { Entity } from "@/core/domain/Entity";

interface IShoppingListProps {
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
}

export class ShoppingList extends Entity<IShoppingListProps> {
  private constructor(props: IShoppingListProps, id?: string) {
    super(props, id);
  }

  public static create(
    { userId, completedAt, createdAt, updatedAt }: IShoppingListProps,
    id?: string,
  ): ShoppingList {
    const props: IShoppingListProps = {
      userId,
      completedAt,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? new Date(),
    };
    const shoppingList = new ShoppingList(props, id);
    return shoppingList;
  }
}
