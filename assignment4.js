// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
})();

var onearray;
var twoarray;
var threearray;
var finalArray = [];

function getData()
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.mattbowytz.com/simple_api.json?data=interests", false);
  xhr.send();

  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "http://www.mattbowytz.com/simple_api.json?data=programming", false);
  xhr2.send();

  var xhr3 = new XMLHttpRequest();
  xhr3.open("GET", "http://www.mattbowytz.com/simple_api.json?data=comics", false);
  xhr3.send();

  var same = xhr.response;
  onearray = same.split(",");

  var same2 = xhr2.response;
  twoarray = same2.split(",");

  var same3 = xhr3.response;
  threearray = same3.split(",");

  trim(onearray);
  trim(twoarray);
  trim(threearray);
  onearray = trimQuote(onearray);
  twoarray = trimQuote(twoarray);
  threearray = trimQuote(threearray);
    onearray = trimQuoteEnd(onearray);
  twoarray = trimQuoteEnd(twoarray);
  threearray = trimQuoteEnd(threearray);
  // Add the trimed stuff to the final array
  finalArray = finalArray.concat((onearray));
  finalArray = finalArray.concat((twoarray));
  finalArray = finalArray.concat((threearray));


}
function searchData()
{
    var outputArray = [];

    var inputValue = document.getElementById("inputdog").value;

    if(inputValue == "")
    {
      document.getElementById("output").innerHTML = " ";
    }
    for (index = 0; index < finalArray.length; index++) 
    {
        var string1 = finalArray[index];
        for(index2 = (inputValue.length -1); index2 >= 0; index2-- )
        {
          
            if (string1[index2].toUpperCase() == inputValue[index2].toUpperCase() )
            {
              if(index2 == 0)
              {
                outputArray.push(string1);
                document.getElementById("output").innerHTML = outputArray;
                                // add to array?
              }
            }
            else
            {
              break;
            }
        }
    }


   // document.getElementById("output").innerHTML = inputValue;
}

function trim(inputArray)
{
  for (index = 0; index < inputArray.length; index++) 
  {
    // Split closed bracket
    if(inputArray[index].includes(']'))
    {
      var same = inputArray[index].split(']');
      inputArray[index] = same[0];
    }
    // Split open bracket
    if(inputArray[index].includes('['))
    {
      var same = inputArray[index].split('[');
      inputArray[index] = same[0];
    }
  }
  // Get rid of first three becasue they will always be the same and not needed.
  inputArray.shift();
  inputArray.shift();
  inputArray.shift();

  // Get rid of the last 2 becasue they are also useless
  inputArray.pop();
  inputArray.pop();
}

function trimQuote(inputArray)
{

  for (index = 0; index < inputArray.length; index++) 
  {
    var stringSame = inputArray[index];
    if(stringSame[0] == '"' || stringSame[0] == ' ')
    {
      var supersame = stringSame.slice(1);

      inputArray[index] = supersame;
    }
  }
  return inputArray;
}

function trimQuoteEnd(inputArray)
{
  for (index = 0; index < inputArray.length; index++) 
  {
    var stringSame = inputArray[index];

    if(stringSame[stringSame.length-1] == '"')
    {
      inputArray[index]  = stringSame.slice(0, -1);
    }
  }
  return inputArray;
}