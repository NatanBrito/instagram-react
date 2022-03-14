import Post from "./Post"
export default function Posts(){
    const infos=[{user:{
        smallImg:"./img/meowed.svg",
        nameSmallImg:"meowed",
        bigImg:"./img/gato-telefone.svg",
        likeImg:"./img/respondeai.svg",
        likeName:"respondeai",
        likeNumber:101.523
     }},
    {user:{
        smallImg:"./img/barked.svg",
        nameSmallImg:"barked",
        bigImg:"./img/dog.svg",
        likeImg:"./img/adorable_animals.svg",
        likeName:"adorable_animals",
        likeNumber:99.159
     }
    }]
    return(
        <div class="posts">
           {infos.map((info) =>{
             return(
              <Post smallImg={info.user.smallImg} nameSmallImg={info.user.nameSmallImg}
              bigImg={info.user.bigImg}likeImg={info.user.likeImg}
              likeName={info.user.likeName} likeNumber={info.user.likeNumber} />
           )
          }
         )
        }
    </div>
    )
}