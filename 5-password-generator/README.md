# 5. Random Password Generator

A password generator project that provides a random password everytime the length of the password is changed or to include numbers or to include characters is toggled. It also provides a copy button to copy the password to the clipboard.  

It uses Tailwind and react hooks like:
- useState : to manage state and reflect the changes in the UI
- useCallback : used to memoize functions, which means it returns a memoized version of the function that only changes if one of the dependencies has changed. Used for optimisation.
- useEffect : Used to execute a function everytime there's a change in the values of dependancy array. Executes on page load if no dependencies mentioned.
- useRef : used to get reference a DOM element without re-rendering the page
