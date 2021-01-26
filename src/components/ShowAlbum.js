import {Link} from "react-router-dom";

function ShowAlbum(props){
    return (
        <div key={props.item.id} className="col-md-3 col-sm-4 col-lg-2 py-2">
            <div className='card h-100'>
                <div className="card-body">
                    <Link to={`/albums/${props.item.id}`}><p>{props.item.title}</p></Link>
                </div>
            </div>
        </div>
    )
}

export default ShowAlbum