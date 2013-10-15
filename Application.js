var Application = (function() { // singleton
  var app = Object.create(Global);
  
  app.getTemplateOutput = function(templateId, viewJson) {
	if(this.mustache && this.mustache[templateId]) {
		return Mustache.render(this.mustache[templateId], viewJson);
	}
  }
  
  return app;
})();