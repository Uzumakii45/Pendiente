import imgTorta from "./../assets/Torta-de-chocolate.jpeg"
import { useState, useEffect } from "react";
import Commentform from "./commentform";
import ListComments from "./listcomments";

let Post = () => {
    // manejo de estados de los likes
    let [likes, setLike] = useState(0);
    let updateLikes = () => {
        setLike(likes+1);
    };
    //manejo del boton de comentario
    let [btnComment, setBtnComment] = useState(false);
    let isShowComment = () => setBtnComment(!btnComment);
    //console.log(btnComment);
    //funcion para obtener comentario del formulario
    let [textComment, setTextComment] = useState("");
    let getCommentData = (Comment)=>{
        setTextComment(Comment);
    }
     //listado de comentaros
     let ListCom = [
        {id:1, text: "Me fascinan muchos las tortas de chocolate"},
        {id:2, text: "Necesito la receta"}
    ];
    let nextID = 3;
    let [listData, setlistData] = useState(ListCom);
    //comprobar si hay un nuevo comentario
    useEffect(()=>{
        if(textComment){
            setlistData([
                ...listData,
                {id: nextID++, text: textComment}
            ]);
        }
    }, [textComment]);
 
    //console.log(ListCom);
    //console.log(listData)
    return(
        <div className="card" style={{"width": "18rem"}}> 
            <div className="card-body">
                 <h5 className="card-title">Torta de chocolate</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <img src={imgTorta} className="card-img-top" alt="..." />
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item d-flex justify-content-around">
                    <span className="">👍😂😁 {likes} </span> <span>{listData.length} 💬</span>
               </li>
               <li className="list-group-item d-flex justify-content-around">
                    <button className="btn btn-secondary"
                    onClick={updateLikes}
                    >👍Likes</button>
                     <button className="btn btn-secondary"
                     onClick={isShowComment}
                     >💬comment</button>
               </li>
            </ul>
            <div className="card-footer">
                { btnComment && <Commentform getCommentData = {getCommentData} />}
            </div>
            <ListComments ListComData = {listData} />
        </div>
    );
};

export default Post;