Title: 8kyu-Sum highest-and-lowest-number

Description:

Task

Sum all the numbers of a given array (cq.list), except the highest and lowest element(by value, not by index!).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

Mistakes: '[]' could be represented as string.length < 1, Instead of using reduce and trying to make it start from the first index until the next the last one, I could have just used a for loop and changed the index to start at index 1 instead of 0.
