//console.log("get the akan name")

//get the birthday input
//get the gender input
//after submitting the information selected, get alert with the Akan name
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] 


   function dateInput() {
    let bDate = document.getElementById("birthday").innerHTML;  
     
    
   }

   function genderInput() {
    let genderValue = document.getElementById("gender").innerHTML;
    if (genderValue = Male) {
      return (maleNames);
      
    } else {
      return (femaleNames);
      
    }
  
   }

function submitFunction() {
  alert(maleNames)
}




