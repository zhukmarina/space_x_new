import React from "react";
import styles from "./ItemOne.module.scss";
import Carousel from "../Carousel"

const ItemOne = ({ item }) => {

  return (
    <>
      {item && (<>

        <div className={styles.imgContainer}>
          <Carousel item={item} />
        </div>

        <div className={styles.info}>
          <span className={styles.info_title}>{item.name}</span>
          <span className={styles.info_params}>{item.description}</span>

          <span><a href={`${item.wikipedia}`}>Link to Wikipedia</a></span>
          <div className={styles.info_params}>
            <h1 className={styles.title}>Details:</h1>

            <div className={styles.paramsItemContainer}>
              <div className={styles.paramsItem}>
                <h2>Mass:</h2>
                <p>{item.dry_mass_kg}kg</p>
              </div>
              <div className={styles.paramsItem}>
                <h2>
                  Height:</h2>
                <p>{item.height_w_trunk.meters} m</p>
              </div>
              <div className={styles.paramsItem}>
                <h2>
                  Crew capacity:</h2>
                {item.crew_capacity}</div>
              <div className={styles.paramsItem}>
                <h2>
                  First flight:</h2>
                {item.first_flight}
              </div>
              <div className={styles.paramsItem}>
                <h2>
                  Type:</h2>
                {item.type}</div>
              
              <div className={styles.paramsItem}>
                <h2>
                  Fuel:</h2>
                {item.thrusters[0].fuel_1}</div>
            </div>
          </div>
        </div>
      </>

      )}
    </>
  )
}

export default ItemOne;