// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    //this.head in the next spot is to shove over the current head
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head

    if (!node) {
      return null;
    }

    while (node.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next
  }

  removeLast() {
    if(!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;

  }

  insertLast(data) {
    let node = this.head

    if (!node) {
      this.head = new Node(data)
      return
    }

    while (node.next) {
      node = node.next
    }

    node.next = new Node(data)
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next;
      return
    }

    let prev = this.getAt(index - 1)

    if (!prev || !prev.next ) {
      return
    }
    
    prev.next = prev.next.next
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    let prev = this.getAt(index - 1) || this.getLast()
    let node = new Node(data, prev.next)

    prev.next = node
  }

}

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     // this.insertAt(data, 0)
//   }

//   size() {
//     let count = 0;
//     let node = this.head;

//     while (node) {
//       count++;
//       node = node.next;
//     }

//     return count
//   }

//   getFirst() {
//     return this.head
//     // return this.getAt(0)
//   }

//   getLast() {
//     if (!this.head) {
//       return null
//     }

//     let node = this.head

//     while (node) {
//       if (!node.next) {
//         return node
//       }
//       node = node.next
//     }
//   }

//   clear() {
//       this.head = null
//   }

//   removeFirst() {
//     if (!this.head) {
//       return
//     }

//     this.head = this.head.next
//   }

//   removeLast() {
//     if (!this.head) {
//       return
//     }

//     let node = this.head.next
//     let previous = this.head

//     if (!node) {
//       this.head = null
//       return
//     }

//     while (node) {
//       if (!node.next) {
//         previous.next = null
//       }
//       node = node.next
//       previous = previous.next
//     }
//   }

//   insertLast(data) {
//     let newNode = new Node(data)

//     // if (!this.head) {
//     //   //chain is empty
//     //   this.head = newNode
//     //   return
//     // }

//     // let node = this.head

//     // while (node) {
//     //   if (!node.next) {
//     //     node.next = newNode
//     //     return
//     //   }
//     //   node = node.next
//     // }

//     let last = this.getLast()
//     if (last) {
//       //there are existing nodes in chain
//       last.next = newNode
//     } else {
//       //chain is empty
//       this.head = newNode
//     }
    
//   }


//   getAt(index) {
//     let node = this.head
//     let counter = 0

//     while (node) {
//       if (counter === index) {
//         return node
//       }
//       node = node.next
//       counter++
//     }
//     // the linkedlist isnt as long as index
//     return null
//   }

//   removeAt(index) {
//     if (!this.head) {
//       return;
//     }
    
//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     let previous = this.getAt(index - 1);
//     // let following = this.getAt(index + 1);
//     // previous.next = following;

//     if (!previous || !previous.next) {
//       return;
//     }

//     previous.next = previous.next.next
//   }

//   insertAt(data, index) {
//     let newNode = new Node(data);

//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }
    
//     let previous = this.getAt(index - 1);

//     if (!previous || !previous.next) {
//       this.insertLast(data);
//       return;
//     }

//     newNode.next = previous.next;
//     previous.next = newNode;
//   }

//   forEach(fn) {
//     let node = this.head

//     while (node) {
//       fn(node)
//       node = node.next
//     }
//   }
// }

module.exports = { Node, LinkedList };
