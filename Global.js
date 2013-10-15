var Global = (function() { // singleton
  function consoleLog(msg, debug) {
    if((this.opts && this.opts.debug) || debug) {
      console.log(msg);
    }
  }
  
  var publicAPI = {
    consoleLog: consoleLog,
    getWindowHeight: function() {
      return $(window).height();
    }
  }
  
  return publicAPI;
})();

if (!Object.create) {
    Object.create = (function(){
        function F(){}

        return function(o){
            if (arguments.length != 1) {
                throw new Error('Object.create implementation only accepts one parameter.');
            }
            F.prototype = o
            return new F()
        }
    })()
}