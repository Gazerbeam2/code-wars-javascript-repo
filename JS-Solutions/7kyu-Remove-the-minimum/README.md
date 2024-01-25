Title: 7kyu Remove the minimum

Description:

The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

- Input: [1,2,3,4,5], output = [2,3,4,5]
- Input: [5,3,2,1,4], output = [5,3,2,4]
- Input: [2,2,1,2,1], output = [2,2,2,1]

Mistakes: My first attempt at a solution failed because i didn't that using splice would mutate the original Array. I also forgot to use IndexOf method in order to locate the minimum number in the Array.

Things i learned: Using splice to remove elements in the middle of the Array. Using splice will mutate the original Array. Using indexOf to find the exact placement of the index of a item. Using the spread operator to create a copy of Array and also using the spread operator to apply a method to each element of the Array.
