import Person from "./Person";
import BST from "./BST";

// =========================================
const bst = new BST<Person>();
const p1 = new Person("Person 1", 22);
const p2 = new Person("Person 2", 28);
const p3 = new Person("Person 3", 26);
const p4 = new Person("Person 4", 24);
const p5 = new Person("Person 5", 56);

bst.add(p1);
bst.add(p2);
bst.add(p3);
bst.add(p4);
bst.add(p5);

console.log("====================================");
console.log(bst.printTree());
// console.log("====================================");
// console.log(bst.find(p2));
console.log("====================================");
console.log(bst.findMaxValue(bst.root));
console.log("====================================");
console.log(bst.findMinValue(bst.root));
// console.log("====================================");
// console.log(bst.printTree());
// console.log("====================================");
// console.log(bst.remove(p2));
// console.log("====================================");
// console.log(bst.printTree());
// console.log("====================================");
// =========================================

// const bst = new BST<number>();
// bst.add(50);
// bst.add(30);
// bst.add(20);
// bst.add(40);
// bst.add(70);
// bst.add(60);
// bst.add(80);
// console.log("====================================\n");
// console.log(bst.printTree());
// console.log("====================================\n");
// console.log(bst.find(70));
// console.log("====================================\n");
// console.log(bst.remove(70));
// console.log("====================================\n");
// console.log(bst.printTree());
// console.log("====================================\n");
