import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./me.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Desenvolvedor, Full-Stack, e gamer amador.
        </h1>
        <p className="sub-title">
          
          Meu nome é Jânio Júnior, sou um desenvolvedor Full-Stack freelancer com base em Recife, Pernambuco. Possuo formação em Análise e Desenvolvimento de Sistemas, além de mais de dois anos de experiência na área. Tenho o compromisso constante de aprimorar minhas habilidades e manter-me atualizado no dinâmico universo da tecnologia.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation border">animation</div>
    </section>
  );
};

export default Hero;
