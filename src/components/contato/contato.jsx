import './contato.css'
function Contato() {
    return(
        <>
            <div id='contatos' className='contatos-layout'>
                <h1>Contatos</h1>

                <div className='contato'>
                    <div className='inf-contato'>
                      <a href="mailto:dev13.gabriel@gmail.com" target="_blank">
                            <img src="email.svg" alt="" />
                            <h2>E-mail</h2>
                            <p>dev13.gabriel@gmail.com</p>
                    </a>  
                    </div>

                    <div className='inf-contato'>
                        <a href="https://www.linkedin.com/in/gabriel-silva-evaristo/" target="_blank">
                            <img src="linkedin.fw.png" alt="" />
                            <h2>LinkedIn</h2>
                            <p>@GabrielSilvaEvaristo</p>
                        </a>
                        
                    </div>

                    <div className='inf-contato'>
                        <a href="https://github.com/DevGabrielSilva-ops" target="_blank">
                            <img src="gitHub.fw.png" alt="" />
                            <h2>GitHub</h2>
                            <p>@DevGabrielSilva-ops</p>
                        </a>
                        
                    </div>
                    
                    
                </div>
            </div>
            
        </>
    )
}

export default Contato