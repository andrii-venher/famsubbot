import { ObjectId } from 'mongodb';
import { TelegramIdentity } from '../valueObjects/telegramIdentity';
import { Entity, Props } from './entity';

export interface UserProps {
  telegramIdentity: TelegramIdentity;
}

interface UserPropsWithId extends Props, UserProps {}

export class User extends Entity<UserPropsWithId> {
  get telegramIdentity(): TelegramIdentity {
    return this.props.telegramIdentity;
  }

  private constructor(props: UserPropsWithId) {
    super(props);
  }

  public static create(props: UserProps) {
    return new User({
      ...props,
      _id: new ObjectId(),
    });
  }
}
