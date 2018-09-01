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

// =========================================
const bst = new BST<Person>();
const p1 = new Person("Person 1", 22);
const p2 = new Person("Person 2", 28);
const p3 = new Person("Person 3", 26);
const p4 = new Person("Person 4", 24);
bst.add(p1);
bst.add(p2);
bst.add(p3);
bst.add(p4);

console.log("====================================");
console.log(bst.printTree());
console.log("====================================");
console.log("====================================");
console.log(bst.find(p3));
console.log("====================================");

// =========================================

// works fine for primitive types
// const bst = new BST<number>();
// bst.add(50);
// bst.add(30);
// bst.add(20);
// bst.add(40);
// bst.add(70);
// bst.add(60);
// bst.add(80);
// console.log("====================================\n");
// console.log(bst.printTree());
// console.log("====================================\n");
// console.log(bst.find(70));
// console.log("====================================");
