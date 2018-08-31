export default class Node<T> {
  private _data: T;
  private _left: Node<T>;
  private _right: Node<T>;

  constructor(data: T, left: Node<T> = null, right: Node<T> = null) {
    this._data = data;
    this._left = left;
    this._right = right;
  }

  get data() {
    return this._data;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  set data(newData: T) {
    this._data = newData;
  }

  set left(newLeft: Node<T>) {
    this._left = newLeft;
  }

  set right(newRight: Node<T>) {
    this._right = newRight;
  }
}
