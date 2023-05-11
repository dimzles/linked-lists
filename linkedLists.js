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
}
