import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return(

        <div className={styles.container}>
            <div className={styles.item}>
                <Image src = "/img/bg.png" objectFit='cover' layout='fill' alt='' />
            </div>
            <div className={styles.item}>
            <div className={styles.card}>
                <h2 className={styles.motto}>
                    OH YES, WE DID THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
                </h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                <p className={styles.text}>
                    2456 ZIMMERMAN ROYSAMBU 
                    <br /> Kasarani, 22556
                    <br /> (254) 675-88754
                </p>
                <p className={styles.text}>
                    2456 ZIMMERMAN ROYSAMBU 
                    <br /> Kasarani, 22556
                    <br /> (254) 675-88754
                </p>
                <p className={styles.text}>
                    2456 ZIMMERMAN ROYSAMBU 
                    <br /> Kasarani, 22556
                    <br /> (254) 675-88754
                </p>
            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
                MONDAY UNTIL FRIDAY
                <br /> 9:00 - 22:00
            </p>
            <p className={styles.text}>
                SATURDAY - SUNDAY
                <br /> 12:00 - 22:00
            </p>
            </div>
            </div>
           

        </div>
    )



}

export default Footer