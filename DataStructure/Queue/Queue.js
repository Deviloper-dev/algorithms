import { LinkedList } from "../LinkedList";

export class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  IsEmpty() {
    return !this.linkedList.head;
  }

  Peek() {
    if (!this.IsEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  Enqueue(value) {
    this.linkedList.Add(value);
  }

  Dequeue() {
    const removeHead = this.linkedList.head;
    const removed = this.linkedList.Delete(removeHead?.value);

    return removed ? removeHead.value : null;
  }

  toString() {
    return this.linkedList.toString();
  }
}
