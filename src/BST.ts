import Node from "./Node";
import Tree from "./interfaces/Tree";
import Comparable from "./interfaces/Comparable";
import "./globals";

export default class BST<T extends Comparable<T>> implements Tree<T> {
  private _root: Node<T>;

  constructor() {
    this._root = null;
  }

  get root() {
    return this._root;
  }

  set root(newRoot: Node<T>) {
    this._root = newRoot;
  }

  add(data: T): void {
    this._root = this.insert(this._root, data);
  }

  remove(data: T): boolean {
    return false;
  }

  find(data: T): Node<T> {
    let searchResult = this.search(this._root, data);
    if (searchResult !== null && searchResult.data !== null) {
      console.log(`Found: ${searchResult.data}`);
    } else {
      console.log(`"${data}" not found in the given tree`);
    }
    return searchResult;
  }

  printTree() {
    this.printInorder(this._root);
  }

  private insert(node: Node<T>, data: T): Node<T> {
    if (node === null) {
      node = new Node(data);
      return node;
    }

    if (data.compareTo(node.data) === 0) return node;
    if (data.compareTo(node.data) < 0) {
      node.left = this.insert(node.left, data);
    } else if (data.compareTo(node.data) > 0) {
      node.right = this.insert(node.right, data);
    }
    return node;
  }

  private search(node: Node<T>, data: T): Node<T> {
    if (node === null) return null;
    if (node.data === data) return node;
    if (data.compareTo(node.data) < 0) {
      if (node.left.data === null) return node;
      else return this.search(node.left, data);
    }
    if (data.compareTo(node.data) > 0) {
      if (node.right.data === null) return node;
      else return this.search(node.right, data);
    }
  }

  private printInorder(node: Node<T>) {
    if (node !== null) {
      this.printInorder(node.left);
      // console.log(node.data);
      console.log(
        `${
          typeof node.data === "object" ? JSON.stringify(node.data) : node.data
        }`
      );
      this.printInorder(node.right);
    }
  }
}
