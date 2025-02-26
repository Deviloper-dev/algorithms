import { Node } from "./Node";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  Add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  Prepend(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  Contains(value) {
    let node = this.head;

    while (node && node.value !== value) {
      node = node.next;
    }

    if (!node) {
      return false;
    }
    return true;
  }

  Delete(value) {
    if (!this.head) {
      return false;
    }
    let node = this.head;

    if (node.value === value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return true;
    }

    while (node.next && node.next.value !== value) {
      node = node.next;
    }

    if (node.next) {
      if (node.next === this.tail) {
        this.tail = node;
        this.tail.next = null;
      } else {
        node.next = node.next.next;
      }
      return true;
    }

    return false;
  }

  *Traverse() {
    let node = this.head;

    while (node) {
      yield node.value;
      node = node.next;
    }
  }

  *ReverseTraversal() {
    if (this.tail) {
      let node = this.tail;

      while (node !== this.head) {
        let prev = this.head;
        while (prev.next !== node) {
          prev = prev.next;
        }
        yield node.value;
        node = prev;
      }
      yield node.value;
    }
  }
}
