var Idd=[]
var x=1000;
Idd[0]=x


for(var i=1;i< 7;i++) {
    x=x+i;
    Idd[i]=x

}


const Ghazi  ={

    FullName:"Ghazi Samer",
    Department:"Administration",
    Level:"Senior",
    //imageURl:https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact ,
    
}

const Lana  ={
    FullName:"Lana Ali",
    Department:"Finance",
    Level:"Senior",
    //imageURl:https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact ,
    

}


const Tamara  ={
    FullName:"Tamara Ayoub",
    Department:"",
    Level:"Senior",
    //imageURl:https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact ,
   
}




const Safi  ={
    FullName:"Safi Walid",
    Department:"Administration",
    Level:"Mid-Senior",
    //imageURl:https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact ,
   
}


const Omar  ={
    FullName:"Omar Zaid",
    Department:"Development",
    Level:"Senior",
    //imageURl:https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact ,
   
}


const Rana  ={
    FullName:"Rana Saleh",
    Department:"Development",
    Level:"Junior",
    //imageURl:https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact ,
   
}


const Hadi ={
    FullName:"Hadi Ahmad",
    Department:"Finance",
    Level:"Mid-Senior",
    //imageURl:https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact ,
   
}
//calculate random Number
function getRandomNum(min,max,length){
    var num='';
    for(var i=0;i<length;i++){
        var range = max-min;
        var rand = Math.random();
        num += (min+Math.round(rand*range)) +'';
    }
    return num;
}

var sum=getRandomNum(0,9,4);





// add Employee Id && salary
for(var i=0;i<7;i++){
if(i===0){
    Ghazi.EmployeeID =Idd[i];
    while(sum<1500||sum>2000){
        sum=getRandomNum(0,9,4);}
    
    Ghazi.salary=sum-(sum*.075);
    console.log("Ful Name=  "+Ghazi.FullName);
    console.log("salary= "+Ghazi.salary);
    sum=getRandomNum(0,9,4);
    
    
}else if(i===1){
    Lana.EmployeeID =Idd[i];
    while(sum<1500||sum>2000){
        sum=getRandomNum(0,9,4);}
    
    Lana.salary=sum-(sum*.075);
    console.log("Ful Name=  "+Lana.FullName);
    console.log("salary= "+Lana.salary);
    sum=getRandomNum(0,9,4);


}
else if(i===2){
    Tamara.EmployeeID = Idd[i];

    while(sum<1500||sum>2000){
        sum=getRandomNum(0,9,4);}
    
    Tamara.salary=sum-(sum*.075);
    console.log("Ful Name=  "+Tamara.FullName);
    console.log("salary= "+Tamara.salary);
    sum=getRandomNum(0,9,4);
}
else if(i===3){
    Safi.EmployeeID = Idd[i];

    while(sum<1000||sum>1500){
        sum=getRandomNum(0,9,4);}
    
    Safi.salary=sum-(sum*.075);
    console.log("Ful Name=  "+Safi.FullName);
    console.log("salary= "+Safi.salary);
    sum=getRandomNum(0,9,4);
}
else if(i===4){
    Omar.EmployeeID = Idd[i];

    while(sum<1500||sum>2000){
        sum=getRandomNum(0,9,4);}
    
    Omar.salary=sum-(sum*.075);
    console.log("Ful Name=  "+Omar.FullName);
    console.log("salary= "+Omar.salary);
    sum=getRandomNum(0,9,4);
}
else if(i===5){
    Rana.EmployeeID = Idd[i];

    while(sum<500||sum>1000){
        sum=getRandomNum(0,9,4);}
    
    Rana.salary=sum-(sum*.075);
    console.log("Ful Name=  "+Rana.FullName);
    console.log("salary= "+Rana.salary);
    sum=getRandomNum(0,9,4);
}
else if(i===6){
    Hadi.EmployeeID = Idd[i];

    while(sum<1000||sum>1500){
        sum=getRandomNum(0,9,4);}
    
    Hadi.salary=sum-(sum*.075);
    console.log("Ful Name=  "+Hadi.FullName);
    console.log("salary= "+Hadi.salary);
}

}




