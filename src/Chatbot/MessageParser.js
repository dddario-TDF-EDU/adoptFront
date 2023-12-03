class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowercase.includes("adoptar") || lowercase.includes("como adoptar") || lowercase.includes("como puedo adoptar")) {
        this.actionProvider.handleAdoptarQuiz();
      }
  
      if (lowercase.includes("denunciar") || lowercase.includes("como denuncio")|| lowercase.includes("como puedo denunciar")) {
        this.actionProvider.handleDenunciarQuiz();
      }
  
      if (lowercase.includes("donar") || lowercase.includes("como donar") || lowercase.includes("como puedo donar")) {
        this.actionProvider.handleDonarQuiz();
      }
      else if(lowercase !== true ){
        this.actionProvider.handleErrorQuiz();
      }
  }
}
  
  export default MessageParser;