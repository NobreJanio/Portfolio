import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

// O particlesJS é acessado como uma propriedade do objeto window

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
  
  // Inicialização do particlesJS
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": ["#00d9ff", "#0066ff", "#3b82f6"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00d9ff",
            "opacity": 0.6,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    } else {
      console.error("particlesJS não está disponível. Verifique se o script foi carregado corretamente.");
    }
  }, []);

  return (
    <div className="animated-bg fade-in">
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
          <div className="scroll-indicator" onClick={navigateToMain}>
            <p>Role para baixo ou clique no botão para continuar</p>
            <i className="fas fa-chevron-down">↓</i>
          </div>
        </div>
      </div>
      <div id="particles-js"></div>
    </div>
  );
};

export default Portfolio;
