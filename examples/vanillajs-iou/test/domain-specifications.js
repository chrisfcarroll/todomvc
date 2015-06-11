/*global app, jasmine, describe, it, beforeEach, expect, jQuery*/

describe('iodu Domain tests', function () {
  'use strict';

  var emptyDomain = function () { domain = new Domain(); };

  beforeEach(emptyDomain);

  it('A todo can be added, and then retrieved',function(){

    var entry1=new domain.ToDo("todo");
    var entry2=new domain.ToDo("2");
    //
    domain.addToDo(entry1).addToDo(entry2);
    var found1= domain.getToDoById(entry1.id);
    var found2= domain.getToDoById(entry2.id);
    //
    expect(found1).toBe(entry1);
    expect(found2).toBe(entry2);
  });


  describe('Querying', function () {

    var todoActive, todoCompleted;

    beforeEach(function(){
      todoActive= new domain.ToDo("todo 1 active");
      todoCompleted= new domain.ToDo("todo 2 completed");
      domain.addToDo(todoActive);
      domain.addToDo(todoCompleted);
      todoCompleted.complete();
    });


    it('should getAll entries', function () {
      expect( domain.getAll().indexOf(todoActive) ).toBeGreaterThan(-1);
      expect( domain.getAll().indexOf(todoCompleted) ).toBeGreaterThan(-1);
    });

    it('should get active entries', function () {
      expect( domain.getActive().indexOf(todoActive)).toBeGreaterThan(-1);
      expect( domain.getActive().indexOf(todoCompleted)).toBe(-1);
    });

    it('should get completed entries', function () {
      expect( domain.getCompleted().indexOf(todoActive)).toBe(-1);
      expect( domain.getCompleted().indexOf(todoCompleted)).toBeGreaterThan(-1);
    });
  });

  it('should show the content block when todos exists', function () {
  });

  it('should hide the content block when no todos exists', function () {
  });

  it('should check the toggle all button, if all todos are completed', function () {
  });

  it('should set the "clear completed" button', function () {
  });

  it('should highlight "All" filter by default', function () {
  });

  it('should highlight "Active" filter when switching to active view', function () {
  });

  describe('toggle all', function () {
      it('should toggle all todos to completed', function () {
      });

      it('should update the view', function () {
      });
  });

  describe('new todo', function () {
      it('should add a new todo to the model', function () {
          emptyDomain([]);
      });

      it('should add a new todo to the view', function () {
          emptyDomain([]);
      });

      it('should clear the input field when a new todo is added', function () {
          emptyDomain([]);
      });
  });

  describe('element removal', function () {
      it('should remove an entry from the model', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          emptyDomain([todo]);
      });

      it('should remove an entry from the view', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          emptyDomain([todo]);
      });

      it('should update the element count', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          emptyDomain([todo]);
      });
  });

  describe('remove completed', function () {
      it('should remove a completed entry from the model', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          emptyDomain([todo]);
      });

      it('should remove a completed entry from the view', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          emptyDomain([todo]);
      });
  });

  describe('element complete toggle', function () {
      it('should update the model', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          emptyDomain([todo]);
      });

      it('should update the view', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          emptyDomain([todo]);
      });
  });

  describe('edit item', function () {
      it('should switch to edit mode', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          emptyDomain([todo]);
      });

      it('should leave edit mode on done', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          emptyDomain([todo]);
      });

      it('should persist the changes on done', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          emptyDomain([todo]);
      });

      it('should remove the element from the model when persisting an empty title', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          emptyDomain([todo]);
      });

      it('should remove the element from the view when persisting an empty title', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          emptyDomain([todo]);
      });

      it('should leave edit mode on cancel', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
      });

      it('should not persist the changes on cancel', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
      });
  });
});
