import React from 'react';
import './style.css';
import experiencia from '../../json/experiencia.json';

function Experiencia() {
    function verifyDescription() {
        const experienciaItems = document.querySelectorAll('.experiencia-item');
    
        experienciaItems.forEach((item) => {
            const itemDescription = item.querySelector('.item-description');
            const itemParagraph = itemDescription.querySelector('.item-description p');
            const itemContent = itemParagraph.textContent;
    
            if (itemContent.length > 210) {
                const fullText = itemContent;
    
                itemParagraph.textContent = fullText;
                itemParagraph.classList.add('collapsed');
    
                const readMoreBtn = document.createElement('span');
                readMoreBtn.textContent = 'Ler mais';
                readMoreBtn.classList.add('btn_more');
    
                readMoreBtn.addEventListener('click', () => {
                    if (itemParagraph.classList.contains('collapsed')) {
                        itemParagraph.classList.remove('collapsed');
                        itemParagraph.classList.add('expanded');
                        readMoreBtn.textContent = 'Ler menos';
                    } else {        
                        itemParagraph.classList.remove('expanded');
                        itemParagraph.classList.add('collapsed');
                        readMoreBtn.textContent = 'Ler mais';
                    }
                });
    
                itemDescription.appendChild(readMoreBtn);
            }
        });
    }
    
    window.onload = verifyDescription;

    return (
        <div className="section-experiencia">
            <div className="experiencia-container">
                <div className='experiencia-header'>
                    <h2>Experiência</h2>
                </div>
                
                {experiencia.map(exp => (
                    <div key={exp.id} className='experiencia-content'>
                        <div className='experiencia-images'>
                            {exp.experiencia_images.map((image, index) => (
                                <div key={index} className='logo-empresa'>
                                    <img src={`assets/img/Experiencia/shakers/${image.src}`} alt={image.alt} />
                                </div>
                            ))}
                        </div>

                        <div className='experiencia-group-items'>                     
                            <div className='header-empresa'>
                                <h2 className='title'>{exp.header_empresa.empresa}</h2>
                                <p className='period-total'>{exp.header_empresa.periodo_total}</p>
                            </div>
                            {exp.experiencia_item.map(item => (
                                <div key={item.id} className={`experiencia-item ${item.id === 1 ? 'active' : '' }`}>
                                    <span className='circle'></span>
                                    <h3 className='title'>{item.cargo}</h3>
                                    <p className='working-time'>{item.tempo_trabalho}</p>
                                    <p className='period'>{item.periodo}</p>
                                    <p className='location'>{item.localizacao}</p>
                                    <div className='item-description'>
                                        <p>{item.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiencia;