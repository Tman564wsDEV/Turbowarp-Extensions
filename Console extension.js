(function(ext) {
  // Block definition
  var descriptor = {
    blocks: [
      [' ', 'Log %s to console', 'logToConsole', 'Script executed'],
      [' ', 'Warn %s to console', 'warnToConsole', 'Script Warning'],
      [' ', 'Error %s to console', 'errorToConsole', 'Error Warning']
    ],
    displayName: 'Console Extension'
  };
  
  // Block implementation
  ext.logToConsole = function(text) {
    // Implement the functionality of your custom block here
    console.log(text);
  };
 
  ext.warnToConsole = function(text) {
    console.warn(text);
  };
  
  ext.errorToConsole = function(text) {
    console.error(text);
  };
 
  
  // Register the extension
  ScratchExtensions.register('console_extension', descriptor, ext);
})(this);
