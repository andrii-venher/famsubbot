import { ObjectId } from 'mongodb';

export interface Props {
  _id: ObjectId;
}

export abstract class Entity<T extends Props> {
  protected readonly _id: ObjectId;
  protected props: T;

  constructor(props: T) {
    this.props = props;
    this._id = props._id;
  }
}
