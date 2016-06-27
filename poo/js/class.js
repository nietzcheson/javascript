var Clase = function()
{

  var title;

  this.setTitle = function(title){
    this.title = title;
  }

  this.getTitle = function(){
    return this.title;
  }

  this.metodo = function(){
    return this.getTitle();
  }

}
