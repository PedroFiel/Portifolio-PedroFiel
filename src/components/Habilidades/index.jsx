import './style.css';
import HabilidadesCard from '../HablidadesCard'; 

const Habilidades = () => {
  const skills = [
    { id: 1, name: 'HTML5', level: 'Avançado', src: 'html5.svg' },
    { id: 2, name: 'CSS3', level: 'Avançado', src: 'css3.svg' },
    { id: 3, name: 'JavaScript', level: 'Intermediário', src: 'javascript.svg' },
    { id: 4, name: 'Shopify', level: 'Avançado', src: 'shopify.svg' },
    { id: 5, name: 'Liquid', level: 'Avançado',  src: 'liquid.svg' },
    { id: 6, name: 'React', level: 'Básico', src: 'react.svg' },
    { id: 7, name: 'Sass', level: 'Intermediário', src: 'sass.svg' },
    { id: 8, name: 'Arduino', level: 'Básico', src: 'arduino.svg' },
    { id: 9, name: 'C', level: 'Básico', src: 'c.svg' },
    { id: 10, name: 'Github', level: 'Intermediário', src: 'github.svg' },
  ];

  return (
    <div className='skills-section'>
        <div className='skills-container'>
            <div className='skills-header'>
                <h2>Habilidades</h2>
                <p>Conheça as habilidades que possuo</p>
            </div>
            <div className="skills">
            {skills.map(skill => (
                <HabilidadesCard key={skill.id} name={skill.name} level={skill.level} icon={skill.src} />
            ))}
            </div>
        </div>
    </div>
  );
};

export default Habilidades;