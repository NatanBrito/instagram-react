export default function FundoMobile(){
    return(
    <div className="fundo-mobile">
        <Icons name="home" />
        <Icons name="search-outline" />
        <Icons name="add-circle-outline" />
        <Icons name="heart-outline" />
        <Icons name="person-outline" />
    </div>
    )
}
function Icons(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    )
}