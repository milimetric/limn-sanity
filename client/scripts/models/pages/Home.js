define(['models/Dashboard', 'Storage'], function(Dashboard, Storage){
  var Home;
  return Home = (function(){
    Home.displayName = 'Home';
    var prototype = Home.prototype, constructor = Home;
    function Home(){
      var i$, ref$, len$, id;
      this.currentPage('home');
      for (i$ = 0, len$ = (ref$ = Storage.load(this.dashboardsPath)).length; i$ < len$; ++i$) {
        id = ref$[i$];
        this.dashboards.push(new Dashboard(this.dashboardsPath + "" + id));
      }
    }
    prototype.dashboardsPath = '/data/dashboards/';
    prototype.currentPage = ko.observable();
    prototype.dashboards = ko.observableArray();
    return Home;
  }());
});