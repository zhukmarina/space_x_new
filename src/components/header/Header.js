import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../appStore/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  const user = localStorage.getItem("authToken");
  return (
    <>
      <header className={styles.root}>
        <Link to="/dragons">
          <span>Space X</span>
        </Link>
        {isAuth || user ? (
          <span className={styles.userContainer}>
            Welcome {email || user}
            <LogoutIcon onClick={() => dispatch(removeUser())} />
          </span>
        ) : (
          <LoginIcon onClick={() => navigate("/login")} />
        )}
      </header>
    </>
  );
};

export default Header;
