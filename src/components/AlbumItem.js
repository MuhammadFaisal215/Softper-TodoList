function AlbumItem(props){
    return (
        <div key={props.item.id} className="col-md-4 col-sm-6 col-lg-3 py-2">
            <div className='card h-100'>
                <div className="card-body">
                    <img src={props.item.url} width="100%"/>
                    <p>{props.item.title}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumItem