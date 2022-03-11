export default function Usuario() {
    return (
    <User imgs="./img/catanacomics.svg" name="catanacomics" subName=" Catana"/>
    )
}
function User(props){
    return(
        <div className="usuario">  
        <img src={props.imgs} />
        <div className="texto">
          <strong>{props.name}</strong>
         {props.subName}
        </div>
      </div>
    )
}