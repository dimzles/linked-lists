class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    //create newNode containing value
    const newNode = new Node(value);

    //if !listHead, listHead = newNode
    if (this.listHead === null) this.listHead = newNode;
    //otherwise, continue down the nextNodes until hit null
    else {
      let listTail = this.listHead;
      while (listTail.nextNode !== null) {
        listTail = listTail.nextNode;
      }
      //when tail.nextNode = null, tail.nextNode = newNode
      listTail.nextNode = newNode;
    }
  }

  prepend(value) {
    //create var to hold current listHead if it exists
    let originalNode = null;
    //if listHead exists, store it in var
    if (this.listHead !== null) originalNode = this.listHead;
    //replace listHead with new Node
    this.listHead = new Node(value);
    //set nextNode of current listHead to point to prev listHead
    this.listHead.nextNode = originalNode;
  }

  size() {
    let head = this.listHead;
    let counter = 0;
    while (head.nextNode !== null) {
      counter++;
    }
    return counter;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let tail = this.listHead;

    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }

    return tail;
  }

  at(index) {
    let currentNode = this.listHead;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    let prevNode = null;
    let currentNode = this.listHead;

    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    prevNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.listHead;

    while (currentNode.value !== value) {
      if (currentNode.nextNode === null) return false;
      currentNode = currentNode.nextNode;
    }

    return true;
  }

  find(value) {
    let currentNode = this.listHead;
    let counter = 0;

    while (currentNode.value !== value) {
      if (currentNode.nextNode === null || value < 0) return null;
      currentNode = currentNode.nextNode;
      counter++;
    }

    return counter;
  }
}
