var BirthdayPlanner = (function() { 
  var bp = Object.create(ParentsPlanner);

  bp.opts = {
	  themePath: '/birthdayplanner/themes/search/'
  };

  bp.init = function() {
	  
	  this.getThemes().done(function(data) {
		  console.log(data);
	  });
  }

  return bp;
})();

// call it statically
BirthdayPlanner.init();