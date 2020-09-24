'use strict'

// Recursion 
// ㄴ a programming pattern
// ㄴ useful in a situation when a task can be split into several tasks of the same kind

// Two Ways of Thinking
// (1): Iterative thinking: for loop
// (2): Recursive thinking: if...else
//   ㄴ recursive solution is usually shorter than iterative solution

// Recursion Depth: maximal number of nested calls
// ㄴ JavaSCript engine limits the depth - 10000

// Execution Context
// ㄴ internal data structure that contains details about the execution of a function 
//    - where the control folw is now
//    - the current variables
//    - the value of 'this' and few other internal details
// ㄴ Below happens when a callback function is invoked
//    - (1) The current function is paused
//    - (2) Its execution context is remembered in execution context stack(data structure)
//    - (3) The callback function is executed
//    - (4) The original context is retrieved from the stack and the outer function is continued 


