import React,{useState, useEffect} from "react"
import {fetchAlbumDetail} from "../services/services.js"
import AlbumItem from "./AlbumItem";
import Loader from "./Loader";

function AlbumDetail({match}){
    const [album, setAlbum] = useState([])
    const [is_loading, setIs_loading] = useState(true)

    useEffect(() => {
        fetchAlbum()
    },[album])

    ////    SET THE ITEM CARDS
    let data = _data()

    return (
        <div className="container">
            <div className="row mt-2">
                {data}
            </div>
        </div>
    )

    ////    TO FETCH DETAILS FROM API
    async function fetchAlbum(){
        let response = await fetchAlbumDetail(match.params.id)
        setAlbum(response.data)
        setIs_loading(response.loading)
    }

    function _data(){
        return is_loading ? <Loader /> : album.map(item => <AlbumItem item={item}/> )
    }
}

export default AlbumDetail