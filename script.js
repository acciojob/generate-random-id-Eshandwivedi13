function makeid(l) {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';//create a string of all possible characters
  let result = '';//store randomSubString
  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);//Math.floor to removeDecimal & give lower value
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Do not change the code below.
const l = prompt("Enter a number."); 
alert(makeid(l));
