import React from "react";
import styles from "./Item.module.scss";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const { name, pic, id } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.root} onClick={() => navigate(`/dragons/${id}`)}>
        <span className={styles.title}>{name}</span>
          <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url("${pic}")` }}
        />
      </div>
    </>
  );
};

export default Item;
