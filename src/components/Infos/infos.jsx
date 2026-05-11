import './infos.css'
function infos(){
    return(
        <>
         <main>
            <section>
                <div className="layout-inf">
                    <div className="infos">
                        <h2 id='title'>Olá, eu sou o</h2>
                        <h2 id='name'>Gabriel Silva</h2>

                        <p>Desenvolvedor Full-Stack | React | Node.js | MongoDB</p>
                        <div className='buttons'>
                            <a href="/Curriculo.pdf" download><button id='download'>Download CV</button></a>
                           <a href="mailto:dev13.gabriel@gmail.com" target="_blank">
                                <button id='contato'>Entrar em contato</button>
                            </a>
                        </div>
                        
                    </div>
                    
                   <a href="https://github.com/DevGabrielSilva-ops" target="_blank">
                        <img src="Foto-Perfil.jpg" alt="" />
                    </a>

                </div>
            </section>
         </main>
        </>
    )
}

export default infos