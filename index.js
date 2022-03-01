
const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});






menu();




rl.on('line', (num) => {

    console.log(chalk.blue(`You choose: ${num}`));




    switch(num) {

        case "1":

          action1();

          break;

        case "2":

          action2();

          break;




        case "3":

            rl.close();

            break;

        default:

          console.log('Dont know what you want...')

      }




    menu();

});

  

//event handle at close

rl.on('close', function () {

    console.log(chalk.yellow("BYE BYE !"));

    process.exit(0);

});

