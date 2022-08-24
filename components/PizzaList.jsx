import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Try out our pizzas filled with the best imported and local ingredients available.
                We offer premium services including free delivery to houses within the area.
                Do not miss out!
            </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>

        </div>
    )

}

export default PizzaList