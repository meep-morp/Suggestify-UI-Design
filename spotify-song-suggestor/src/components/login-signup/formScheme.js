import * as yup from "yup";

const formShema = yup.object().shape({
    first_name: yup.string().required("Please enter your first name"),
    
    last_name: yup.string().required("Please enter your last name"),

	username: yup
		.string()
		.required("Please enter your username")
		.min(2, "Please make a username that is 2 characters or more"),

	password: yup
		.string()
		.required("Please enter your password")
		.min(5, "Please enter a password that is 5 characters or more"),
});

export default formShema;
