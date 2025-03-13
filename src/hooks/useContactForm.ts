import { useState } from "react";
import { db, ref, push, } from "@/configs/firebase";
import { toaster } from "@/components/ui/toaster";
import { loginWithSpecificEmail } from "@/services/auth.service";


interface ContactFormData {
    name: string;
    email: string;
    message: string;
    offerPrice: string;
    country: string
}

const useContactForm = () => {

    const [error, setError] = useState<string | null>(null);

    const submitForm = async (formData: ContactFormData, callback: () => void) => {
        setError(null);
        const user = await loginWithSpecificEmail(formData.email)
        try {

            await push(ref(db, "contactForms"), { ...formData, email: user?.user.email, attemptedEmail: formData.email });
            toaster.create({
                title: "Submission Successful",
                description: "Your request has been received. The owner will contact you shortly.",
                type: "success"
            })
            callback()
        } catch (err) {
            toaster.create({
                title: "Submission Failed",
                description: "We encountered an issue while processing your request. Please try again later.",
                type: "error",
            })
            setError("Failed to submit. Please try again.");
        }
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validate = (values: any) => {

        const errors: Record<string, string> = {};

        if (!values.name.trim()) {
            errors.name = "Name is required";
        }

        if (!values.email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.message.trim()) {
            errors.message = "Message is required";
        }
        if (!values.country.trim()) {
            errors.country = "Country is required";
        }


        if (!values.offerPrice) {
            errors.offerPrice = "Offer price is required";
        } else if (isNaN(Number(values.offerPrice))) {
            errors.offerPrice = "Offer price must be a number";
        }

        return errors;
    }

    return {
        formData: {
            name: "",
            email: "",
            message: "",
            offerPrice: "",
            country: ""
        },
        submitForm,
        error,
        validate,

    };
};

export default useContactForm;
