import Header from '../components/header/header'
import Infos from '../components/infos/infos'
import Sobre from '../components/Sobre/sobre'
import Habilidades from '../components/habilidades/habilidades'
import Projetos from '../components/projetos/projetos'
import Contato from '../contato/contato'
function Menu(){
    return(
       <>
            <Header />
            <Infos />
            <Sobre />
            <Habilidades />
            <Projetos />
            <Contato />
       </>
    )
}

export default Menu