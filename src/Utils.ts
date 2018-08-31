type ComparableReturnType = 0 | -1 | 1;

interface Comparable<T> {
  compareTo(otherObj: T): ComparableReturnType;
}

// interface IComparable<T> extends Comparable<T> {}

// interface ISuper<T extends IComparable<T>> {}

export function compareTo<T>(o1: T, o2: T): ComparableReturnType {
  return 0;
}
