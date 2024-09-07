//   for

array = [12,23,34,54,65,56,77,59]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);   
}


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i+`*`+j+`=`+i*j);
    }      
}


//    break and continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break
    }
    console.log(`value of i is ${index}`);
}

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        continue
    }
    console.log(`value of i is ${index}`);
}