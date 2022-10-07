import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form";
import { setUser } from "../../appStore/slices/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        localStorage.setItem("authToken", user.email);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
      <Form title="register" handleClick={handleRegister} />
      <p>
        Already have an account? <Link style={{color:"blue"}} to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
