function Stack() {
    this.arr = []; // to store the stack data
    this.top = 0; // to point the top of the stack
}

Stack.prototype.push = function (value) {
    this.arr[this.top] = value; // store the value at the top
    this.top = this.top + 1; // increment top pointer
}

Stack.prototype.pop = function () {
    if (this.is_empty()) {
        throw new Error("Underflow, stack is empty");
    }

    var topEl = this.arr[this.top - 1];

    this.top = this.top - 1;
    this.arr.pop();
    return topEl;
}

Stack.prototype.peek = function () {
    if (this.is_empty()) {
        throw new Error("Underflow, stack is empty");
    }

    return this.arr[this.top - 1];
}

Stack.prototype.is_empty = function () {
    return this.top === 0;
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


var stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.reverse());

console.log(stack);