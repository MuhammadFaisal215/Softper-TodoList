import axios from "axios";
import {ALL_ALBUMS_URL, ALBUM_DETAIL_URL} from "../actions/constants";

export async function fetchAlbums(){
    try {
        return await axios.get(ALL_ALBUMS_URL)
            .then(response => {
                return {data:response.data, loading:false}
            })
            .catch(error => {
                alert('Error retrieving data')
                return {data:[], loading:true}
            })
    }
    catch (e) {
        alert('Something went wrong')
        return {data:[], loading:true}
    }

}

export async function fetchAlbumDetail(albumId){
    try {
        return await axios.get(ALBUM_DETAIL_URL(albumId))
            .then(response => {
                return {data:response.data, loading:false}
            })
            .catch(error => {
                alert('Error retrieving data')
                return {data:[], loading:true}
            })
    }
    catch (e) {
        alert('Something went wrong')
        return {data:[], loading:true}
    }
}