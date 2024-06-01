import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="input-texto">
            <label> {props.label} </label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto