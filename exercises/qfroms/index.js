// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }

  add(record) {
    this.s1.push(record)
  }

  remove() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }

    //cant return yet, need to put remaining items in s2 back into s1
    let result = this.s2.pop()

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }

    return result
  }

  peek() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }

    let peek = this.s2.peek()

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }

    return peek
  }
}
// class Queue {
//   constructor() {
//     this.s1 = new Stack()
//     this.s2 = new Stack()
//   }

//   add(record) {
//     this.s1.push(record)
//   }

//   remove() {
//     //move all from s1 to s2
//     while (this.s1.peek()) {
//       this.s2.push(this.s1.pop())
//     }

//     let result = this.s2.pop()
    
//     //remove  remaining from 2 back to 1 for next call
//     while (this.s2.peek()) {
//       this.s1.push(this.s2.pop())
//     }
    
//     return result
//   }
  
//   peek() {
//     while (this.s1.peek()) {
//       this.s2.push(this.s1.pop())
//     }
    
//     let peek = this.s2.peek()
    
//     while (this.s2.peek()) {
//       this.s1.push(this.s2.pop())
//     }
    
//     return peek
//   }

// }

module.exports = Queue;
