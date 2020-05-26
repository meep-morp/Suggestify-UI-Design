import * as yup from "yup";

const formShema = yup.object().shape({
    username: yup
    .string()
    .required("Please enter your username")
    .min(2, "Please make a username that is 2 characters or more."),

    password: yup
    .string()
    .required("Please enter your password")
    .min(5, "Please enter a password that is 5 characters or more"),
})

export default formShema