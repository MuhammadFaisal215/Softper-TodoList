import React,{useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import axios from "axios"

function Shop(){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchItems()
    },[])
    async function fetchItems(){
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=1`)
            .then(response => {
                setItems(response.data)
                setLoading(false)
            })
            .catch(error => {
                alert('Error retrieving data')
            })
    }
    const tags = loading ?
        <h3 className="text-center">Loading. Please wait...</h3>
        :
        items.map(item => {
        return <h3 key={item.id} ><Link to={`/albums/${item.id}`}>{item.title}</Link><hr/></h3>
    })
    return (
        <div>
            <center>{tags}</center>
        </div>
    )
}

export default Shop