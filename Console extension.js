function getRandomExtensionID(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

class ConsoleExtension {
  getInfo() {
    const extensionID = getRandomExtensionID(10); // Generate a 10-character random ID

    return {
      id: extensionID,
      name: 'Console Extension',
      blocks: [
        {
          opcode: 'logToConsole',
          blockType: 'command',
          text: 'Log [VALUE] to console',
          arguments: {
            VALUE: {
              type: 'string',
              defaultValue: 'Script executed'
            }
          }
        },
        {
          opcode: 'warnToConsole',
          blockType: 'command',
          text: 'Warn [VALUE] to console',
          arguments: {
            VALUE: {
              type: 'string',
              defaultValue: 'Script Warning'
            }
          }
        },
        {
          opcode: 'errorToConsole',
          blockType: 'command',
          text: 'Error [VALUE] to console',
          arguments: {
            VALUE: {
              type: 'string',
              defaultValue: 'Error Warning'
            }
          }
        }
      ],
      color1: '#FF8C1A',
      color2: '#DB7C00'
    };
  }

  logToConsole(args) {
    console.log(args.VALUE);
  }

  warnToConsole(args) {
    console.warn(args.VALUE);
  }

  errorToConsole(args) {
    console.error(args.VALUE);
  }
}

Scratch.extensions.register(new ConsoleExtension());
