// STACK
function Item(data) {
    this.data = data;
    this.top = null;
}

function Stack() {
    this.data = [];
    this.length = 0;
}

Stack.prototype.push = function (data){
    let item = new Item(data);
   //this.data.push(item);
   if(this.data.length > 0){
     let lastItem = this.data[this.data.length-1];
     lastItem.top = item;

   }  
   this.data.push(item);
   this.length++;
   

};

Stack.prototype.is_empty = function () {
    return this.top === 0;
}

Stack.prototype.pop = function () {
    if (this.is_empty()) {
        throw new Error("Underflow, stack is empty");
    }

    var topEl = this.data[this.top - 1];

    this.top = this.top - 1;
    this.data.pop();
    return topEl;
}

Stack.prototype.reverse = function () {
    if (this.is_empty()) {
        throw new Error("Underflow, stack is empty");
    }

    var revStr = '';

    while(!this.is_empty()) {
        revStr += this.pop();
    }

    return revStr;
}

let stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack);
console.log(stack.reverse());
console.log(stack);