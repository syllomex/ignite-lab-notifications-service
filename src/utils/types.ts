export type Replace<T, U extends T | Record<string, unknown>> = Omit<
  T,
  keyof U
> &
  U

export type MockProxy<T> = Record<keyof T, jest.Mock>
