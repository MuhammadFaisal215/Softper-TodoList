import React,{useState, useEffect} from "react"
import {Link} from 'react-router-dom'

function Shop(){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchItems()
    },[])
    async function fetchItems(){
        const data =await fetch(`https://jsonplaceholder.typicode.com/albums?userId=1`)
        const items = await data.json()
        setItems(items)
        setLoading(false)
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