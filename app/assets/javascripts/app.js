var IronNotes = Ember.Application.create();

IronNotes.ApplicationAdapter = DS.ActiveModelAdapter.extend()

IronNotes.Router.map(function(){
  this.resource('notes', function(){
    this.resource('note', {path: "/:note_id"})
  });
})

IronNotes.NotesRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('note');
  }
})
