import { useState } from 'react';
import './projetos.css';

function Projetos() {

    const [isModalCinema, setIsModalCinema] = useState(false);
    const [isModalLaros, setIsModalLaros] = useState(false);
    const [isModalDnc, setIsModalDnc] = useState(false);
    const [isModalListUp, setIsModalListUp] = useState(false);
    const [isModalBlog, setIsModalBlog] = useState(false);


    const abrirModalCinema = () => setIsModalCinema(true);
    const fecharModalCinema = () => setIsModalCinema(false);
    const abrirModalLaros = () => setIsModalLaros(true);
    const fecharModalLaros = () => setIsModalLaros(false);
    const abrirModalDnc = () => setIsModalDnc(true);
    const fecharModalDnc = () => setIsModalDnc(false);
    const abrirModalListUp = () => setIsModalListUp(true);
    const fecharModalListUp = () => setIsModalListUp(false);
    const abrirModalBlog = () => setIsModalBlog(true);
    const fecharModalBlog = () => setIsModalBlog(false);

    return (
        <>
            <div id='projetos' className='projetos-layout'>
                <h1>Projetos</h1>

                <div className='projetos'>
                    <div className='projeto-layout'>
                        <div className='projeto'>
                            <img src="ProjetoCinema.png" alt="" />
                            <h2>Projeto Cinema Virtual</h2>
                            <button id='btn' onClick={abrirModalCinema}>saiba mais</button>
                        </div>

                        <div className='projeto'>
                            <img src="ProjetoLaros.png" alt="" />
                            <h2>Projeto Laros Suplementos</h2>
                            <button id='btn' onClick={abrirModalLaros}>saiba mais</button>
                        </div>

                        <div className='projeto'>
                            <img src="ProjetoDnc.png" alt="" />
                            <h2>Projeto Landing page DNC</h2>
                            <button id='btn' onClick={abrirModalDnc}>saiba mais</button>
                        </div>


                        <div className='projeto'>
                            <img src="ListUp.png" alt="" />
                            <h2>ListUp - Listagem de compras </h2>
                            <button id='btn' onClick={abrirModalListUp}>saiba mais</button>
                        </div>

                        <div className='projeto'>
                            <img src="ProjetoBlog.png" alt="" />
                            <h2>Projeto Blog Responsivo</h2>
                            <button id='btn' onClick={abrirModalBlog}>saiba mais</button>
                        </div>
                    </div>


                    //Modais
                    <div
                        id="modalOverlay"
                        className={`modal-overlay ${isModalCinema ? 'active' : ''}`}
                        onClick={(e) => e.target.id === 'modalOverlay' && fecharModalCinema()}
                    >
                        <div className="modal-projeto">
                            <span className="close" onClick={fecharModalCinema}>&times;</span>

                            <div className='modal-layout'>
                                <div className='imagem'>
                                    <img src="cinema-modal.png" alt="" />
                                    <div className='btn-acesso'>
                                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7446982050475188224/" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar Linkedin</button>
                                        </a>
                                        <a href="https://github.com/DevGabrielSilva-ops/PROJETO-CINEMA-VUE-FIREBASE" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar GitHub</button>
                                        </a>
                                    </div>

                                </div>
                                <div className='descricao'>
                                    <h2>Sistema de Gerenciamento de Cinemas | Vue.js & Firebase</h2>
                                    <p>Desenvolvi uma plataforma interativa para cinemas, permitindo o cadastro de filmes, usuários e sessões, e dando aos vendedores a capacidade de gerenciar e vender ingressos em tempo real.
                                        O projeto utiliza Vue.js para uma interface responsiva e Firebase para autenticação segura e banco de dados em tempo real, garantindo eficiência operacional e uma experiência fluida para usuários e equipe de vendas.</p>
                                    <h3>26 de Março de 2026</h3>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div
                        id="modalOverlay"
                        className={`modal-overlay ${isModalLaros ? 'active' : ''}`}
                        onClick={(e) => e.target.id === 'modalOverlay' && fecharModalLaros()}
                    >
                        <div className="modal-projeto">
                            <span className="close" onClick={fecharModalLaros}>&times;</span>

                            <div className='modal-layout'>
                                <div className='imagem'>
                                    <img src="ProjetoLaros.png" alt="" />
                                    <div className='btn-acesso'>
                                       <a href="" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar Linkedin</button>
                                        </a>
                                        <a href="https://github.com/DevGabrielSilva-ops/Pagina-ml" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar GitHub</button>
                                        </a>
                                    </div>

                                </div>
                                <div className='descricao'>
                                    <h2>Laros Suplementos</h2>
                                    <p>Criei o site Laros Suplementos do zero, utilizando HTML, CSS e JavaScript para entregar uma experiência limpa, responsiva e interativa. <br />
                                        → Planejei e desenvolvi a estrutura de páginas com HTML semântico; <br />
                                        → Estilizei com CSS moderno (flexbox, grid, responsividade) para garantir usabilidade em diferentes dispositivos; <br />
                                        → Adicionei funcionalidades com JavaScript para dinamismo por exemplo: navegação, filtros, animações leves, etc. <br />
                                        Esse projeto me proporcionou maior entendimento prático de integração entre front-end puro, boas práticas de acessibilidade, e adaptação de layout para mobile, fortalecendo meu portfólio como desenvolvedor web.</p>
                                    <h3>17 de setembro de 2025</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        id="modalOverlay"
                        className={`modal-overlay ${isModalDnc ? 'active' : ''}`}
                        onClick={(e) => e.target.id === 'modalOverlay' && fecharModalDnc()}
                    >
                        <div className="modal-projeto">
                            <span className="close" onClick={fecharModalDnc}>&times;</span>

                            <div className='modal-layout'>
                                <div className='imagem'>
                                    <img src="ProjetoDnc.png" alt="" />
                                    <div className='btn-acesso'>
                                        <a href="" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar Linkedin</button>
                                        </a>
                                        <a href="https://github.com/DevGabrielSilva-ops/Landin-page-responsiva" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar GitHub</button>
                                        </a>
                                    </div>

                                </div>
                                <div className='descricao'>
                                    <h2>Landing Page (Escola Dnc)</h2>
                                    <p>
                                        Criei essa landing page com o objetivo de divulgar um curso de tecnologia. Trabalhei todo o layout na mão, desde a estrutura com HTML5 até o estilo com CSS3, focando em uma boa experiência pro usuário. Usei JavaScript puro para adicionar interatividade e validações no formulário. <br />

                                        💡 Destaques do projeto: <br />

                                        Formulário com validação via JavaScript <br />

                                        Design simples, direto e com foco em conversão <br />

                                        Deploy feito no Netlify pra facilitar o acesso e manter tudo rápido <br />

                                        Esse projeto foi uma ótima oportunidade pra treinar e aplicar na prática conceitos de front-end e boas práticas de desenvolvimento web.
                                    </p>
                                    <h3>18 de Agosto de 2025</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        id="modalOverlay"
                        className={`modal-overlay ${isModalListUp ? 'active' : ''}`}
                        onClick={(e) => e.target.id === 'modalOverlay' && fecharModalListUp()}
                    >
                        <div className="modal-projeto">
                            <span className="close" onClick={fecharModalListUp}>&times;</span>

                            <div className='modal-layout'>
                                <div className='imagem'>
                                    <img src="ListUp.png" alt="" />
                                    <div className='btn-acesso'>
                                        <a href="" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar Linkedin</button>
                                        </a>
                                        <a href="https://github.com/Hyogaherking/List-Up" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar GitHub</button>
                                        </a>
                                    </div>

                                </div>
                                <div className='descricao'>
                                    <h2>List-UP</h2>
                                    <p>Desenvolvi o List-Up, uma aplicação web simples e intuitiva para criação e gerenciamento de listas de compras. O objetivo foi oferecer uma experiência rápida, sem distrações e acessível diretamente pelo navegador. <br />
                                        Funcionalidades: <br />
                                        Adição e remoção dinâmica de itens <br />
                                        Interface minimalista e responsiva <br />
                                        Armazenamento local automático (mantém a lista mesmo após fechar a página) <br />
                                        Totalizador automático de valores (ótimo para controle de gastos)</p>
                                    <h3>13 de setembro de 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="modalOverlay"
                        className={`modal-overlay ${isModalBlog ? 'active' : ''}`}
                        onClick={(e) => e.target.id === 'modalOverlay' && fecharModalBlog()}
                    >
                        <div className="modal-projeto">
                            <span className="close" onClick={fecharModalBlog}>&times;</span>

                            <div className='modal-layout'>
                                <div className='imagem'>
                                    <img src="ProjetoBlog.png" alt="" />
                                    <div className='btn-acesso'>
                                        <a href="" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar Linkedin</button>
                                        </a>
                                        <a href="https://github.com/DevGabrielSilva-ops/RID-220894_DESAFIO02" target="_blank" rel="noopener noreferrer">
                                            <button>Acessar GitHub</button>
                                        </a>
                                    </div>

                                </div>
                                <div className='descricao'>
                                    <h2>Blog responsivo </h2>
                                    <p>Desenvolvi um blog responsivo que se adapta a diferentes dispositivos, proporcionando uma experiência de leitura agradável tanto em desktops quanto em dispositivos móveis. O projeto foi construído utilizando tecnologias modernas como HTML, CSS e JavaScript, garantindo um design atraente e intuitivo.</p>
                                    <h3>08 de abril de 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Projetos;