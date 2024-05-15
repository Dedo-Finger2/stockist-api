import { Entity } from "@/core/domain/Entity";

interface IUnityTypeProps {
  name: string;
  description?: string;
  userId: string;
  createdAt?: Date;
}

export class UnityType extends Entity<IUnityTypeProps> {
  private constructor(props: IUnityTypeProps, id?: string) {
    super(props, id);
  }

  public static create(
    { name, userId, description, createdAt }: IUnityTypeProps,
    id?: string,
  ): UnityType {
    const props: IUnityTypeProps = {
      name,
      userId,
      description,
      createdAt: createdAt ?? new Date(),
    };
    const unityType = new UnityType(props, id);
    return unityType;
  }
}
