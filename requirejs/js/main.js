require.config({
  baseUrl: "js",
  waitSeconds: 200,
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    "jquery" : "../../../bower_components/jquery/dist/jquery.min",
  },
  "shim": {
    "plugin": ["jquery"]
  }
});

require(['jquery','plugin'], function(){

  $(this).plugin();

});
