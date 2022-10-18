// Question 18
function clock() {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
}
setTimeout(clock, 1000);