import React,{useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {fetchItems} from "../services/services.js"

function Shop(){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems()
    },[])
    async function getItems(){
        let response = await fetchItems();
        setItems(response.data)
        setLoading(response.loading)
    }
    const data = loading ?
        <h3 className="text-center">Loading. Please wait...</h3>
        :
        items.map(item => {
            return <h3 key={item.id} ><Link to={`/albums/${item.id}`}>{item.title}</Link><hr/></h3>
        })
    return (
        <div>
            <center>{data}</center>
        </div>
    )
}

export default Shop