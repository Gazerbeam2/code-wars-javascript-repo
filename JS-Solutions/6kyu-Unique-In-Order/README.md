# Title: Unique In Order

## Description:

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

> uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
>
> uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
>
> uniqueInOrder([1,2,2,3,3]) == [1,2,3]

### Thoughts:

There a couple of things that i had to learn with this challenge. In my original attempt, the three main errors were: Incorrect logic with the IF statement, A syntax error with the variable created to push the new array values into and changing the ending condition for the loop. I needed to check the previous array values buy using emptyArray.length - 1.
