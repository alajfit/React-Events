# React-Events
React JS Events and Data Changes


* When passing functions around it is always important to use .bind(this)
    * This helps us to keep scope
    * If not it will call it from the calling function scope

* onClick, onBlur, onFocus, onChange all send an event to a function
    * to pass data from the current target we must use .bind(this)

* By also adding the value of the props to the input we are also two way bound

* Important to note if the onChange wasnt on the input box you wouldnt be able to add text to the input box
    * this is because the virtual dom is rendering input box
