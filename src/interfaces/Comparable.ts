type ComparableReturnType = 0 | -1 | 1;

export default interface Comparable<T> {
  compareTo(otherObj: T): ComparableReturnType;
}
