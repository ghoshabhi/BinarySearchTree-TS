import Node from "./Node";

interface Tree<T> {
  add(data: T): void;
  remove(data: T): void;
  find(data: T): Node<T>;
  isPresent(data: T): void;
}

export class BST<T> implements Tree<T> {
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

  public printTree() {
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

// const bst = new BST<Person>();
// bst.add({ name: "Abhishek", age: 22 });
// bst.add({ name: "Shivan", age: 18 });

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
