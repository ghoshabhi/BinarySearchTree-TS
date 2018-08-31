import Node from "./Node";
import Tree from "./interfaces/Tree";
import Comparable from "./interfaces/Comparable";
import "./globals";

import Person from "./Person";

export class BST<T extends Comparable<T>> implements Tree<T> {
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

  remove(data: T): void {}

  find(data: T): Node<T> {
    let searchResult = this.search(this._root, data);
    if (searchResult !== null && searchResult.data !== null) {
      console.log(`Found: ${searchResult.data}`);
    } else {
      console.log(`"${data}" not found in the given tree`);
    }
    return searchResult;
  }

  isPresent(data: T): void {}

  printTree() {
    this.printInorder(this._root);
  }

  private insert(node: Node<T>, data: T): Node<T> {
    if (node === null) {
      node = new Node(data);
      return node;
    }
    if (data < node.data) {
      node.left = this.insert(node.left, data);
    } else if (data > node.data) {
      node.right = this.insert(node.right, data);
    }
    return node;
  }

  private search(root: Node<T>, data: T): Node<T> {
    if (root === null || root.data === data) return root;

    if (root.data < data) return this.search(root.right, data);

    if (root.data > data) return this.search(root.left, data);
  }

  private printInorder(root: Node<T>) {
    if (root !== null) {
      this.printInorder(root.left);
      // console.log(root.data);
      console.log(
        `${
          typeof root.data === "object" ? JSON.stringify(root.data) : root.data
        }`
      );
      this.printInorder(root.right);
    }
  }
}

// =========================================
// const bst = new BST<Person>();
// const p1 = new Person("Person 1", 22);
// const p2 = new Person("Person 2", 28);
// const p3 = new Person("Person 3", 26);
// const p4 = new Person("Person 4", 24);
// bst.add(p1);
// bst.add(p2);
// bst.add(p3);
// bst.add(p4);

// bst.find(p3);
// =========================================

// works fine for primitive types
const bst = new BST<number>();
bst.add(50);
bst.add(30);
bst.add(20);
bst.add(40);
bst.add(70);
bst.add(60);
bst.add(80);
console.log("====================================\n");
console.log(bst.printTree());
console.log("====================================\n");
console.log(bst.find(70));
console.log("====================================");
