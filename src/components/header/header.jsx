import { useState } from 'react'; // 1. Importe o useState
import './header.css';

function Header() {
    // 2. Crie um estado para o modal (começa como false/fechado)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Funções para alterar o estado
    const abrirModal = () => setIsModalOpen(true);
    const fecharModal = () => setIsModalOpen(false);

    return (
        <>
            <header>
                <div className='hd-inf'>
                   
                        <img onClick={abrirModal} src="Menu.svg" alt="Menu" />
                    

                    <h2>PORTFOLIO</h2>

                    <button></button>
                </div>
                <hr />

                {/* 4. Use o estado para adicionar/remover a classe 'active' */}
                <div 
                    id="modalOverlay" 
                    className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
                    onClick={(e) => e.target.id === 'modalOverlay' && fecharModal()}
                >
                    <div className="modal-content">
                        <span className="close" onClick={fecharModal}>&times;</span>
                        <h2>BEM VINDO - AO MEU PORTFOLIO</h2>
                       
                       <div className='partes-pagina'>
                            <a href='#sobre' onClick={fecharModal}>SOBRE</a>
                            <a href='#habilidades' onClick={fecharModal}>HABILIDADES</a>
                            <a href='#projetos' onClick={fecharModal}>PROJETOS</a>
                            <a href='#contatos' onClick={fecharModal}>CONTATOS</a>
                        </div> 
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
