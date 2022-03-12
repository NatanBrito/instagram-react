export default function Icones(){
    const icons=["paper-plane-outline","compass-outline","heart-outline","person-outline"]
    
    return(
        <div className="icones">
          {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
          </div>
    )
}
function LoopIcon(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    )
}