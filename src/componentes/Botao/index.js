<<<<<<< HEAD
import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        {props.children}
    </button>)
=======
import './botao.css'

const Botao = ({texto}) => {
    return <button className="botao">
        {texto}
    </button>
>>>>>>> master
}

export default Botao