// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  playFirst: function(){
    console.log("Song Queue Collection: playFirst()")
    this.at(0).trigger("play", this);
    //  console.log();
    //console.log("Play first")
  }


});

