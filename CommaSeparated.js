
function formatNum(num) {
    var STEP = 3;
    var DELIMITER = ',';
    var str = '' + num;
    var arr = str.split('');
    var len = arr.length;
   
    for(var i = len - STEP; i > 0; i -= STEP) {
        arr.splice(i, 0, DELIMITER);
    }
   
    return arr.join('');
  };
   
  function formatNum2(num) {
    return (num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
   
  console.log(formatNum(12345678));  // -> "12,345,678"
  console.log(formatNum2(12345678)); // -> "12,345,678"
