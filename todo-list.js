/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(List){
    this.List = [];
  }

  add(todo){
    this.List.push(todo);
  }

  remove(indexOfTodo){
    let len = this.List.length;
    if(indexOfTodo > len - 1){
      return;
    }
    for(let i=indexOfTodo+1;i<len;i++){
      this.List[i-1] = this.List[i];
    }
    this.List.pop();
  }

  update(index,updatedTodo){
    let len = this.List.length;
    if(index > len - 1){
      return;
    }
    this.List[index] = updatedTodo;
  }

  getAll(){
    return this.List;
  }

  get(indexOfTodo){
    let len = this.List.length;
    if(indexOfTodo > len - 1){
      return null;
    }
    return this.List[indexOfTodo];
  }

  clear(){
    this.List.length = 0;
  }

}

module.exports = Todo;
