import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SelectUserName, setUserLoginDetails } from "../feature/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function AuthForm({ isSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const userName = useSelector(SelectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
    return () => unsubscribe();
  }, [userName]);
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user; // Get the user object from the result
        setUser(user); // Pass the user object to setUser
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        setUserUsingEmail(email);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setUserUsingEmail(email);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  const setUserUsingEmail = (email) => {
    dispatch(
      setUserLoginDetails({
        email: email,
      })
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border rounded text-black"
          />
          {!isSignUp && (
            <button
              type="button"
              className="login-with-google-btn w-full mt-2"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <Link to={isSignUp ? "/signin" : "/signup"} className="text-blue-500">
            {" "}
            {isSignUp ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
