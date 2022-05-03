import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Item.css'

export default function Item() {
    const { id } = useParams()
    const url = 'http://localhost:3001/items/' + id
    const { data: item, isPending, error } = useFetch(url)
    const history = useHistory()

    useEffect(() => {
        if (error) {
            // redirect the user back to the Home-page if there is an error with the Items-page
            setTimeout(() => {
                history.push('/')
            }, 2000)
        }
    }, [error, history])
    

    return (
        <div className="item">
            { isPending && <p className="loading">Loading...</p> }
            { error && <p className="error">{error}</p> }
            { item && (
                <>
                    <h2 className="page-title">{item.title}</h2>
                    <p>Price: {item.price}</p>
                    <p className="itemInfo">{item.body}</p>
                    <img src={item.image} alt="Handmade bag" />
                </>
            )}
        </div>
    )
}