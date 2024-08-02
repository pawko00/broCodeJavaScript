const PI = 3.14;


if(PI == "3.14"){
    console.log("It's PI!;")
}else{
    console.log("It's not PI!")
}


if(PI === "3.14"){   //compares data type as well, not only the value
    console.log("It's PI!;")
}else{
    console.log("It's not PI!")
}

if(PI !== "3.14"){   //compares data type as well, not only the value
    console.log("It's NOT PI(datatype or value)!;")
}else{
    console.log("It's  PI!")
}