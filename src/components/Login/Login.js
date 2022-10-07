import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form";
import { setUser } from "../../appStore/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        localStorage.setItem('authToken', user.email)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
        
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
  <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
      <Form title=" log in " handleClick={handleLogin} />
      <p>
        Need an account? <Link style={{color:"blue"}}to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
