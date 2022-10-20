1. What will happen at line 12 and why? If the code causes an error, explain why.^^<br />
    **Since the variable i is alive in line 12. i is 3 when exiting the for loop.**
2. What will happen at line 13 and why? If the code causes an error, explain why.^^<br />
    **It returns 150. discountedPrice is declared in the for loop but with var. So the variable can be used in the funciton scope. The value 150 comes from the discounted value of the last element in prices.**
3. What will happen at line 14 and why? If the code causes an error, explain why.^^<br />
    **It is 150. final Price is the round value of the discounted Price to the 2nd position below point. since the last value was 150 the value of finalPrice should be 150 as well.**
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.<br />
    **[50, 100, 150]. The expected list of discounted prices is returned.**

5. What will happen at line 12 and why? If the code causes an error, explain why. (assume this function is called like the others: discountPrices[100, 200, 300], 0.5).<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**Error happend, since i is not defined in line 12. The for loop's i is decared with let keyword which means that the variable i's scope is only in the for loop block.**

6. What will happen at line 13 and why? If the code causes an error, explain why. <br />
    &nbsp;&nbsp;&nbsp;&nbsp;**This code returns an error. Since let makes discountedPrice to be only valid in the block it is declared, we cannot use it out of the block.**

7. What will happen at line 14 and why? If the code causes an error, explain why.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**The logged value is 150. Since the variable finalPrice is declared in the same block the line 14 is in, the expected value of the finalPrice will be logged.**

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**[ 50, 100, 150 ] is returned. Since the list discounted is declared in the same block where the line 16 is, the expected list of the finalPrices will be returned.**

9. What will happen at line 11 and why? If the code causes an error, explain why.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**ReferenceError: i is not defined. Since is is defined in for loop block which does not include the line 11, i is not defined at line 11. Therefore an error happened.**

10. What will happen at line 12 and why? If the code causes an error, explain why. <br />
    &nbsp;&nbsp;&nbsp;&nbsp;**the length of the list 3 is returned. Because the variable length is declared at line 4 which is in the same block where line 12 belongs.**

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**the function will return the list of expected prices. [50, 100, 150] since the value stored in the discounted is a reference to the numbers, the list can be modified without changing the value of the variable discounted.**

12. Given the above Object, write the notation for: (These should be in your part2.md)
    <br />
    A. Accessing the value of the name property in the student object
    
    &nbsp;&nbsp;&nbsp;&nbsp; **student.name**

    B. Accessing the value of the Grad Year property in the student object <br />
    &nbsp;&nbsp;&nbsp;&nbsp;**student["Grad Year"]**
    
    C. Calling the function for the greeting property in the student object <br />
    &nbsp;&nbsp;&nbsp;&nbsp;**student.greeting()**
    
    D. Accessing the name property of the object in the Favorite Teacher property in student

    &nbsp;&nbsp;&nbsp;&nbsp;**student["Favorite Teacher"].name**

    E. Access the first index in the array of the courseLoad property of the student object
 
    &nbsp;&nbsp;&nbsp;&nbsp;**student.courseLoad[0]**

13. Arithmetic<br />
    A. '3' + 2 = **'32'**<br />
    B. '3' - 2 = **1**<br />
    C. 3 + null = **3**<br />
    D. '3' + null = **'3null'**<br />
    E. true + 3 = **4**<br />
    F. false + null = **0**<br />
    G. '3' + undefined = **'3undefined'**<br />
    H. '3' - undefined = **NaN**<br />
14. Comparison<br />
    A. '2' > 1 = **true**<br />
    B. '2' < '12'=**false**<br />
    C. 2=='2' = **true**<br />
    D. 2==='2' = **false**<br />
    E. true==2 = **false**<br />
    F. true===Boolean(2) = **true**<br />
15. Explain  the difference between the == and === operators.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**=== is more strict version of == it checks if the type is different, === output false as oppose to == which converts them to the same type**

16. Given the above Object, write a for ..in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number. <br />
    &nbsp;&nbsp;&nbsp;&nbsp;**The code is in part2-question16.js**<br />

17. If the function above is called with the follwing parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your **par2.md**). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. <br />
    &nbsp;&nbsp;&nbsp;&nbsp;**The result will be the list of numbers [2, 4, 6] because each number in the list will be doubled by the callback function.**<br/>


18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. (this should be a JS file-part2-question18.js)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;**I used setInterval to implement the clock.**
19. What is the output of the above code?<br />
    **1<br />
      4<br />
      3<br />
      2 <- after 1 second**
