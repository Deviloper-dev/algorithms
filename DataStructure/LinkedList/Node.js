export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  toString() {
    return this.value.toString();
  }

  /**
   * @param {Node} node
   * @return Node
   * @description Set the next Node
   */
  set nextNode(node) {
    this.next = node;
  }
}
