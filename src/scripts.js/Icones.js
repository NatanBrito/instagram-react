export default function Icones(){
    return(
        <div className="icones">
          <LoopIcon name="paper-plane-outline" />
          <LoopIcon name="compass-outline" />
          <LoopIcon name="heart-outline" />
          <LoopIcon name="person-outline" />    
          </div>
    )
}
function LoopIcon(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    )
}