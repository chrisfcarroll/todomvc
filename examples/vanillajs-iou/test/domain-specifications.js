//
QUnit.module("Domain Specificatons");

QUnit.test('A todo can be added, and then retrieved',function(){

  var entry1=new domain.ToDo("todo");
  var entry2=new domain.ToDo("2");
  //
  domain.addToDo(entry1).addToDo(entry2);
  var found1= domain.getToDoById(entry1.id);
  var found2= domain.getToDoById(entry2.id);
  //
  assert.equal(found1,entry1);
  assert.equal(found2,entry2);
});

//----------------------------------------------------------------

QUnit.module('Domain Specificatons - Querying', {

  beforeEach: function () {
    this.domain = new Domain();
    this.todoActive = new domain.ToDo("todo 1 active");
    this.todoCompleted = new domain.ToDo("todo 2 completed");
    this.domain.addToDo(todoActive);
    this.domain.addToDo(todoCompleted);
    this.todoCompleted.complete();
  }
});

QUnit.test('should getAll entries', function (assert) {
  assert.greaterThan( domain.getAll().indexOf(todoActive), -1);
  assert.greaterThan( domain.getAll().indexOf(todoCompleted), -1);
});

QUnit.test('should get active entries', function (assert) {
  assert.greaterThan( domain.getActive().indexOf(todoActive), -1);
  assert.greaterThan( domain.getActive().indexOf(todoCompleted), -1);
});

QUnit.test('should get completed entries', function (assert) {
  assert.equal( domain.getCompleted().indexOf(todoActive) , -1);
  assert.greaterThan( domain.getCompleted().indexOf(todoCompleted), -1);
});

QUnit.test('should show the content block when todos exists', function (assert) {
});

QUnit.test('should hide the content block when no todos exists', function (assert) {
});

QUnit.test('should check the toggle all button, if all todos are completed', function (assert) {
});

QUnit.test('should set the "clear completed" button', function (assert) {
});

QUnit.test('should highlight "All" filter by default', function (assert) {
});

QUnit.test('should highlight "Active" filter when switching to active view', function (assert) {
});


//---------------------------------------------------------------------
QUnit.module('Domain Specifications - toggle all');

QUnit.test('should toggle all todos to completed', function (assert) {
});

QUnit.test('should update the view', function (assert) {
});


//---------------------------------------------------------------------
QUnit.module('Domain Specificatons - new todo');
QUnit.test('should add a new todo to the model', function (assert) {
});

QUnit.test('should add a new todo to the view', function (assert) {
});

QUnit.test('should clear the input field when a new todo is added', function (assert) {
});


//---------------------------------------------------------------------
QUnit.module('Domain Specificatons - element removal');

QUnit.test('should remove an entry from the model', function (assert) {
    var todo = {id: 42, title: 'my todo', completed: true};

});

QUnit.test('should remove an entry from the view', function (assert) {
    var todo = {id: 42, title: 'my todo', completed: true};

});

QUnit.test('should update the element count', function (assert) {
    var todo = {id: 42, title: 'my todo', completed: true};

});


//---------------------------------------------------------------------
QUnit.module('Domain Specificatons - remove completed');

QUnit.test('should remove a completed entry from the model', function (assert) {
    var todo = {id: 42, title: 'my todo', completed: true};

});

QUnit.test('should remove a completed entry from the view', function (assert) {
    var todo = {id: 42, title: 'my todo', completed: true};

});


//---------------------------------------------------------------------
QUnit.module('Domain Specificatons - element complete toggle');

QUnit.test('should update the model', function (assert) {
    var todo = {id: 21, title: 'my todo', completed: false};

});

QUnit.test('should update the view', function (assert) {
    var todo = {id: 42, title: 'my todo', completed: true};

});


//---------------------------------------------------------------------
QUnit.module('Domain Specificatons - edit item');

QUnit.test('should switch to edit mode', function (assert) {
  var todo = {id: 21, title: 'my todo', completed: false};

});

QUnit.test('should leave edit mode on done', function (assert) {
    var todo = {id: 21, title: 'my todo', completed: false};

});

QUnit.test('should persist the changes on done', function (assert) {
    var todo = {id: 21, title: 'my todo', completed: false};

});

QUnit.test('should remove the element from the model when persisting an empty title', function (assert) {
    var todo = {id: 21, title: 'my todo', completed: false};

});

QUnit.test('should remove the element from the view when persisting an empty title', function (assert) {
    var todo = {id: 21, title: 'my todo', completed: false};

});

QUnit.test('should leave edit mode on cancel', function (assert) {
    var todo = {id: 21, title: 'my todo', completed: false};
});

QUnit.test('should not persist the changes on cancel', function (assert) {
    var todo = {id: 21, title: 'my todo', completed: false};
});
