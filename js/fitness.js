function calbmi() {
  let h = document.getElementById("height").value;
  let m = document.getElementById("weight").value;
  let h2 = (h / 100) ** 2;
  let bmi = m / h2;
  document.getElementById("demo").innerHTML = "Your BMI is " + bmi;
  if (bmi < 18.5) {
    document.getElementById("bmicategory").innerHTML =
      "You are Underweight category";
  }
  if (24.9 > bmi && bmi >= 18.5) {
    document.getElementById("bmicategory").innerHTML =
      "You are Normal weight category";
  } else if (29.9 > bmi && bmi >= 24.9) {
    document.getElementById("bmicategory").innerHTML =
      "You are Overweight category";
  } else if (34.9 > bmi && bmi >= 29.9) {
    document.getElementById("bmicategory").innerHTML =
      "You are Obesity Class I category";
  } else if (39.9 > bmi && bmi >= 34.9) {
    document.getElementById("bmicategory").innerHTML =
      "You are Obesity Class II category";
  } else if (bmi >= 39.9) {
    document.getElementById("bmicategory").innerHTML =
      "You are Obesity Class III category";
  }
}
function calwhtr() {
  let he = document.getElementById("height2").value;
  let w = document.getElementById("waist_c").value;
  let whtr = w / he;
  document.getElementById("val_whtr").innerHTML = "Your WHtR is " + whtr;
}
function rec_whtr() {
  let man = document.getElementById("male").checked;
  let woman = document.getElementById("female").checked;
  let age = document.getElementById("Age").value;
  let he = document.getElementById("height2").value;
  let w = document.getElementById("waist_c").value;
  let whtr = w / he;
  document.getElementById("age_para").innerHTML = "Your age is "+age;
  // console.log(man)
  // console.log(woman)
  if (age > 15) {
    if (man == true) {
      if (whtr <= 0.34) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "1slim.html";
        document.body.appendChild(a);
      } else if (whtr > 0.34 && whtr <= 0.42) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "1slim.html";
        document.body.appendChild(a);
      } else if (whtr > 0.42 && whtr <= 0.52) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "2normal.html";
        document.body.appendChild(a);
      } else if (whtr > 0.52 && whtr <= 0.57) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "3overweight.html";
        document.body.appendChild(a);
      } else if (whtr > 0.57 && whtr <= 0.62) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "3overweight.html";
        document.body.appendChild(a);
      } else {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "3overweight.html";
        document.body.appendChild(a);
      }
    }
    else if ((woman = true)) {
      if (whtr <= 0.34) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "1slim.html";
        document.body.appendChild(a);
      } else if (whtr > 0.34 && whtr <= 0.41) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "1slim.html";
        document.body.appendChild(a);
      } else if (whtr > 0.41 && whtr <= 0.48) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "2normal.html";
        document.body.appendChild(a);
      } else if (whtr > 0.48 && whtr <= 0.53) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "3overweight.html";
        document.body.appendChild(a);
      } else if (whtr > 0.53 && whtr <= 0.57) {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "3overweight.html";
        document.body.appendChild(a);
      } else {
        let a = document.createElement("a");
        var link = document.createTextNode("Go to recommendation page");
        a.appendChild(link);
        a.title = "This is Link";
        a.href = "3overweight.html";
        document.body.appendChild(a);
      }
    }
  }
  else if (age < 15) {
    if (whtr <= 0.34) {
      let a = document.createElement("a");
      var link = document.createTextNode("Go to recommendation page");
      a.appendChild(link);
      a.title = "This is Link";
      a.href = "1slim.html";
      document.body.appendChild(a);
    } else if (whtr > 0.34 && whtr <= 0.45) {
      let a = document.createElement("a");
      var link = document.createTextNode("Go to recommendation page");
      a.appendChild(link);
      a.title = "This is Link";
      a.href = "1slim.html";
      document.body.appendChild(a);
    } else if (whtr > 0.45 && whtr <= 0.51) {
      let a = document.createElement("a");
      var link = document.createTextNode("Go to recommendation page");
      a.appendChild(link);
      a.title = "This is Link";
      a.href = "2normal.html";
      document.body.appendChild(a);
    } else if (whtr > 0.51 && whtr <= 0.64) {
      let a = document.createElement("a");
      var link = document.createTextNode("Go to recommendation page");
      a.appendChild(link);
      a.title = "This is Link";
      a.href = "3overweight.html";
      document.body.appendChild(a);
    } else {
      let a = document.createElement("a");
      var link = document.createTextNode("Go to recommendation page");
      a.appendChild(link);
      a.title = "This is Link";
      a.href = "3overweight.html";
      document.body.appendChild(a);
    }
  }
}
