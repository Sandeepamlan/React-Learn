// Create for node
function ListNode(data) {
    this.data= data;
    this.pointer= null;
    
}

// Constructor of Linked List
function LinkedList(){
    this.head= null;
    this.length= 0;
}

// functionality to insert node at the start
LinkedList.prototype.insertAtStart = function(data){
    let node = new ListNode(data);
    node.pointer = this.head;
    
    this.head= node;
    this.length++;

}

LinkedList.prototype.insertAtLast = function(data){
    let node = new ListNode(data);
    let lastNode= this.head;
    while(lastNode.pointer !== null){
        lastNode = lastNode.pointer;


    } lastNode.pointer = node;
    this.length++;
}

// to insert at a perticular Location

LinkedList.prototype.insertAt = function(data,loc){
    let node = new ListNode(data);
    let currentNode= this.head;
    let prevNode= null;
    let index= this.length;
    while(loc !== index){
        prevNode = currentNode;
        currentNode = currentNode.pointer;
        index--;

    }
    node.pointer= currentNode;
    prevNode.pointer= node;
    this.length++;

};

LinkedList.prototype.deleteAt = function(data){
    let node = new ListNode(data);
    let currentNode= this.head;
    let prevNode= null;

    while(data!== currentNode.data){
        prevNode =currentNode;
        currentNode = currentNode.pointer;

    } prevNode.pointer=currentNode.pointer
    this.length--;
}

// to delete a Node with a data
LinkedList.prototype.delete = function (data) {
    let currentNode = this.head;
    let previousNode = null;

    while (data !== currentNode.data) {
        previousNode = currentNode;
        currentNode = currentNode.pointer;
    }

    previousNode.pointer = currentNode.pointer;
    this.length--;
};


LinkedList.prototype.reverse = function(){
    let currentNode= this.head;
    let previousNode = null;
    let index = this.length;
    
    while(index !== 1){
        previousNode = currentNode;
        currentNode = currentNode.pointer;
        let tempNode = currentNode.pointer;
        currentNode.pointer=previousNode;
        previousNode.pointer=tempNode;
        index--;

    } this.head= currentNode;

}

const linkedList = new LinkedList();
linkedList.insertAtStart(100);
linkedList.insertAtStart(200);
linkedList.insertAtStart(300);
linkedList.insertAtLast(50);
linkedList.insertAt(150,3);
linkedList.reverse();

// linkedList.deleteAt(200);
// linkedList.delete(100);

console.log(linkedList);
console.log(linkedList.head.pointer);
//console.log(ListNode(100));