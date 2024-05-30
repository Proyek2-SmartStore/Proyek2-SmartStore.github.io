import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { FiX } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const signup = async () => {
        setLoading(true)
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required");
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            console.log(users);

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
            };

            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("SignUp Succesfully")
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    

    const cancelLogin = () => {
        navigate('../..');
    }

    return (
        <div className=" flex justify-center items-center h-screen" id='SignupForm'>
            {loading && <Loader/>}
            <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
                <div> <FiX size={20} color="white" onClick={cancelLogin} style={{ cursor: 'pointer' }} /> </div>
                <div className="">
                    <h1 className="text-center text-white text-xl mb-4 font-bold">
                        Sign Up
                    </h1>
                </div>
                <div>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Name"
                    />
                </div>
                <div>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Password"
                    />
                </div>
                <div className=" flex justify-center mb-3">
                    <button
                        id="btnSignup"
                        onClick={signup}
                        className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
                    >
                        Sign Up
                    </button>
                </div>
                <div>
                    <h2 className="text-white">
                        Have an account{" "}
                        <Link className=" text-yellow-500 font-bold" to={"/login"}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
