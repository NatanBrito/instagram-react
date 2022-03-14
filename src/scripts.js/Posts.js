import Post from "./Post"
export default function Posts(){
    const infos=[{
        smallImg:"./img/meowed.svg",
        nameSmallImg:"meowed",
        bigImg:"./img/gato-telefone.svg",
        likeImg:"./img/respondeai.svg",
        likeName:"respondeai",
        likeNumber:101.523
    },
    {
        smallImg:"./img/barked.svg",
        nameSmallImg:"barked",
        bigImg:"./img/dog.svg",
        likeImg:"./img/adorable_animals.svg",
        likeName:"adorable_animals",
        likeNumber:99.159
    }
   ]
    return(
    infos.map((info) =>{
        return(
        <Post smallImg={info.smallImg} nameSmallImg={info.nameSmallImg} bigImg={info.bigImg}
     likeImg={info.likeImg} likeName={info.likeName} likeNumber={info.likeNumber} />
        )
    })
    )
}