var ParentsPlanner = (function() { // singleton
  var planner = Object.create(Application);

  var baseRestCall = "/work/jsPattern/restCall.php";
  
  planner.getJsonData = function(url, params) {

	  return $.getJSON(url, params);

  } // returns promise

  planner.getThemes = function(params) {
	  var themePath = this.opts.themePath; // expects this to exist
	  var ajaxUrl = baseRestCall + themePath;
	  return planner.getJsonData(ajaxUrl, params);
  }
  
  return planner;
})();