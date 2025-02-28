import { LinkedList } from "../LinkedList";

export class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  IsEmpty() {
    return !this.linkedList.head;
  }

  Peek() {
    if (this.IsEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  Push(value) {
    this.linkedList.Prepend(value);
  }

  Pop() {
    const removedHead = this.linkedList.head;
    const removed = this.linkedList.Delete(removedHead?.value);

    return removed ? removedHead.value : null;
  }

  ToArray() {
    const items = this.linkedList.Traverse();
    const arr = [];

    while (items.hasNext()) {
      arr.push(items.next().value);
    }

    return arr;
  }
}
