define(function(){
  var Storage;
  Storage = (function(){
    Storage.displayName = 'Storage';
    var prototype = Storage.prototype, constructor = Storage;
    prototype.load = function(path){
      var ret;
      ret = {};
      $.ajax({
        url: path,
        async: false,
        success: function(data){
          return ret.loaded = data;
        }
      });
      return ret.loaded;
    };
    function Storage(){}
    return Storage;
  }());
  return new Storage();
});