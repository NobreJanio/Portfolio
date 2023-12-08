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
          jjjjjjjjjjjjjjjjjjjjjjjjj
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
