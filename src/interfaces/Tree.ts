import Node from "../Node";

export default interface Tree<T> {
  add(data: T): void;
  remove(data: T): void;
  find(data: T): Node<T>;
  remove(data: T): void;
  height(): number;
}
