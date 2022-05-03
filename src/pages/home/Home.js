import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

// components
import ItemsList from '../../components/ItemList'

export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3001/items')


    return (
      <div className="home">
          <h2>Our Handmade bags</h2>
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}

          {data && <ItemsList items={data} />}
        
      </div>
    )
  }