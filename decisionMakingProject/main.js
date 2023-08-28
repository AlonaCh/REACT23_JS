let userName = 'Alona';

if (userName.length > 0) {
   console.log(`Hello, ${userName}`)
} else {
    console.log('Hello!')
}

let userQuestion = 'What would you choose?'

console.log(userName);
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 10) + 1;

let decicionStatements = '';
switch(randomNumber) {
    case 1:
      decicionStatements = "The stars say yes, go for it!";
      break;
    case 2:
      decicionStatements = "Trust your instincts and take the leap.";
      break;
      case 3:
      decicionStatements = "Hmm, better try again later.";
      break;
    case 4:
      decicionStatements = "Consider all options before making a move.";
      break;
      case 5:
      decicionStatements = "Outlook is bright, proceed with confidence.";
      break;
    case 6:
      decicionStatements = "Seek advice from a trusted friend before deciding";
      break;
      case 7:
      decicionStatements = "Signs point to unexpected opportunities.";
      break;
    case 8:
      decicionStatements = "It's a toss-up, make a choice and see what happens.";
      break;
      case 9:
        decicionStatements = "Take a step back and reassess before moving forward.";
        break;
      case 10:
        decicionStatements = "Not the right time, patience will bring better results.";
        break;
        default:
            decicionStatements = 'Enjoy!';
      // code block
  }
console.log(decicionStatements);