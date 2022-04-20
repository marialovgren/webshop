import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

// styles
import './Home.css'

export default function Home() {
    const { data: items, isPending, error } = useFetch('http://localhost:3001/items')


    return (
      <div className="home">
          <h2>Our Handmade bags</h2>
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}

          {items && items.map((item) => (
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