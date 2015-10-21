var tabs = require('sdk/tabs');
var contextMenu = require("sdk/context-menu");

                

var menuItem  = contextMenu.Item({
    label         : "Search on Explainshell",
    context       : contextMenu.SelectionContext(),
   contentScript  : 'self.on("click", function () {' +
                    '  var text = window.getSelection().toString();' +
                    '  self.postMessage(text);' +
                    '});',
                    
    onMessage : function(data) {
        searchJisho(data);
    }
});

function searchJisho(data) {
    tabs.open('http://www.explainshell.com/explain?cmd='+data);
}
