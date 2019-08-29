// Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, we can go one step further with splice() — in addition to removing elements, we can use that third parameter, which represents one or more elements, to add them as well. This can be incredibly useful for quickly switching out an element, or a set of elements, for another. For instance, let's say you're storing a color scheme for a set of DOM elements in an array, and want to dynamically change a color based on some action:

function colorChange(arr, index, newColor) {
    arr.splice(index, 1, newColor);
    return arr;
  }
  
  let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];
  
  colorScheme = colorChange(colorScheme, 2, '#332327');
  // we have removed '#bb7e8c' and added '#332327' in its place
  // colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']