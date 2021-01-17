

const picAnim = document.getElementById("picAnimate");
const submit = document.getElementById("submitBtn");

function encryptBtn() {

    //--------------------------------------------Testing
    const pass = document.getElementById("rawInput").value;

    //Hash class Testing
    let enc = new Hash(pass);

    const test = enc.moveCharacter();

    console.log(test);
    //const completed {
    //    width: ''
    //};
    if (test != '') {
        document.getElementById('bar').style.setProperty('width', '100%');
    }
    else {
        document.getElementById('bar').style.setProperty('width', '1%');
    }
    //----------------------------------------------


}

//-------------------------------------------Hash Class
class Hash {

    constructor(password) {
        this.password = password;
    }

    keys = {
        upper: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '1234567890',
        special: "!@#$%^&*()-_=+{[}]|\:;\"'<,>.?/"
    };


    //Master Key
    randomNumberString() {
        const length = this.password.length;
        let num = '';

        for (let i = 0; i < length; i++) {
            num += Math.floor((Math.random() * 10));
        }
        document.getElementById("keyInput").value = num;
        return num;
    }

    //Hashed Password
    moveCharacter() {
        const pass = this.password;
        let keySwitch;
        const randomNumber = this.randomNumberString();
        let hashPass = "";
        
        //determine which keys object to use
        /*
         * if the number indexed is between 0-4 it will use upper obj, if the number indexed is 
         * between 5-9 then is will be lower obj
         */


        for (let i = 0; i < pass.length; i++) {
            if (parseInt(randomNumber.substring(i, i + 1)) < 5) {
                hashPass += this.moveUp(i, randomNumber, this.keys.special);
                
                //console.log(`the number is between 0-4: the number is ${randomNumber}`);
            } else if (parseInt(randomNumber.substring(i, i + 1)) < 10) {
                hashPass += this.moveUp(i, randomNumber, this.keys.numbers);
            }
        }
        document.getElementById("hashedPass").value = hashPass;
        return hashPass;


        //find amount of spaces to move up
        
    }

    //returns a letter
    moveUp(i, ran, obj) {
        let firstNum = parseInt(ran.charAt(i));
        let secondNum = ran.charAt(i + 1) === NaN ? parseInt(ran.charAt(i + 1)) :( Math.floor(Math.random() * 10));
        let count = 0;

        console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);

        for (let i = 0; i < firstNum * secondNum; i++) {

            if (this.keys.numbers[count] === undefined) {
                count = 0;
                console.log(`reset ${count}`);
            } else {
                console.log(count)
                count += 1;
            }
        }
        console.log(`Out of moveUP, final character is: ${this.keys.upper.charAt(count)}`);
        return this.keys.special.charAt(count);
    }
}


//--------------------------------------------



//function picAnimation() {

//    //Triangle Animation
//    if (submit.onclick) {
//        picAnim.animate([
//            { transform: 'rotate(360deg)' },
//        ],
//            {
//                duration: 3000,
//                iterations: 1
//            });

//    }
//}



