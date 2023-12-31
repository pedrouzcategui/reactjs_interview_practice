## Solution

# Things I could have done better:

- Use Spread instead of destructuring props (maybe a style preference, not necessarily wrong)
- Recursion always is the same function, but what it changes is a condition on when to stop rendering
- Think about the interface, is an array of objects, not array of strings. If you have used an array of strings, how were you able to dig into each object and checking the children? An object was necessary for things that could have more than 1 value.

# Things I did great

- Instead of using a depth parameter, just use the div as a parent element and then the margin will be relative to the parent element!
- Icons and the getExtension() utils file really great use of that
- Creating files for specific things, great!!
- Great that you noticed that if you put the state to the div, that would affect the entire tree and not the specific folder, kudos to putting it in the correct spot

![Result](image.png)
