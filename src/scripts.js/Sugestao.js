export default function Sugestao() {
  const infos=[{imgs:"./img/bad.vibes.memes.svg",name:"bad.vibes.memes",follow:"Segue você"},
  {imgs:"./img/chibirdart.svg",name:"chibirdart",follow:"Segue você"},
  {imgs:"./img/razoesparaacreditar.svg",name:"razoesparaacreditar",follow:"Novo no Instagram"},
  {imgs:"./img/adorable_animals.svg",name:"adorable_animals" ,follow:"Segue você"},
  {imgs:"./img/smallcutecats.svg",name:"smallcutecats",follow:"Segue você"}
]
    return (
        <>
         {infos.map(info =>{
            return(
             <div className="sugestao">
              <div className="usuario">
                <img src={info.imgs} />
                <div className="texto">
                  <div className="nome">{info.name}</div>
                  <div className="razao">{info.follow}</div>
                </div>
              </div>

              <div className="seguir">Seguir</div>
            </div>
            )
         }
         )}
       </>
    )
}
