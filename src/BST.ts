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

  remove(data: T) {
    this.root = this.removeAt(this._root, data);
  }

  height(): number {
    let minValue = this._root.data;
    let height = 0;
    if (this._root !== null) height++;
    while (this._root.left) {
      minValue = this._root.left.data;
      this._root = this._root.left;
      height++;
    }
    return height;
  }

  find(data: T): Node<T> {
    let searchResult = this.search(this._root, data);
    if (searchResult !== null && searchResult.data !== null) {
      const { data } = searchResult;
      console.log(
        `Found: ${typeof data === "object" ? JSON.stringify(data) : data}`
      );
    } else {
      console.log(`"${data}" not found in the given tree`);
    }
    return searchResult;
  }

  printTree() {
    this.printInorder(this._root);
  }

  private isEmpty(): boolean {
    return this._root === null;
  }

  private findMinValue(root: Node<T>): T {
    let minValue = root.data;
    while (root.left) {
      minValue = root.left.data;
      root = root.left;
    }
    return minValue;
  }

  private removeAt(root: Node<T>, data: T): Node<T> {
    if (this.isEmpty()) return root;
    // Search data which is to be deleted
    if (data.compareTo(root.data) < 0) {
      root.left = this.removeAt(root.left, data);
    } else if (data.compareTo(root.data) > 0) {
      root.right = this.removeAt(root.right, data);
    } else if (data.compareTo(root.data) === 0) {
      // data === node.data here
      // -------------------------
      // node with only one child or no child
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      // Get the inorder successor (smallest in the right subtree)
      root.data = this.findMinValue(root.right);
      // Delete the inorder successor
      root.right = this.removeAt(root.right, root.data);
    }
    return root;
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
