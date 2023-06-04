function getRandomExtensionID(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class RandomStuff {
  getInfo() {
    const extensionID = getRandomExtensionID(10); // Generate a 10-character random ID

    return {
      id: extensionID,
      name: 'Random Stuff',
      blocks: [
        {
          opcode: 'genRanNum',
          blockType: 'reporter',
          text: 'Generate Random Number [num1] to [num2]',
          arguments: {
            num1: {
              type: 'number',
              defaultValue: 0
            },
            num2: {
              type: 'number',
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'flipCoin',
          blockType: 'reporter',
          text: 'Flip a Coin'
        },
        {
          opcode: 'rollDice',
          blockType: 'reporter',
          text: 'Roll Dice'
        },
        {
          opcode: 'randomBool',
          blockType: 'Boolean',
          text: 'Random Boolean'
        }
      ]
    };
  }

  genRanNum(args) {
    var randomNumber = getRandomNumber(args.num1, args.num2);
    return randomNumber;
  }

  flipCoin() {
    var headsTails = Math.round(Math.random());
    if (headsTails === 1) {
      return 'Heads';
    } else {
      return 'Tails';
    }
  }

  rollDice() {
    var roll = getRandomNumber(1, 6);
    return roll;
  }

  randomBool() {
    var randomBool = Math.round(Math.random()) === 1;
    return randomBool;
  }
}

Scratch.extensions.register(new RandomStuff());
