import { randomUUID } from "crypto";

export abstract class Entity<T> {
  protected _id?: string;
  public props: T;

  constructor(props: T, id?: string) {
    if (!id) {
      this._id = randomUUID();
    }
    Object.assign(this, props);
  }
}
