export default function Stories() {
    return (
        <>  
            <Story urlImagem="./img/wawawicomics.svg" nameUsuario="9gag"  titulo="xx"/>
            <Story urlImagem="./img/meowed.svg" nameUsuario="meowed" titulo="xx" />
            <Story urlImagem="./img/barked.svg" nameUsuario="barked" titulo="xx" />        
            <Story urlImagem="./img/nathanwpylestrangeplanet.svg" nameUsuario="nathanwpylestrangeplanet" titulo="xx" />
            <Story urlImagem="./img/wawawicomics.svg" nameUsuario="wawawicomics" titulo="xx" />
            <Story urlImagem="./img/respondeai.svg" nameUsuario="respondeai"  titulo="xx"/>
            <Story urlImagem="./img/filomoderna.svg" nameUsuario="filomoderna" titulo="xx" />
            <Story urlImagem="./img/memeriagourmet.svg" nameUsuario="memeriagourmet" titulo="xx"/>
        </>
    )
}
function Story(props){
  return(  <div className="story">
        <div className="imagem">
        <img src={props.urlImagem} alt={props.titulo} />
        </div>
        <div className="usuario">
            {props.nameUsuario}
        </div>
    </div> 
  ) 
}