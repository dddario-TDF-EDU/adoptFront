import "./options.css";

const Options = (props) => {
  const options = [
    {
      text: "Adoptar",
      handler: props.actionProvider.handleAdoptarQuiz,
      id: 1,
    },
    { text: "Denunciar",
      handler: props.actionProvider.handleDenunciarQuiz,
      id: 2 },
    { text: "Donar", 
      handler: props.actionProvider.handleDonarQuiz, 
      id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;