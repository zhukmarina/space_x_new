import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../appStore/slices/userSlice";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useState } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = (email, password) => {
    setError("");
    setLoading(true);
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
      .catch(() => setError("Failed to create an account"));
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card border="info">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(event) => {
                      setPass(event.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Button
                  onClick={() => handleRegister(email, pass)}
                  disabled={loading}
                  className="w-100"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
            Already have an account? <Link style={{ color: "blue" }} to="/login">Login</Link>
          </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
