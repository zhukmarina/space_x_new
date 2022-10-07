import React from "react";
import styles from "./ItemOne.module.scss";
import Carousel from "../Carousel"

const ItemOne = ({item}) => {
    
return(
<>
{item && (
        <div className={styles.root}>
          <div className={styles.imgContainer}>
            <Carousel item={item} />           
            </div>
         
          <div className={styles.info}>
          <span className={styles.title}>{item.name}</span>
          <span className={styles.params}>{item.description}</span>

          <span><a href={`${item.wikipedia}`}>Link to Wikipedia</a></span>
          <div className={styles.params}>
            <p className={styles.title}>Details:</p>
          
          <span>Mass: {item.dry_mass_kg} kg</span>
          <span>Height: {item.height_w_trunk.meters} m</span>
          <span>First flight: {item.first_flight}</span>
          </div>
          </div>
        </div>
      )}
    </>
)}

export default ItemOne;