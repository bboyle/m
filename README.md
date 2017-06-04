# Popup menu (2002)

This javascript takes control of a specified list and changes the class (CSS) used by any child lists which have their id attribute set.
The javascript also adds mouse and logical event handlers to relevant objects in the menu to implement the show/hide behaviour (through the style.display property).


## How to create a menu?

1. Create a simple menu using a nested list (2 levels only)
2. Give the parent node of the list an id (e.g. `<ul id="mx">`)
3. Give nested sections an id (e.g. `<ul id="js">`) if you want them controlled by the script
4. Set up the classes in a linked style sheet as you require
5. Call `mSet(menu, classname);` to control the menu (eg. `<body onload="mSet('mx', 'm');">`).


## Known issues

- Only supports one level of expansion
- Menu may be partially off screen (due to absolute positioning)
- Opera 5.12 performs strangely as page reflow is not supported
- Keyboard (tabbing) support unusual in Netscape 6
- Using position relative crashes Netscape 6 (CSS issue, not script).


## Tested on

- Optimal performance in IE5+, NS6 (javascript enabled)
- Untested in IE4/Win
- Untested on operating systems other than win98 (sorry, it's all I've got!)
- Disabled in Netscape 4, but html menu is accessible
- Disabled without javascript, but html menu is accessible.
