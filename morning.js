const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
function phoneNumber(arr){
    let res = '';
     arr = arr.map(String);
    res += `(${arr[0]+arr[1]+arr[2]}) `;
    res += `${arr[3] + arr[4] + arr[5]}-`;
    res += arr[6] + arr[7] + arr[8] + arr[9];
    return res;
};
console.log(phoneNumber(arr))

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

console.log(createPhoneNumber(arr))