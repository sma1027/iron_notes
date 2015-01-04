var IronNotes = Ember.Application.create();

IronNotes.ApplicationAdapter = DS.ActiveModelAdapter.extend()

IronNotes.Router.map(function(){
  this.resource('notes', function(){
    this.resource('note', {path: "/:note_id"})
  });
});

IronNotes.NotesRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('note');
  }
});

IronNotes.NoteController = Ember.ObjectController.extend({
  editing: false,
  actions: {
    startEdit: function(){
      this.set('editing', true)
    },
    saveNote: function(){
      this.get('model');
      var controller = this;
      note.save().then(function(){
        controller.set('editing', false);
      });
    }
  }
});

IronNotes.NotesIndexController = Ember.ArrayController.extend({
  newTitle: '',
  newBody: '',
  newPriorityLevel: '',

  actions: {
    createNote: function(){
      var title = this.get('newTitle');
      var body = this.get('newBody');
      var priorityLevel = this.get('newPriorityLevel');

      var note = this.store.createRecord('note', {
        title: title,
        body: body,
        priorityLevel: priorityLevel
      });

      var controller = this;

      note.save().then(function(model){
        controller.get('newTitle', '');
        controller.get('newBody', '');
        controller.get('newPriorityLevel', '');
        controller.transitionToRoute('note', model);
      });
    }
  }
});
