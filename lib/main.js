var cm = require("sdk/context-menu");
var selectTag = "select";
var clipboard = require("sdk/clipboard");

cm.Menu({
  label: "Super Selects",
  context: cm.SelectorContext(selectTag),
  items: [
    cm.Item({
      label: "Copy Text of Selected Option",
      context: cm.SelectorContext(selectTag),
      contentScript: 'self.on("click", function (node, data) {' +
                     '  if (node.selectedIndex >= 0) {' +
                     '    self.postMessage(node.options[node.selectedIndex].text);' +
                     '  }' +
                     '});',
      onMessage: function (text) {
        clipboard.set(text);
      },
    }),
    cm.Item({
      label: "Copy Value of Selected Option",
      context: cm.SelectorContext(selectTag),
      contentScript: 'self.on("click", function (node, data) {' +
                     '  if (node.selectedIndex >= 0) {' +
                     '    self.postMessage(node.options[node.selectedIndex].value);' +
                     '  }' +
                     '});',
      onMessage: function (value) {
        clipboard.set(value);
      },
    }),
  ]
});