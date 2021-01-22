import React,{useState, useEffect} from "react"
import axios from "axios"

function ShopDetail({match}){
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchItem()
    },[])

    ////    TO FETCH DETAILS FROM API
    async function fetchItem(){
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${match.params.id}`)
            .then(response => {
                setItem(response.data)
                setLoading(false)
            })
            .catch(error => {
                alert('Error retrieving data')
            })
    }
    let tags = loading ?
        <div className="col-12 text-center"><div className="card"><div className="card-body"><h4>Loading. Please wait...</h4></div></div></div>
        :
        item.map(item => {
            return (
                <div key={item.id} className="col-md-4 col-sm-6 col-lg-3 py-2">
                    <div className='card h-100'>
                        <div className="card-body">
                            <img src={item.url} width="100%"/>
                            <p>{item.title}</p>
                        </div>
                    </div>
                </div>
            )
        })

    return (
        <div className="container">
            <div className="row mt-2">
                {tags}
            </div>
        </div>

    )
}

export default ShopDetail