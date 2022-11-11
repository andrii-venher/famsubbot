import { User } from '@/domain/entities/user';
import { UserRepository } from '@/repositories/userRepository';
import { Context } from 'telegraf';

export interface BotContext extends Context {
  userRepository: UserRepository;

  user: User;
}
