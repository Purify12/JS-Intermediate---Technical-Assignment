// Soal 03

function flatten(ary) {
    var ret = [];
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        ret = ret.concat(flatten(ary[i]));
      } else {
        ret.push(ary[i]);
      }
    }
    return ret;
  }
  const arr = flatten([[10], [9, 7, 1], [2, 8]]);

  
  function searchInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        let d = arr.indexOf(arr[i]);
        return d;
      }
    }
  }
  

  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  