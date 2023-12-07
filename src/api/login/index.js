import axios from "axios";

const API_URL=process.env.REACT_APP_BASE_API_URL;
// const USER_URL=API_URL+"/users";
const USER_URL=API_URL+"/login";

export const checkLoginInfo=async (student_id,password)=>{
	try{
		const body={
			student_id:student_id,//commented out for testing
			password:password
		};

		// const response = await axios.post(USER_URL+"/"+student_id+"/login",body);
		const response = await axios.post(USER_URL,body);
		if(response.status === 200){
			localStorage.setItem("student_id",student_id);
			return true;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};