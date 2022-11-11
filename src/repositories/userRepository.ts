import config from '@/config';
import { User, UserProps } from '@/domain/entities/user';
import { TelegramIdentity } from '@/domain/valueObjects/telegramIdentity';
import { Collection, Db } from 'mongodb';
import { Inject, Service } from 'typedi';
import { Repository } from './repository';

@Service()
export class UserRepository extends Repository {
  private readonly collection: Collection<User> = this.db.collection(config.db.collections.users);

  public getByTelegramIdentity(telegramIdentity) {
    return this.collection.findOne<User>({ 'telegramIdentity.id': telegramIdentity.id });
  }
  
  public async createByTelegramIdentity(telegramIdentity: TelegramIdentity): Promise<User> {
    const inserted = await this.collection.insertOne({ telegramIdentity: telegramIdentity });
    if (inserted.acknowledged) {
      const user = await this.getByTelegramIdentity(telegramIdentity);
      return user;
    }
    throw new Error('Cannot create a user.');
  }
}
