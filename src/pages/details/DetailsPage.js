import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemOne from "../../components/itemOne/ItemOne";
import styles from "./DetailsPage.module.scss"


const DetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  
  return (
    <div className={styles.root}>
      <ItemOne item={item}/>
    </div>
  );
};

export default DetailsPage;
