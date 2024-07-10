import { Button } from "flowbite-react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const OAuth = () => {
  const HandleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsGoogle = await signInWithPopup(auth, provider);
      const response = await fetch('/api/auth/google', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                name: resultsGoogle.user.displayName,
                email: resultsGoogle.user.email,
                photoUrl: resultsGoogle.user.photoURL,
            }
        )
      })

      const data = await response.json()
      if(data.success ===)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button type="button" outline onClick={HandleGoogleAuth}>
      Continue With Google
    </Button>
  );
};

export default OAuth;
