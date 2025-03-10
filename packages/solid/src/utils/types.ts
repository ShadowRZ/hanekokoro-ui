// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type WithClass<T extends {} = {}> = T & {
  class?: string;
};
