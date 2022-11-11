import { Db } from 'mongodb';
import { Inject } from 'typedi';

export class Repository {
  constructor(@Inject() protected readonly db: Db) {}
}
