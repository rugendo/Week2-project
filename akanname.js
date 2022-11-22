//console.log("get the akan name")

//get the birthday input
//get the gender input
//after submitting the information selected, get alert with the Akan name
//const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

//const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] 

    
  function getInput() {
    //get the date and gender inputs from the user
    let genderValue = document.getElementById("gender").value;
    let getDateOfBirth = document.getElementById("birthday").value;  
    
    if (getDateOfBirth == ""){
      alert("Select Date of Birth");
    }
    //get the day of week
    let date = new Date(getDateOfBirth);
    let eBirthday = date.getDay();    
    //the Akan name Arrays
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (genderValue == ("Female") && getDateOfBirth != ""){
      alert("Your Akan name is" + " " + femaleNames[eBirthday]);
    }
    else if (genderValue == ("Male")  && getDateOfBirth != ""){
      alert("Your Akan name is" + " " + maleNames[eBirthday]);
    }
    
  }

getInput();






