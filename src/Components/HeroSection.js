import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && (
          <Link to={buttonLink} className="hero-button">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
