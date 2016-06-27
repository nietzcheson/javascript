define(["jquery", "Util", "components/titles", "components/forms", "components/tables", "components/panels"], function($, Util, Titles){

  $.fn.plugin = function(){

    var util = new Util();

    var title = new Titles();

    console.log(title.title('Título', 'h1'))

    var forms = new Forms();

    console.log(forms.form());

    Tables.title("Tabla");
    console.log(Tables.table());

    Panels.title('Panel');

    console.log(Panels.panel());

  }

});
