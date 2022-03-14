export default function Post({smallImg,nameSmallImg,bigImg,likeImg,likeName,likeNumber}){
    return(
        <div className="post">
              <div className="topo">
                <div className="usuario">
                  <img src={smallImg} />
                  {nameSmallImg}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>
              <div className="conteudo">
                <img src={bigImg} />
              </div>
              <div className="fundo">
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
                <div className="curtidas">
                  <img src={likeImg} />
                  <div className="texto">
                    Curtido por <strong>{likeName}</strong> e <strong>outras {likeNumber} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}
