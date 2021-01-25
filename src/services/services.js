import axios from "axios";

export async function fetchItems(){
    let response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=1`)
        .then(response => {
            return {data:response.data, loading:false}
        })
        .catch(error => {
            alert('Error retrieving data')
            return {data:[], loading:true}
        })
    return response
}

export async function fetchItemDetail(albumId){
    let response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => {
            return {data:response.data, loading:false}
        })
        .catch(error => {
            alert('Error retrieving data')
            return {data:[], loading:true}
        })
    return response
}