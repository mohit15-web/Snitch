import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { validateForm } from "../utils/validate";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false);
  const provider = new GoogleAuthProvider();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handleGoogleLogin = () => {
    console.log("clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user, " user");
        toast.success("Successfully Logged In", {
          position: "bottom-right",
          theme: "colored",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(
          `Error: ${errorCode}, Message: ${errorMessage}, Email: ${email}, Credential: ${credential}`
        );
        toast.error("Failed to Log In", {
          position: "bottom-right",
          theme: "colored",
        });
      });
  };

  const handleSignup = () => {
    const message = validateForm(email, password);
    toast.error(message, {
      position: "bottom-right",
      theme: "colored",
    });

    if (message) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("user", JSON.stringify({ displayName: name }));
        setShowSignUp(false);
        setEmail("");
        setPassword("");
        toast.success("Successfully Signed Up", {
          position: "bottom-right",
          theme: "colored",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
          theme: "colored",
        });
      });
  };

  const handleLogin = () => {
    const message = validateForm(email, password);
    toast.error(message, {
      position: "bottom-right",
      theme: "colored",
    });

    if (message) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Successfully Signed In", {
          position: "bottom-right",
          theme: "colored",
        });
      })
      navigate("/")
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
          theme: "colored",
        });
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-48">
        <h1 className="text-3xl font-semibold">
          {showSignUp ? "Sign Up" : "Login"}
        </h1>

        <div className="flex flex-col gap-4 justify-center items-center mt-6">
          {showSignUp ? (
            <input
              placeholder="Name"
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : null}

          <input
            placeholder="Email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!showSignUp ? (
            <>
              <button
                className="border px-12 my-4 py-3 rounded-xl bg-black text-white text-sm"
                style={{ borderLeft: "none" }}
                onClick={handleLogin}
              >
                Login
              </button>
             
            </>
          ) : (
            <button
            className="border px-12 my-4 py-3 rounded-xl bg-black text-white text-sm"
            style={{ borderLeft: "none" }}
              onClick={handleSignup}
            >
              Sign Up
            </button>
          )}
        </div>

       
        <h1 className="pb-4 cursor-pointer" onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? (
            <p>Already have an account? <span className="font-bold">Log in</span></p>
          ): (
            // eslint-disable-next-line react/no-unescaped-entities
            <p>Don't have an account? <span className="font-bold">Sign Up</span></p>
          )}
        </h1>

        <p className="text-sm mb-4">---------- or Sign in with ----------</p>

        <div className="flex justify-center items-center text-lg cursor-pointer gap-2 border py-2 px-5 border-gray-300 rounded-lg"
                onClick={handleGoogleLogin}
        >
          <BsGoogle className="text-xl" />
          Login with Google{" "}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
