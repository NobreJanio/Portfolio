import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Portfolio = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Função para alternar o modo tela cheia
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Erro ao tentar entrar em tela cheia: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Função para navegar para a página principal
  const navigateToMain = () => {
    navigate("/main");
  };

  // Função para navegar para a página principal ao rolar
  const scrollToNextSection = () => {
    navigate("/main");
  };

  // Detectar rolagem para baixo e navegar para a página principal
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Reduzindo o limite para tornar a detecção mais sensível
        navigate("/main");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  // Adicionar detecção de movimento de roda do mouse
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) { // Rolagem para baixo
        navigate("/main");
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [navigate]);

  return (
    <div className="animated-bg">
      <div className="stars"></div>
      
      <button 
        className="fullscreen-button" 
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}
      >
        {isFullscreen ? "⤓" : "⤢"}
      </button>

      <div className="container" ref={containerRef}>
        <div className="content">
          <div className="sphere">
            <div className="sphere-reflection"></div>
            <div className="sphere-overlay"></div>
            <div className="initials">JJ</div>
            <div className="sphere-border"></div>
          </div>
          <h1 className="name gradient-text">Janio Junior</h1>
          <div className="typing">Desenvolvedor Full Stack</div>
          <div className="social-links">
            <a href="https://github.com/NobreJanio" className="social-icon github"></a>
            <a href="https://www.linkedin.com/in/janiojunior31/" className="social-icon linkedin"></a>
            <a href="https://www.instagram.com/nobre.janio/" className="social-icon instagram"></a>
          </div>
          <button className="portfolio-button" onClick={navigateToMain}>Acessar Portfólio</button>
          <div className="scroll-indicator" onClick={scrollToNextSection}>
            <p>Role para baixo ou clique no botão para continuar</p>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
