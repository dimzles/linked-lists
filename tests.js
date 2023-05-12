import LinkedList from "./linkedLists.js";

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.prepend(2);
linkedList.append(3);
console.log(linkedList.toString()); // (2) -> (1) -> (3) -> null
console.log(linkedList.size());
console.log("head -> ", linkedList.head());
console.log("tail -> ", linkedList.tail());
console.log("at -> ", linkedList.at(1));
linkedList.pop();
console.log(linkedList.toString()); // (2) -> (1) -> null
console.log(linkedList.contains(1));
console.log(linkedList.contains(345));
console.log(linkedList.find(1));
console.log(linkedList.find(345));
linkedList.insertAt(5, 2);
linkedList.insertAt(3, 0);
console.log(linkedList.toString()); // (3) -> (2) -> (1) -> (5) -> null
linkedList.removeAt(2);
console.log(linkedList.toString()); // (3) -> (2) -> (5) -> null
linkedList.removeAt(345);
