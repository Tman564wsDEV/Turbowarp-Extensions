function getRandomExtensionID(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }
  
  class name {
    getInfo() {
      const extensionID = getRandomExtensionID(10); // Generate a 10-character random ID
  
      return {
        id: extensionID,
        name: 'name',
        blocks: [