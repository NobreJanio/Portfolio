import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/Animation - 1703965030558.json";
import contactAnimation from "../../animations/Animation - 1704035443314.json"

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbnbdbg");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contato
      </h1>
      <p className="sub-title">
        Entre em contato comigo:
      </p>

      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Endereço Email:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Sua messagem:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Sua mensagem foi enviada com sucesso
            </p>
          )}

        </form>
        <div className="animation">
        <Lottie
        className="contact-animation"
                style={{ height: 355 }}
                animationData={contactAnimation}
        />
        </div>
      </div>
    </section>
  );
};

export default Contact;
