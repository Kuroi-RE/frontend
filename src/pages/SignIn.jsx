import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import OAuth from "../Components/OAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  SignInFailure,
  SignInStart,
  SignInSuccess,
} from "../redux/users/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const { Loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(SignInFailure("Please fill all the fields"));
    }

    try {
      dispatch(SignInStart());
      const response = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        return dispatch(SignInFailure(data.message));
      }
      if (response.ok) {
        dispatch(SignInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(SignInFailure(error.message));
    }
  };

  return (
    <section className="min-h-screen mt-20">
      <div
        className="
      flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5"
      >
        <div className="flex-1">
          <h1 className="text-5xl">Login Page</h1>
          <p>Sign in or Sign up with your account to continue</p>
        </div>

        <div className="flex-1">
          <form
            action=""
            onSubmit={HandleSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="yourname@gmail.com"
                id="email"
                onChange={HandleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={HandleChange}
              />
            </div>

            <Button color="green" type="submit" disabled={Loading}>
              {Loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading..</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-3">
            <span>Dont Have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign in
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignIn;
