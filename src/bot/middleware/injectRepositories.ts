import Container from 'typedi';
import { BotContext } from '../context';
import { UserRepository } from '@/repositories/userRepository';

export async function injectRepositories(ctx: BotContext, next: () => Promise<void>) {
  ctx.userRepository = Container.get(UserRepository);
  return next();
}
