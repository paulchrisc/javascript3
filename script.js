// Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const x = 23;
// if (x === 23) console.log(23);


// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991))
// console.log(calcAge(1993))
// console.log(calcAge(1993))

// function evenOrOdd(number) {
//     if(number % 2 == 0){
//       return "Even"
//     }else{
//     return "Odd"
//     }
//   }
  
//   console.log(evenOrOdd(3))

// function findOdd(arr) {
//     const count = {};
//     arr.forEach(num => {
//       count[num] = (count[num] || 0) + 1;
//     });
//     for (const num in count) {
//       if (count[num] % 2 !== 0) {
//         return parseInt(num);
//       }
//     }
//   }

//   console.log(findOdd(3,4,4,4,4,5,5,6,6,6,6,6,6))



// function quarterOf(month){

//   if(month <4){
//     return 1
//   }else if(month < 7){
//     return 2
// //   }else if(month < 10){
// //     return 3
// //   }else if(month < 13){
// //     return 4
// //   }
                    
  
// // }

// console.log(quarterOf(4))


// const temperatures = [3, -2, -6,-1, 9,'error', 13 ,17 ,1 ,14 ,9 ,5 , 'error'];


// 1) Understanding the problem
// - what is a temp amplitude: 
// difference between highest and lowest temp
//- how to compute min/max temps
//-what is a sensor error and what does it look like?


// 2) breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// -find min value in temp array 
// - subtract min from max and display(return)

// function tempAmplitude(temps){
//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i]
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//         }
//         console.log(max, min);
//         return max - min;

//     }


// const amplitude = tempAmplitude(temperatures);
// console.log(amplitude);

// //Problem 2

// // function should now receive 2 arrays of temps

// // under standing the problem
// // with 2 arrays, should we implement functionality twice?
// // no just merge the two arrays

// //2. breaking up into sub-problems
// // - merge 2 arrays

// function tempAmplitudeNew(t1, t2){
//     const temps = t1.concat(t2);

//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i]
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//         }
//         console.log(max, min);
//         return max - min;

//     }


// const amplitudeNew = tempAmplitudeNew(temperatures);
// console.log(amplitudeNew);


// const measureKelvin = function(){

//     const measurement ={
//         type : 'temp',
//         unit : 'celcius',
//         // value : Number(prompt ('Degrees celsius:'))
//         value: 10
//     }

//     console.table(measurement)
//     console.log(measureKelvin.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// console.log(measureKelvin());


// function tempAmplitudeBug(t1, t2){
//     const temps = t1.concat(t2);

//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i]
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//         }
//         console.log(max, min);
//         return max - min;

//     }


// const amplitudeBug = tempAmplitudeBug(temperatures);
// console.log(amplitudeBug);


// Given an array of forecasted maximum temperatures, the thermometer displays a 
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up 
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4


/* Understand the problem
    how to print array 
    add subsequent days

    print array
    add days increasing
    add variables as forecast data
*/

/* function (temp forecast)

    let i = start array from forecast; i < length of array ; i++
    day start = 1;
    let days = day ++
    return "it will be 17 degrees in 1 day, will be 21 degrees in 2 days..."

*/

const tempForecast1= [17, 21, 23]
const tempForecast2= [12, 5, -5, 0, 4]


function forecast(temps){
for(let i = 0; i < temps.length; i++){
        return daily = temps[i];
    }
    // for(let days = 1; days < temps.length; days++){
    //     return day(days[0])
    // }
}

const temperatureForecast = forecast([tempForecast1])
console.log(temperatureForecast[daily[i]])

 // function tempAmplitudeBug(t1, t2){
//     const temps = t1.concat(t2);

//     let max = temps[0];
// //     let min = temps[0];

// //     for(let i = 0; i < temps.length; i++){
// //         const curTemp = temps[i]
// //         if (typeof curTemp !== 'number') continue;
// //         if (curTemp > max) max = curTemp
// //         if(curTemp < min) min = curTemp
// //         }
// //         console.log(max, min);
// //         return max - min;

// //     }

// const amplitudeBug = tempAmplitudeBug(temperatures);
// // console.log(amplitudeBug);

