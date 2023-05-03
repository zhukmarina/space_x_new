import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { initItemsCreator } from "../../appStore/actionCreator/itemCreator";
import Preloader from "../../components/Preloader/Preloader";
import Item from "../../components/items/Item";
import { useEffect } from "react";
import styles from "./Home.module.scss"
import {SlArrowDown} from 'react-icons/sl'

const Home = (props) => {
  const { items } = useSelector(({ items }) => items, shallowEqual);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.items);
  const dragons = localStorage.getItem("dragons");
  useEffect(() => {
    dispatch(initItemsCreator());
  }, [dispatch]);

  return !dragons || isLoading ? (
    <Preloader />
  ) : (
    <div className={styles.primary}>
      
      <div className={styles.primary_tagline}>
      <h1>MARS & BEYOND</h1>
      <span>THE ROAD TO MAKING HUMANITY MULTIPLANETARY</span>
      </div>

      <div className={styles.primary_arrow}>
        Choose rocket for your trip 
        <SlArrowDown/>
        </div>
        
      <div className={styles.choose}>
      {items.map((element) => {
        return (
          <Item
            key={element.id}
            name={element.name}
            pic={element.flickr_images}
            description={element.description}
            id={element.id}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Home;
