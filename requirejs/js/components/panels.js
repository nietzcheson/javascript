define(["jquery"],function(){

  return Panels = {
    title: function(title){
      this.title = title;
    },
    panel: function(){
      return this.title;
    },
    div: function(){
      return $("<div />").text('Un div');
    }
  }

});
