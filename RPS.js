function physics() {
    document.getElementById("math").style.display = "none";
    document.getElementById("mathPics").style.display = "none";
    document.getElementById("mathButtons").style.display = "none";

    document.getElementById("physicsPics").style.display = "block";
}

function quadratic() {
    var strA = prompt("Enter the value of 'a'.");
    var strB = prompt("Enter the value of 'b'.");
    var strC = prompt("Enter the value of 'c'.");

    a = parseFloat(strA);
    b = parseFloat(strB);
    c = parseFloat(strC);

    var left = ((b*-1)/(2*a));
    var right = Math.sqrt((b*b)-(4*a*c))/(2*a);

    var ans1 = left + right;
    var ans2 = left - right;

    alert("Your answer is: " + "X= " + ans1 + ", " + ans2);
}

function pythag() {
    var strA = prompt("Enter the value of 'a'");
    var strB = prompt("Enter the value of 'b'");

    a = parseFloat(strA);
    b = parseFloat(strB);

    var ans = (a*a)+(b*b);
    var rootAns = Math.sqrt(ans);

    alert("The value of C squared is " + ans + " and the root of that is " + rootAns);
}
