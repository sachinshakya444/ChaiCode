function prepareChai(type){
    if(type=="Masala Chai")
    {
        console.log("Adding spices to the chai");
    }
    else{
        console.log("Prepare regular chai");
    }
}

prepareChai("Masala Chai");
prepareChai("Ginger Chai");

function calculateTotal(amount)
{
    if((typeof amount)== String)
    amount = Number(amount)
    // if(amount>1000)
    // {
    //     return amount*0.9;
    // }
    // return amount;
    
    return amount>1000 ? amount*0.9 :amount;
}

let finalbill = calculateTotal(1200);
console.log(finalbill);
console.log(calculateTotal(1300));

/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow down" print karo. Agar "green" hai, toh "Go" print karo.


*/

function trafficLight(color)
{
    switch(color){
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Slow down");
            break;
        case "green":
            console.log("Go");
            break;
            default:
                console.log("Chalan kaat do");
    }
}

trafficLight("yellow");

function checktruthyValue(value){
    if(value){
        console.log("Truthy");
    }
    else{
        console.log("False");
    }
}

checktruthyValue(1);
checktruthyValue(0);
checktruthyValue("hitesh");
checktruthyValue(" ");
checktruthyValue([]);
checktruthyValue([1,2,3]);
checktruthyValue({});
checktruthyValue({name:"scar"});

function login(username,password,loginIp)
{
    if(username === 'admin' && (password === "1234" || loginIp == "127")){
        console.log("login successful");
    }
    else{
        console.log("Invalid credentials");
    }
}

login("admin",1234,127);



