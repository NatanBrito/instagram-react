export default function Posts(){
  const infos=[{
    topoImg:"./img/meowed.svg",iconName:"ellipsis-horizontal",conteudoImg:"./img/gato-telefone.svg",
    curtidaImg:"./img/respondeai.svg",curtidaName:"respondeai",like:101.523}]
    return(
        <div className="posts">
        <div className="post">
        <Topo imgs="./img/meowed.svg" name="ellipsis-horizontal"/>
        <Conteudo imgs="./img/gato-telefone.svg" />
        <div className="fundo">
        <Acoes />
        <Curtidas imgs="./img/respondeai.svg" name="respondeai" like="101.523" />
        </div>
        </div>
         <div className="post">
        <Topo imgs="./img/barked.svg" name="ellipsis-horizontal"/>
        <Conteudo imgs="./img/dog.svg" />
        <div className="fundo">
        <Acoes />
        <Curtidas imgs="./img/adorable_animals.svg" name="adorable_animals" like="99.159" />
        </div>
        </div>

        </div>
    )
    
}
function Topo(props){
    return(
    <div className="topo">
                <div className="usuario">
                  <img src={props.imgs} />
                  meowed
                </div>
                <div className="acoes">
                  <ion-icon name={props.name}></ion-icon>
                </div>
    </div>
    )
}
function Conteudo(props){
    return(
        <div className="conteudo">
                <img src={props.imgs} />
              </div>
    )
}
function Acoes(){
    return(
        <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
    )
}
function Curtidas(props){
    return (
        <div className="curtidas">
        <img src={props.imgs} />
        <div className="texto">
          Curtido por <strong>{props.name}</strong> e <strong>outras {props.like} pessoas</strong>
        </div>
      </div>    
    )
}
