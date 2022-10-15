const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.storage = [];
  }
  getUnderlyingList() {
    class LinkedList {
      constructor() {
        this.length = 0;
        this.head = null;
      }
      add(data) {
        if (this.length === 0) {
          this.head = new ListNode(data);
        } else {
          let current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = new ListNode(data);
        }
        this.length++;
      }
    }

    const list = new LinkedList();
    for (let item of this.storage) {
      list.add(item);
    }
    return list.head;
  }

  enqueue(value) {
    return this.storage.push(value);
  }

  dequeue() {
    return this.storage.shift();
  }
}

module.exports = {
  Queue
};
