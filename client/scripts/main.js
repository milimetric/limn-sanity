infuser.defaults.templateUrl = "templates";

$(document).ready(function(){
    var viewModel = {
        currentPage: ko.observable('home'),
        dashboards: ko.observableArray([])
    };
    ko.applyBindings(viewModel);
});
