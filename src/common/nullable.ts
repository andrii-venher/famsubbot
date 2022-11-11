export interface Nullable<T> {
  null: boolean;
  data: T | null;
}
