import Node from "../Node";
import Comparable from "./Comparable";

export default interface Tree<T extends Comparable<T>> {
  add(data: T): void;
  remove(data: T): void;
  find(data: T): Node<T>;
  remove(data: T): void;
  height(): number;
}
