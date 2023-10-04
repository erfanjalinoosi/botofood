import { useEffect, useState } from 'react'
import styles from './CategoriesPage.module.css'
import { useRouter } from 'next/router'
import Card from '../modules/Card'

function CategoriesPage({data}) {
    const router = useRouter()
    const [query, setQuery] = useState({difficulty:"", time:""})
    const ChangeHandler = e => {
        setQuery({...query, [e.target.name]: e.target.value})
    }
    const searchHandler = () =>{
        console.log(query);
        router.push({
            pathname:"/categories",
            query,
        })
    }

    useEffect(() => {
        const {difficulty , time} = router.query;
        if(query.difficulty != difficulty || query.time != time){
            setQuery({difficulty, time})
        }
    }, [])

  return (
    <div className={styles.container}>
        <h2>Categories</h2>
        <div className={styles.subContainer}>
            <div className={styles.select}>
                <select name="difficulty" value={query.difficulty} onChange={ChangeHandler}>
                    <option value="">Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <select name="time" value={query.time} onChange={ChangeHandler}>
                    <option value="">Cooking time</option>
                    <option value="more">More than 30 min</option>
                    <option value="less">Less than 30 min</option>
                </select>
                <button onClick={searchHandler}>Search</button>
            </div>
            <div className={styles.cards}>
                {
                    !data.length ? <img src="/images/search.png" alt='category' />
                    :
                    null
                }
                {
                    data.map((food) => (<Card key={food.id} {...food} />))
                }
            </div>
        </div>

    </div>
  )
}

export default CategoriesPage