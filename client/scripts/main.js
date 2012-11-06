infuser.defaults.templateUrl = "templates";
require(['models/pages/Home'], function(Home){
  return $(document).ready(function(){
    var viewModel;
    viewModel = new Home();
    return ko.applyBindings(viewModel);
  });
});