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


//===================

var Domain= function(){
  var that=this;

  this.active= [];
  this.completed=[];
  this.getAll= function(){ return that.active.concat(that.completed);}

  this.addEntry= function(entry){
    if(typeof Entry != "Entry"){entry= new Domain.Entry(entry.toString())}
    //
    that.active.push(entry);
    return that;
  }

};
Domain.nextId=Date.now;
Domain.Entry= function(description){
  this.id= Domain.nextId();
  this.description=description;
}

var domain= new Domain();