import { useState } from "react";

let Commentform = ({getCommentData}) => {
    let [Comment, setComment] = useState("");
    let getComment = (e) =>{setComment(e.target.value);
    }
    return(
        <section className="comentarios">
            <textarea className="form.control" placeholder="comenta algo..." 
                value={Comment} 
                onChange={getComment}>
            </textarea>
            <br />
            <button className="btn btn-secondary"
            onClick={()=>getCommentData(Comment)}
            >comentar</button>
        </section>
    );
};

export default Commentform;