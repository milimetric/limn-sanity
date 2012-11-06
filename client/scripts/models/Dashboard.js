define(['Storage'], function(Storage){
  var Dashboard;
  return Dashboard = (function(){
    Dashboard.displayName = 'Dashboard';
    var prototype = Dashboard.prototype, constructor = Dashboard;
    function Dashboard(path){
      var json;
      json = Storage.load(path);
      $.extend(true, this, ko.mapping.fromJSON(json));
    }
    prototype.graphs = ko.observableArray();
    return Dashboard;
  }());
});