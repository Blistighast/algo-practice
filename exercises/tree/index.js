// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    // for (let child of this.children) {
    //   if (child.data === data) {
    //     this.children.splice(child)
    //   }
    // }
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let array = [this.root]

    while (array.length) {
      let node = array.shift()

      array.push(...node.children)

      fn(node)
    }
  }

  traverseDF(fn) {
    let array = [this.root]

    while (array.length) {
      let node = array.shift()

      array.unshift(...node.children)

      fn(node)
    }
  }
}

// class Node {
//   constructor(data) {
//     this.data = data
//     this.children = []
//   }

//   add(data) {
//     this.children.push(new Node(data))
//   }

//   remove(data) {
//     // for (let node of this.children) {
//     //   if (data === node.data) {
//     //     this.children.splice(node)
//     //   }
//     // }

//     this.children = this.children.filter(node => {
//       return node.data !== data
//     })
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   traverseBF(fn) {
//     let arr = [this.root];
    
//     while (arr.length) {
//       let node = arr.shift();

//       arr.push(...node.children);
//       // for (let child of node.children) {
//       //   arr.push(child);
//       // }
//       fn(node);
//     }
//   }

//   traverseDF(fn) {
//     let arr = [this.root];

//     while (arr.length) {
//       let node = arr.shift();

//       arr.unshift(...node.children);

//       fn(node);
//     }
//   }
// }

module.exports = { Tree, Node };
