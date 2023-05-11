class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
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
      //when tail = null, tail.nextNode = newNode
      listTail.nextNode = newNode;
    }
  }
}
