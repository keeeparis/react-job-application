import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getCatsFetch } from './redux/features/counter/catSlice'

import './App.css'

function App() {
    const [page, setPage] = useState(1)
    const cats = useAppSelector(state => state.cats.cats)
    const isLoading = useAppSelector(state => state.cats.isLoading)
    const dispatch = useAppDispatch()
    
    const loadMoreHandler = () => {
        dispatch(getCatsFetch(page))
        setPage(page => ++page)
    }

    useEffect(() => {
        dispatch(getCatsFetch(page))
        setPage(page => ++page)
    }, [dispatch])

    return (
        <div className="App">
            {cats.map((cat: any) =>
                <div key={cat.id} className='row'>
                    <img 
                        srcSet={cat?.image?.url}  
                        src={'https://muztext.com/i/32847534632343925347.jpg'}
                        alt="cat image" 
                        width={200} 
                        height={200}
                    />
                    <div>
                        <h2>Breed: {cat.name}</h2>
                        <h5>Temperament: {cat.temperament}</h5>
                        <p>Description: {cat.description}</p>
                    </div>
                </div>
            )}
            { isLoading ? (
                <div>Loading...</div>
            ) : (page < 7) ? (
                <button onClick={loadMoreHandler}>Load More</button>
            ) : null}
        </div>
    )
}

export default App
