// styles
import './ItemList.css'


import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

export default function ItemList ({ items }) {
    return (
        <div className="items-list">
            {items.map((item) => (
                <div key={item.id} className="card">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                
                <span className="thumbnailImg">
                    <Image src={item.image} thumbnail />
                </span>
            
                <Link to={`/items/${item.id}`}>Read more...</Link>
            
                </div>
            ))}
        </div>
        
    )
}

