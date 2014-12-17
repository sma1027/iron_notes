var App = Ember.Application.create();

App.Router.map(function(){
  this.resource('notes');
  this.resource('note', {path: "/notes/:note_id"})
})

App.NotesRoute = Ember.Route.extend({
  model: function(){
    return [{
      id: "1",
      title: "Badgers enjoy popscles",
      body: "I witnessed a badger crushing a popscile today."
    },{
      id: "2",
      title: "Dogs like sawdust",
      body: "Apparently dogs like sawdust"
    }]
  }
})

// App.NoteRoute = Ember.Route.extend({
  // model: function(params){
  //   this.modelFor('notes').findBy('id', params.note_id)
  // }
// })
