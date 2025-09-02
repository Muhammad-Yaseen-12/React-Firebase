
import { auth, signOut } from "../config/firebase";

function Profile() {
    let logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("doneeeeeeeeeee");

        }).catch((error) => {
            console.log(error);

        });
    }
    return (
        <div>Profile
            <br />
            <button onClick={logOut}>logout</button>
        </div>
    )
}

export default Profile