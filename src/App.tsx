import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getCatsFetch } from './redux/features/counter/catSlice'

function App() {
    const cats = useAppSelector(state => state.cats.cats)
    const isLoading = useAppSelector(state => state.cats.isLoading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCatsFetch())
    }, [dispatch])

    return (
        <div className="App">
            { isLoading ? (
                <div>Loading...</div> 
            ) : (
                cats.map((cat: any) =>
                    <div key={cat.id} className='row'>
                        <img src={cat.image.url} alt="cat image" width={200} height={200} />
                        <div>
                            <h2>Breed: {cat.name}</h2>
                            <h5>Temperament: {cat.temperament}</h5>
                            <p>Description: {cat.description}</p>
                        </div>
                    </div>
                )
            )}
        <button>Load More</button>
        </div>
    )
}

export default App
