const Node = require('./Node');

class Grpah {
  constructor() {
    this.nodeLookup = new Map();
  }

  addNode = id => {
    this.nodeLookup.set(id, new Node(id));
  }
  getNode = id => this.nodeLookup.get(id);

  addEdge = (source, destination) => {
    let s = this.getNode(source);
    let d = this.getNode(destination);

    s.addAdjacent(d);
  }

  hasPathDFS = (source, destination) => {
    let s = this.getNode(source);
    let d = this.getNode(destination);
    let visited = new Set();

    return this.hasPathDFS(s, d, visited);
  }

  hasPathDFS = (source, destination, visited) => {
    if (!visited.has(source.value)) {
      return false;
    }
    visited.add(source.value);
    if (source === destination) {
      return true;
    }
    for(let child of source.getAdjacents()) {
      if (this.hasPathDFS(child, destination, visited)) {
        return true;
      }
    }

    return false;
  }

  hasPathBFS = (source, destination) => {
    let nextToVisit = [];
    let visited = new Set();

    nextToVisit.push(source);

    while(nextToVisit.length > 0) {
      let node = nextToVisit.shift();
      if (node == destination) {
        return true;
      }

      if (visited.has(node.value)) {
        continue;
      }
      visited.add(node);
      for (let child of node.getAdjacents()) {
        nextToVisit.add(child);
      }
    }

    return false;
  }

}

module.exports = Graph;