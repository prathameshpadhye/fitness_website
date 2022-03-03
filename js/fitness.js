function calbmi() {
          
    let h = document.getElementById("height").value;
    let m = document.getElementById("weight").value;
    let h2=(h/100)**2
    let bmi=m/h2
    document.getElementById("demo").innerHTML = "Your BMI is "+bmi; 
    if (bmi<18.5) {
        document.getElementById("bmicategory").innerHTML = "You are Underweight category";
    }
    if (24.9>bmi && bmi>=18.5) {
         document.getElementById("bmicategory").innerHTML = "You are Normal weight category";
     }
    else if (29.9>bmi && bmi>=24.9) {
        document.getElementById("bmicategory").innerHTML = "You are Overweight category";
    }
    else if (34.9>bmi && bmi>=29.9) {
        document.getElementById("bmicategory").innerHTML = "You are Obesity Class I category";
    }
    else if (39.9>bmi && bmi>=34.9) {
        document.getElementById("bmicategory").innerHTML = "You are Obesity Class II category";
    }
    else if (bmi>=39.9) {
        document.getElementById("bmicategory").innerHTML = "You are Obesity Class III category";
    }
}
function calwhtr() {
    
    let he = document.getElementById("height2").value;
    let w = document.getElementById("waist_c").value;
    let whtr=w/he
    document.getElementById("val_whtr").innerHTML = "Your WHtR is "+whtr;
}
function rec_whtr() {
    let man= document.getElementById("male").checked;
    let woman= document.getElementById("female").checked;
    let age= document.getElementById("Age").value
    let he = document.getElementById("height2").value;
    let w = document.getElementById("waist_c").value;
    let whtr=w/he
    document.getElementById("age_para").innerHTML = age;
    // console.log(man)
    // console.log(woman)
    if (age>15) {
        if (man==true) {
         if (whtr) {
             
         }   
        }
        if (woman=true) {
            
        }
        
    }
    else if (age<15) {
        
    }
    }