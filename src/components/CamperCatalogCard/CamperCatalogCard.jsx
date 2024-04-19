import sprite from "../images/sprite.svg";
import styles from "./CamperCatalogCard.module.css"

export const CamperCatalogCamp = ({ data, favorite, setActive, setAdvertId, addFavorite }) => {
    const handleClickFav = (data) => {
        if(!favorite) addFavorite(data)
    }

    return (
        <li className={styles.main_box}>
            <div className={styles.picture_box}>
                <img className={styles.picture} src={data.gallery[0]} alt={data.name} />
            </div>
            <div >
                <div className={styles.title_box}>
                    <h2 className={styles.title}>{data.name}</h2>
                    <div className={styles.price_box}>
                        <p className={styles.price}>€{data.price}</p>
                        <button className={styles.fav_button} onClick={handleClickFav(data)}>
                            <svg width="24" height="24">
                                <use href={favorite ?  sprite + "#icon-Property-1pressed" : sprite + "#icon-Property-1Default"} />
                            </svg>
                        </button>
                    </div>
                </div> 
                <div className={styles.info_box}> 
                    <p className={styles.reviews}><svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>{data.rating}({data.reviews.length} Reviews)</p>
                    <p className={styles.location}><svg width="16" height="16"><use href={sprite + "#icon-location"} /></svg>{data.location}</p>
                </div>  
                    <p className={styles.description}>{data.description.slice(0, 65) + "..."}</p>
                <ul className={styles.button_box}>
                    <li className={styles.button_item}>
                        <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Users"} /></svg>{data.adults} adults</button>
                    </li>
                    <li className={styles.button_item}>
                        <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Automatic"} /></svg>Automatic</button>

                    </li>
                    <li className={styles.button_item}>
                        <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vertical-container"} /></svg>Petrol</button>
                    </li>
                    <li className={styles.button_item}>
                        <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Kitchen"} /></svg>Kitchen</button>
                    </li>
                    <li className={styles.button_item}>
                        <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Bed"} /></svg>{data.beds } beds</button>
                    </li>
                    <li className={styles.button_item}>
                        <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vector"} /></svg>AC</button>
                    </li>
                </ul>
                <button className={styles.show_more_button} type="button" onClick={() => { setActive(true); setAdvertId(data._id)}}>Show more</button>
            </div>    
        </li>
    )
}