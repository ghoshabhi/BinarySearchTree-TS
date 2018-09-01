export default interface Comparable<T> {
  compareTo(otherObj: T): number;
}
