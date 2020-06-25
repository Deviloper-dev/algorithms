class Node {
  constructor(value) {
    if (value === 'undefined') {
      return new Error('Node must have a value');
    }
    this.value = value;
    this.adjacents = new Set();
  }

  addAdjacent = node => this.adjacents.add(node);

  removeAdjacent = node => this.adjacents.delete(node);

  isAdjacent = node => this.adjacents.has(node);

  getAdjacents = () => Array.from(this.adjacents);
}

module.exports = Node;