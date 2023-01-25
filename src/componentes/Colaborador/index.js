<<<<<<< HEAD
import './Colaborador.css' 

const Colaborador = ({ nome, imagem, cargo, corPrimaria }) => {

    const css = {backgroundColor: corPrimaria}  

    return (<div className='colaborador'>
        <div className='cabecalho' style={css}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
=======
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <AiFillCloseCircle 
        size={25} 
        className="deletar" 
        onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? <AiFillHeart {...propsFavorito} color="#ff0000"/> : <AiOutlineHeart  {...propsFavorito}/>}
            </div>
>>>>>>> master
        </div>
    </div>)
}

export default Colaborador