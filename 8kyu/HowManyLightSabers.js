// write the function that

//     accepts the name of a programmer, and
//     returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18


// ==========================Solution================================



function howManyLightsabersDoYouOwn(name) {
    let n = name.toLowerCase();
    return n == 'zach' ? 18 : 0;
  }

  console.log(howManyLightsabersDoYouOwn('Zach'))