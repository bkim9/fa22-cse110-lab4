1. What will happen at line 12 and why? If the code causes an error, explain why.^^
    Since the variable i is alive in line 12. i is 3 when exiting the for loop.
2. What will happen at line 13 and why? If the code causes an error, explain why.^^
    It returns 150. discountedPrice is declared in the for loop but with var. So the variable can be used in the funciton scope. The value 150 comes from the discounted value of the last element in prices.
3. What will happen at line 14 and why? If the code causes an error, explain why.^^
    It is 150. final Price is the round value of the discounted Price to the 2nd position below point. since the last value was 150 the value of finalPrice should be 150 as well.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    [50, 100, 150]. The expected list of discounted prices is returned.

5. What will happen at line 12 and why? If the code causes an error, explain why. (assume this function is called like the others: discountPrices[100, 200, 300], 0.5).
    Error happend, since i is not defined in line 12. The for loop's i is decared with let keyword which means that the variable i's scope is only in the for loop block.

6. What will happen at line 13 and why? If the code causes an error, explain why. 

This code returns an error. Since let makes discountedPrice to be only valid in the block it is declared, we cannot use it out of the block.

7. What will happen at line 14 and why? If the code causes an error, explain why.

    The logged value is 150. Since the variable finalPrice is declared in the same block the line 14 is in, the expected value of the finalPrice will be logged.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    [ 50, 100, 150 ] is returned. Since the list discounted is declared in the same block where the line 16 is, the expected list of the finalPrices will be returned.

9. What will happen at line 11 and why? If the code causes an error, explain why.
    ReferenceError: i is not defined. Since is is defined in for loop block which does not include the line 11, i is not defined at line 11. Therefore an error happened.

10. What will happen at line 12 and why? If the code causes an error, explain why. 
    the length of the list 3 is returned. Because the variable length is declared at line 4 which is in the same block where line 12 belongs. 

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    the function will return the list of expected prices. [50, 100, 150] since the value stored in the discounted is a reference to the numbers, the list can be modified without changing the value of the variable discounted.

12. Given the above Object, write the notation for: (These should be in your part2.md)
    A. Accessing the value of the name property in the student object
        student.name
    B. Accessing the value of the Grad Year property in the student object
        student["Grad Year"]
    C. Calling the function for the greeting property in the student object
        student.greeting()
    D. Accessing the name property of the object in the Favorite Teacher property in student
        student["Favorite Teacher"].name
    E. Access the first index in the array of the courseLoad property of the student object
        student.courseLoad[0]

13. Arithmetic
    A. '3' + 2 
        '32'
    B. '3' - 2
        1
    C. 3 + null
        3
    D. '3' + null
        '3null'
    E. true + 3
        4
    F. false + null
        0
    G. '3' + undefined
        '3undefined'
    H. '3' - undefined
        NaN
14. Comparison
    A. '2' > 1
        true
    B. '2' < '12'
        false
    C. 2=='2'
        true
    D. 2==='2'
        false
    E. true==2
        false
    F. true===Boolean(2)
        true
15. Explain  the difference between the == and === operators.
    === is more strict version of == it checks if the type is different or not as oppose to ==

16. Given the above Object, write a for ..in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number. 

17. If the function above is called with the follwing parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your **par2.md**). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.
    The result will be the list of numbers [2, 4, 6] because each number in the list will be doubled by the callback function.


18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. (this should be a JS file-part2-question18.js)

19. What is the output of the above code?
    1
    4
    3
    2 <- after 1 second
