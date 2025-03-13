import { auth } from "@/configs/firebase";
import { GoogleAuthProvider, signInWithPopup, UserCredential } from "firebase/auth";

/**
 * Logs in the user with Google for a specific email.
 * @param {string} email - The email address to restrict login.
 * @returns {Promise<UserCredential | null>} - The authenticated user's credential, or null if login fails.
 */
export const loginWithSpecificEmail = async (email: string): Promise<UserCredential | null> => {
    try {
        const provider = new GoogleAuthProvider();


        provider.setCustomParameters({ login_hint: email });

        const result = await signInWithPopup(auth, provider);



        return result;
    } catch (error) {
        console.error("Google login failed:", error);
        return null;
    }
};
