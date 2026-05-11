import './projetos.css';

function Projetos() {
    return(
        <>
            <div id='projetos' className='projetos-layout'>
                <h1>Projetos</h1>

                <div className='projetos'>
                    <div className='projeto-layout'>
                        <div className='projeto'>
                            <img src="ProjetoCinema.png" alt="" />
                            <h2>Projeto Cinema Virtual</h2>
                            <button id='btn'>saiba mais</button>
                        </div>

                        <div className='projeto'>
                            <img src="ProjetoLaros.png" alt="" />
                            <h2>Projeto Laros Suplementos</h2>
                            <button id='btn'>saiba mais</button>
                        </div>

                        <div className='projeto'>
                            <img src="ProjetoDnc.png" alt="" />
                            <h2>Projeto Landing page DNC</h2>
                            <button id='btn'>saiba mais</button>
                        </div>


                        <div className='projeto'>
                            <img src="ListUp.png" alt="" />
                            <h2>ListUp - Listagem de compras </h2>
                            <button id='btn'>saiba mais</button>
                        </div>

                        <div className='projeto'>
                            <img src="ProjetoBlog.png" alt="" />
                            <h2>Projeto Blog Responsivo</h2>
                            <button id='btn'>saiba mais</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </>
    )
}

export default Projetos;