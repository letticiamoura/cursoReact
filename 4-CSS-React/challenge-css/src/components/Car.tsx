import Styles from './Car.module.css';

type car = {
    img: string,
    title: string,
    description:string
}

export default function Car({ img, title, description }:car) {
    return(
        <div className={Styles.carContainer}>
            
            <div className={Styles.car}>
                <img src={img} alt="car" />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}