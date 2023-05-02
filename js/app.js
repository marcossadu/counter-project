// Tu código aquí.

let counter = 0;

document.querySelector(".nextBtn").addEventListener("click",() => {

    counter++;

    document.querySelector("#counter").innerHTML= counter;
    if(counter > 0 ){
        document.querySelector("#counter").style.color= "green";

    }
        
    else if(counter < 0){
        document.querySelector("#counter").style.color= "red";
    }

    else{counter = 0 
        document.querySelector("#counter").style.color= "grey";
    }
});

document.querySelector(".prevBtn").addEventListener("click",() => {

    counter--;

    document.querySelector("#counter").innerHTML= counter;
    if(counter > 0 ){
        document.querySelector("#counter").style.color= "green";

    }
        
    else if(counter < 0){
        document.querySelector("#counter").style.color= "red";
    }

    else{counter = 0 
        document.querySelector("#counter").style.color= "grey";
    }
})
