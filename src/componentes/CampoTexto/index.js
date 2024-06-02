import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="input-texto">
            <label> {props.label} </label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto