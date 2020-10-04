function mathTicker() {
    document.getElementById("mathTicker").style.display = "none";
    document.getElementById("physics").style.display = "none";
    document.getElementById("physicsPics").style.display = "none";
    document.getElementById("physicsTicker").style.display = "block";

    document.getElementById("mathButtons").style.display = "block";
    document.getElementById("mathPics").style.display = "block";
    document.getElementById("math").style.display = "block";

    document.getElementById("comingSoon").style.display = "none";

}

function physicsTicker() {
    document.getElementById("mathTicker").style.display = "block";
    document.getElementById("physicsTicker").style.display = "none";

    document.getElementById("mathButtons").style.display = "none";
    document.getElementById("mathPics").style.display = "none";
    document.getElementById("math").style.display = "none";

    document.getElementById("comingSoon").style.display = "block";

    //document.getElementById("physicsPics").style.display = "block"
    //document.getElementById("physics").style.display = "block";
}

function quadratic() {
    var strA = prompt("Enter the value of 'a'.");
    var strB = prompt("Enter the value of 'b'.");
    var strC = prompt("Enter the value of 'c'.");

    a = parseFloat(strA);
    b = parseFloat(strB);
    c = parseFloat(strC);

    var ans1;
    var ans2;

    var top = (b*b)-(4*a*c); 
    var left = ((b*-1)/(2*a));
    var right = Math.sqrt((top))/(2*a);
    var strTop = top.toString();

    if (strTop.charAt(0) == "-") {
        top = top * -1;
        right = Math.sqrt((top))/(2*a);
        ans1 = left + right;
        ans2 = left - right;

        alert(ans1 + "i, " + ans2 + "i");
    }else {
        ans1 = left + right;
        ans2 = left - right;

        alert(ans1 + ", " + ans2);
    }
//var left = ((b*-1)/(2*a));
//var right = Math.sqrt((b*b)-(4*a*c))/(2*a);
}

function pythag() {
    var strA = prompt("Enter the value of 'a'");
    var strB = prompt("Enter the value of 'b'");

    a = parseFloat(strA);
    b = parseFloat(strB);

    var ans = (a*a)+(b*b);
    var rootAns = Math.sqrt(ans);

    alert("The value of C squared is " + ans + " and the value of C is " + rootAns);
}

function circArea() {
    var strRad = prompt("Enter the value of 'r' or radius");

    rad = parseFloat(strRad);

    radRad = rad*rad;

    var ans = Math.PI*radRad;

    alert("The value of A or Area is " + ans);
}

function circum() {
    var strRad = prompt("Enter the value of 'r' or radius");

    rad = parseFloat(strRad);

    ans = rad*2*Math.PI;

    alert("The value of C or Circumference is " + ans);
}
