import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { initItemsCreator } from "../../appStore/actionCreator/itemCreator";
import Preloader from "../../components/Preloader/Preloader";
import Item from "../../components/items/Item";
import { useEffect } from "react";

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
    <>
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
    </>
  );
};

export default Home;
