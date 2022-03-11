export default function Sugestao() {
    return (
        <>
        <Sugestaoo imgs="./img/bad.vibes.memes.svg" name="bad.vibes.memes" follow="Segue você"/>
        <Sugestaoo imgs="./img/chibirdart.svg" name="chibirdart" follow="Segue você"/>
        <Sugestaoo imgs="./img/razoesparaacreditar.svg" name="razoesparaacreditar" follow="Novo no Instagram"/>
        <Sugestaoo imgs="./img/adorable_animals.svg" name="adorable_animals" follow="Segue você"/>
        <Sugestaoo imgs="./img/smallcutecats.svg" name="smallcutecats" follow="Segue você"/>

       </>
    )
}
function Sugestaoo(props){
    return(
        <div className="sugestao">
              <div className="usuario">
                <img src={props.imgs} />
                <div className="texto">
                  <div className="nome">{props.name}</div>
                  <div className="razao">{props.follow}</div>
                </div>
              </div>

              <div className="seguir">Seguir</div>
            </div>
    )
}