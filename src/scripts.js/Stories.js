import Setinha from "./Setinha"
export default function Stories() {
    const objStory=[{url:"./img/wawawicomics.svg", nameUsuario:"9gag"},
    {url:"./img/meowed.svg", nameUsuario:"meowed"},
    {url:"./img/barked.svg", nameUsuario:"barked"},
    {url:"./img/nathanwpylestrangeplanet.svg", nameUsuario:"nathanwpylestrangeplanet"},
    {url:"./img/wawawicomics.svg", nameUsuario:"wawawicomics" },
    {url:"./img/respondeai.svg" , nameUsuario:"respondeai"},
    {url:"./img/filomoderna.svg", nameUsuario:"filomoderna"},
    {url:"./img/memeriagourmet.svg", nameUsuario:"memeriagourmet"}
]
return (
    <div className="stories">  
       {objStory.map(item=>{
           return(
        <div className="story">
        <div className="imagem">
        <img src={item.url} alt="xx" />
        </div>
        <div className="usuario">
            {item.nameUsuario}
        </div>
       </div>          
       )
       }
       )}
       <Setinha />
    </div>
)
}
function Story(props){     //quero fazer funcionar como a Manu fez na Aula
return(  <div className="story">
    <div className="imagem">
    <img src={props.item} alt="xx" />
    </div>
    <div className="usuario">
        {props.nameUsuario}
    </div>
</div> 
) 
}