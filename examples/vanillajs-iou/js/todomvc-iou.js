//
//============ IOU =======================
//
var inputs= {
  newtodo:   doc("#new-todo"),
  toggleAll: doc("#toggle-all"),
  filters:   doc("#filters"),
  clearCompleted: doc('#clear-completed')
}

var outputs={
  todoList:  doc('#todo-list'),
  todoCount: doc('#todo-count'),
};

;(function updates(){




})();

//
//============ Domain =======================
//
var Domain= function(){

  var me=this;
  var active= [];
  var completed=[];
  var lastId=0;

  this.nextId=function(){return ++lastId};

  this.ToDo= function(description){
    this.id= me.nextId();
    this.description=description;
  };
  this.ToDo.prototype.complete= function(){
    this.complete=true;
    var idx;
    if(idx=active.indexOf(this)>=0){
      active.splice(idx, 1);
      completed.push(this);
    }
    return this;
  };

  this.getAll= function(){ return active.concat(completed);};
  this.getActive= function(){ return active;};
  this.getCompleted= function(){ return completed;};

  this.getToDoById = function (id) {
    return me.getAll().find(function(e){return e.id==id});
  };


  this.addToDo= function(newTodo){
    if(! (newTodo instanceof me.ToDo)){newTodo= new me.ToDo(newTodo.toString())}
    //
    active.push(newTodo);
    return me;
  }
};

var domain= new Domain();