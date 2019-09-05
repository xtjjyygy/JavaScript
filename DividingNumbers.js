var selfDividingNumbers = function (n) {
  var num = n;
  var flag = true;
  while(num) {
    if (n%(num%10) === 0) {
      num = Math.floor(num/10)
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};

result = selfDividingNumbers(15)
console.log(result)
