var input = "the quick brown fox";

var firstToUpperCase = function (strUser) {
  var temp = strUser.split(" ");
  console.log(temp);
  var output = [];
  for (var i = 0; i < temp.length; i++) {
    output.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
  }
  return output.join(" ");
};

console.log(firstToUpperCase(input));
