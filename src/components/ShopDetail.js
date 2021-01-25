import React,{useState, useEffect} from "react"
import {fetchItemDetail} from "../services/services.js"
import ShopItem from "./ShopItem";

function ShopDetail({match}){
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchItem()
    },[])

    ////    TO FETCH DETAILS FROM API
    async function fetchItem(){
        let response = await fetchItemDetail(match.params.id)
        setItem(response.data)
        setLoading(response.loading)
    }
    ////    SET THE ITEM CARDS
    let data = loading ?
        <div className="col-12 text-center"><div className="card"><div className="card-body"><h4>Loading. Please wait...</h4></div></div></div>
        :
        item.map(item => <ShopItem item={item}/> )

    return (
        <div className="container">
            <div className="row mt-2">
                {data}
            </div>
        </div>
    )
}

export default ShopDetail