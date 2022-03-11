export default function Stories() {
    return (
        <div className="stories">
            <Story imgs="./img/9gag.svg" nameUsuario="9gag" />
            <Story imgs="./img/meowed.svg" nameUsuario="meowed" />
            <Story imgs="./img/barked.svg" nameUsuario="barked" />        
            <Story imgs="./img/nathanwpylestrangeplanet.svg" nameUsuario="nathanwpylestrangeplanet" />
            <Story imgs="./img/wawawicomics.svg" nameUsuario="wawawicomics" />
            <Story imgs="./img/respondeai.svg" nameUsuario="respondeai" />
            <Story imgs="./img/filomoderna.svg" nameUsuario="filomoderna" />
            <Story imgs="./img/memeriagourmet.svg" nameUsuario="memeriagourmet" />
        </div>
    )
}
function Story(props){
    <div className="story">
        <div className="imagem">
            <img src={props.imgs} alt="imagem story"/>
        </div>
        <div className="usuario">
            {props.name}
        </div>
    </div>
    
}