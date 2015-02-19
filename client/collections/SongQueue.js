// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  // checkPlayFirst: function(){
  //   console.log(this)
  //   if(this.length === 1){
  //     this.playFirst();
  //   }
  // },

  playFirst: function(){
    this.at(0).trigger("play", this.at(0));
  },

  ended: function(){
    this.shift();
    if (this.length > 0){
      this.playFirst();
    }
  }


});

