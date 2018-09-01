import Node from "./Node";

class SortedArrayToBST<T> {
  convertToBST(arr: T[], start: number, end: number): Node<T> {
    // Base case
    if (start > end) return null;

    let mid: number = Math.floor((start + end) / 2);
    const root = new Node<T>(arr[mid]);
    root.left = this.convertToBST(arr, start, mid - 1);
    root.right = this.convertToBST(arr, mid + 1, end);
    return root;
  }

  print(root: Node<T>) {
    if (root !== null) {
      this.print(root.left);
      console.log(
        `${
          typeof root.data === "object" ? JSON.stringify(root.data) : root.data
        }`
      );
      this.print(root.right);
    }
  }

  height(node: Node<T>): number {
    let minValue = node.data;
    let height = 0;
    if (node !== null) height++;
    while (node.left) {
      minValue = node.left.data;
      node = node.left;
      height++;
    }
    return height;
  }
}

const util = new SortedArrayToBST<number>();
const sortedArray = [1, 2, 3, 4, 5];
const start = 0;
const end = sortedArray.length - 1;

const root: Node<number> = util.convertToBST(sortedArray, start, end);
console.log(util.height(root));
