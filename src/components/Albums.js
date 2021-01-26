import React,{useState, useEffect} from "react"
import {fetchAlbums} from "../services/services.js"
import ShowAlbum from "./ShowAlbum";
import Loader from "./Loader";

function Albums(){
    const [albums, setAlbums] = useState([])
    const [is_loading, setIs_loading] = useState(true)

    useEffect(() => {
        getAlbums()
    },[albums])

    const data = _data()

    return (
        <div className="container">
            <div className="row mt-2">
            {data}
            </div>
        </div>
    )

    async function getAlbums(){
        let response = await fetchAlbums();
        setAlbums(response.data)
        setIs_loading(response.loading)
    }

    function _data(){
        return is_loading ?
            <Loader />
            :
            albums.map(item => <ShowAlbum item={item}/>)
    }
}



export default Albums