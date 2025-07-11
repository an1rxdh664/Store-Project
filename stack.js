class Stack {
    constructor(){
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop(){
        if(this.stack.length === 0) return false;
        else this.stack.pop();
    }
    peek(){
        if(this.stack.length === 0) return false;
        else return this.stack[this.stack.length - 1];
    }
}

const strs = "[()]";

const stack = new Stack();

for(let i of strs) {
    console.log(i);
    stack.push(i);
}
for(let i of strs){
    if(i===')' && stack.peek()===')'){
        stack.pop();
    } else if(i===']' && stack.peek()===']'){
        stack.pop();
    }else if(i==='}' && stack.peek()==='}'){
        stack.pop();
    }
}

console.log("\n" + stack.peek());