1. What was the bug?<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**The inputs are processed as strings not numbers. So the sum is concatenating the inputs.**
2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**I'll make line 11 to be 
      `let result = Number(num1) + Number(num2)` using the `Number` function.**