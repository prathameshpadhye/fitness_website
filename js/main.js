function Myfunction() {
          
    let h = document.getElementById("height").value;
    let m = document.getElementById("weight").value;
    let h2=(h/100)**2
    let bmi=m/h2
    document.getElementById("demo").innerHTML = bmi;
}
function Myfunction2() {
    
    let he = document.getElementById("height2").value;
    let w = document.getElementById("waist_c").value;
    let whtr=w/he
    document.getElementById("demo2").innerHTML = whtr;
}