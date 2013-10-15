var ShowerPlanner = (function() { 
  var sp = Object.create(ParentsPlanner);

  sp.opts = {
	  themePath: '/showerplanner/themes/search/'
  };

  sp.init = function() {
	  
	  this.getThemes().done(function(data) {
		  console.log(data);
	  });
  }

  return sp;
})();

// call it statically
ShowerPlanner.init();