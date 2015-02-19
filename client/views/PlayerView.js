// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': 'songEnd'
  },

  initialize: function() {
  },

  songEnd: function(){
    console.log('PlayerView -> songEnd()');
    this.model.ended();
  },

  setSong: function(song){
    console.log("PlayerView -> setSong()")
    this.model = song;
    this.render();
  },

  render: function(){
    console.log("PlayerView -> render()")
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
