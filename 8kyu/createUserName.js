// write a function that adds the username property to each object in the input array:

// var list1 = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
//   ];

//   The value of the username property is composed by concatenating:

// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.


// ========================================================================solution==============================================================================

function addUsername(list) {
    let newDate = new Date()
    let currentYear = newDate.getFullYear()
    list.forEach(function(x){
       let userName = x.firstName.toLowerCase() + x.lastName[0].toLowerCase() + (currentYear - x.age) 
       x.username = userName
     })
     return list
   }


//    ============================or===========================================

   
function addUsername(list) {
    return list.map(function(x){ 
      x.username = x.firstName.toLowerCase() + x.lastName[0].toLowerCase() + (new Date().getFullYear()-x.age);
      return x;
    });
  }

