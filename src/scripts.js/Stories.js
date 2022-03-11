export default function Stories() {
    return (
        <div className="stories">
            <Story img="./img/9gag.svg" nameUsuario="9gag" />
            <Story img="./img/meowed.svg" nameUsuario="meowed" />
            <Story img="./img/barked.svg" nameUsuario="barked" />        
            <Story img="./img/nathanwpylestrangeplanet.svg" nameUsuario="nathanwpylestrangeplanet" />
            <Story img="./img/wawawicomics.svg" nameUsuario="wawawicomics" />
            <Story img="./img/respondeai.svg" nameUsuario="respondeai" />
            <Story img="./img/filomoderna.svg" nameUsuario="filomoderna" />
            <Story img="./img/memeriagourmet.svg" nameUsuario="memeriagourmet" />
        </div>
    )
}
function Story(props){
    <div className="story">
        <div className="imagem">
            <img src={props.img} alt="imagem story"/>
        </div>
        <div className="usuario">
            {props.name}
        </div>
    </div>
    
}