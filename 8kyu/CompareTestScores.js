// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// ========================Solution======================

function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let classAvg = (classPoints.reduce((acc,c) => acc + c, 0)) / classPoints.length;
    if (classAvg < yourPoints){
      return true;
    }else{
      return false
    }
  }

//   ===================or==================

  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  }
  