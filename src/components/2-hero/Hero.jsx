import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animations/Animation - 1704037323578.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img 
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1.1)"}}
          transition={{dumping: 6, type: "spring", stiffness: 100}}
          
          src="./me.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}

        className="title">
          Desenvolvedor, Full-Stack e gamer amador.
        </motion.h1>
        <p className="sub-title">
          Meu nome é Jânio Júnior, sou um desenvolvedor Full-Stack freelancer
          com base em Recife, Pernambuco. Possuo formação em Análise e
          Desenvolvimento de Sistemas, além de mais de dois anos de experiência
          na área. Tenho o compromisso constante de aprimorar minhas habilidades
          e manter-me atualizado no dinâmico universo da tecnologia.
        </p>

        <div className="all-icons flex">
          <div>
            <a
              className="icon icon-instagram"
              href="https://www.instagram.com/nobre.janio/"
              target="_blank"
            ></a>
          </div>
          <div>
            <a
              className="icon icon-github"
              href="https://github.com/NobreJanio"
              target="_blank"
            ></a>
          </div>
          <div>
            <a
              className="icon icon-linkedin"
              href="https://www.linkedin.com/in/janiojunior31/"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
