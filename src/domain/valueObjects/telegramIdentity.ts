import { User } from 'telegraf/typings/core/types/typegram';
import { ValueObject } from './valueObject';

export interface TelegramIdentityProps {
  id: number;
  username?: string;
  firstName: string;
}

export class TelegramIdentity extends ValueObject<TelegramIdentityProps> implements TelegramIdentityProps {
  private constructor(protected props: TelegramIdentityProps) {
    super(props);
    this.id = props.id;
    this.username = props.username;
    this.firstName = props.firstName;
  }

  public readonly id: number;
  public readonly username?: string;
  public readonly firstName: string;

  public static fromTelegramUser(user: User) {
    return new TelegramIdentity({
      id: user.id,
      username: user.username,
      firstName: user.first_name,
    });
  }
}
