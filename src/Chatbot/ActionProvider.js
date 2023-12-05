
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello friend.");
      this.addMessageToState(message);
    };
  
    handleAdoptarQuiz = () => {
      const message = this.createChatBotMessage(
        "Fantastico. Aqui tenemos una respuesta!",
        {
          widget: "adoptarQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
  
    handleDenunciarQuiz = () => {
      const message = this.createChatBotMessage(
        "Bien. Aqui tenemos una respuesta!",
        {
          widget: "denunciarQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
  
    handleDonarQuiz = () => {
      const message = this.createChatBotMessage(
        "Excelente. Aqui tenemos una respuesta!",
        {
          widget: "donarQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;