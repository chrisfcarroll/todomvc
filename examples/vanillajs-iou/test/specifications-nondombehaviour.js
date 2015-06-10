/*global app, jasmine, describe, it, beforeEach, expect, jQuery*/

describe('iodu Domain tests', function () {
  'use strict';

  var setUpModel = function () {
      domain = new Domain();
  };
  beforeEach(setUpModel)

  it('addEntry then getAll returns the added Entry(ies)',function(){

    var entry1=new Domain.Entry("todo");
    var entry2=new Domain.Entry("2");

    domain.addEntry(entry1).addEntry(entry2);
    //
    var found1=domain.getAll().filter(function(e,i,arr){return e.id===entry1.id;});
    var found2=domain.getAll().filter(function(e,i,arr){return e.id===entry2.id;});
    expect(found1).toBeTruthy();
  });


  describe('routing', function () {

      it('should show all entries without "all" route', function () {
      });

      it('should show active entries', function () {
      });

      it('should show completed entries', function () {
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
          setUpModel([]);
      });

      it('should add a new todo to the view', function () {
          setUpModel([]);
      });

      it('should clear the input field when a new todo is added', function () {
          setUpModel([]);
      });
  });

  describe('element removal', function () {
      it('should remove an entry from the model', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          setUpModel([todo]);
      });

      it('should remove an entry from the view', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          setUpModel([todo]);
      });

      it('should update the element count', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          setUpModel([todo]);
      });
  });

  describe('remove completed', function () {
      it('should remove a completed entry from the model', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          setUpModel([todo]);
      });

      it('should remove a completed entry from the view', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          setUpModel([todo]);
      });
  });

  describe('element complete toggle', function () {
      it('should update the model', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          setUpModel([todo]);
      });

      it('should update the view', function () {
          var todo = {id: 42, title: 'my todo', completed: true};
          setUpModel([todo]);
      });
  });

  describe('edit item', function () {
      it('should switch to edit mode', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          setUpModel([todo]);
      });

      it('should leave edit mode on done', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          setUpModel([todo]);
      });

      it('should persist the changes on done', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          setUpModel([todo]);
      });

      it('should remove the element from the model when persisting an empty title', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          setUpModel([todo]);
      });

      it('should remove the element from the view when persisting an empty title', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
          setUpModel([todo]);
      });

      it('should leave edit mode on cancel', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
      });

      it('should not persist the changes on cancel', function () {
          var todo = {id: 21, title: 'my todo', completed: false};
      });
  });
});
