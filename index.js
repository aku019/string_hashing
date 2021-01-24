const readLineSync= require('readline-sync');
const chalk = require('chalk');
const crypto = require('crypto');
function menu()
{

  console.clear();
console.log('************ This is all we offer ************\n ')



console.log('Enter 1 For md5 hashing\nEnter 2 For sha1 hashing\nEnter 3 For sha256 hashing\nEnter 4 For sha512 hashing\n')

const choice=readLineSync.question(chalk.green.bold('Which Hashing technique you want to use?\n'));
return choice;
}

const choice = menu();
proceedChoice(choice);

function proceedChoice(choice)
{
  //console.log(typeof(choice));
  //https://workat.tech/ide
  console.clear();
    const crypto = require('crypto');
 let algo;
// let hash;

const url=readLineSync.question(chalk.green.bold('Enter the string\n'));

switch (choice) {
  case "1":
//      algo = 'md5'; //could be sha1, sha256, sha512
//  hash = crypto.createHash(algo).update(url).digest('hex');
console.log(`The hash with md5 is ${md5(url)}`);

    break;
  case "2":
//      algo = 'sha1'; //could be sha1, sha256, sha512
//  hash = 
console.log(`The hash with sha1 is ${sha1(url)}`);

    break;
    case "3":
//      algo = 'sha256'; //could be sha1, sha256, sha512
//  hash = crypto.createHash(algo).update(url).digest('hex');
console.log(`The hash with sha256 is ${sha256(url)}`);

    break;
    case "4":
//      algo = 'sha512'; //could be sha1, sha256, sha512
//  hash = crypto.createHash(algo).update(url).digest('hex');
console.log(`The hash with sha512 is ${sha512(url)}`);

    break;
    default:
  console.log("You have entered the wrong choice!Try Again\n");
  const choice=menu();
  proceedChoice(choice);
  break;
}
const useAgain=readLineSync.question(chalk.green.bold('Enter 1 to  go back to main menu\nEnter any other key exit\n'));

if(useAgain==="1")
{
  const choice=menu();
  proceedChoice(choice);
}


}



function md5(code)
{
  algo="md5";
return crypto.createHash(algo).update(code).digest('hex');
}

function sh1(code)
{
 algo="sha1";
return crypto.createHash(algo).update(code).digest('hex');
}

function sha256(code)
{
algo="sha256";
return crypto.createHash(algo).update(code).digest('hex');
}

function sha512(code)
{
algo="sha512";
return crypto.createHash(algo).update(code).digest('hex');
}




// function string_hashing()
// {
// //  console.clear();
//   const url=readLineSync.question(chalk.green.bold('Enter the string\n'));


//  algo = 'sha1'; //could be sha1, sha256, sha512
//  hash = crypto.createHash(algo).update(url).digest('hex');
// console.log(`The hash with ${algo} is ${hash}`);

//  algo = 'sha256'; //could be sha1, sha256, sha512
//  hash = crypto.createHash(algo).update(url).digest('hex');
// console.log(`The hash with ${algo} is ${hash}`);

//  algo = 'sha512'; //could be sha1, sha256, sha512
//  hash = crypto.createHash(algo).update(url).digest('hex');
// console.log(`The hash with ${algo} is ${hash}`);

// }

