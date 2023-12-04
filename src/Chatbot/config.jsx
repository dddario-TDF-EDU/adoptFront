import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options";
import Quiz from "./Quiz/Quiz";

export const config = {
  botName: "Adopt-chat",
  initialMessages: [
    createChatBotMessage(`Hola! Como podemos ayudarte?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "adoptarQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Como puedo Adoptar?",
            answer:
              "Debes ser mayor de 21 años, estar registrado. Luego de seleccionar la mascota interesada, se llevara adelante un asesoramiento para completar la adopcion.",
            id: 1,
          },
          {
            question: "Hay algo mas que debo saber?",
            answer:
              "Si! Cada solicitud es analizada por un experto para garantizar el bienestar del adoptante y la mascota.",
            id: 2,
          },
        ]
      }
    },
          {
            widgetName: "denunciarQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
              questions: [
                {
                  question: "Como puedo denunciar?",
                  answer:
                    "Ingresa a la sección 'Denuncias' y carga la informacion que desees compartir o denunciar.",
                  id: 3,
                },
                {
                  question: "Hay algo mas que debo saber?",
                  answer:
                    "Si! Aunque cada denuncia es anonima, se solicitan los datos para corroborar cada hecho.",
                  id: 4,
                },
              ],
            },
          },
          {
            widgetName: "donarQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
              questions: [
                {
                  question: "Como puedo donar?",
                  answer:
                    "Ingresa a la opcion 'Ayudar' y contacta con nosotros.",
                  id: 1,
                },
                {
                  question: "Hay algo mas que debo saber?",
                  answer:
                    "Si! Tu contribucion nos ayuda a brindar bienestar a cada mascota que espera por una nueva familia.",
                  id: 2,
                },
              ],
            },
          },
        ],
      }