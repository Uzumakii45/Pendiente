let ListComments = ({ListComData}) => {
    return(
        <ul className="list-group list-group-flush">
            {
                ListComData.map((list)=>(
                    <li key={list.id++} className="list-group-item"> {list.text} </li>
                ))
            }
           
        </ul>
    );
};

export default ListComments;