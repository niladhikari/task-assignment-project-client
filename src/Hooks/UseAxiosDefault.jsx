import axios from "axios";


const UseAxiosDefault = () => {
    const defaultAxios = axios.create({
        baseURL : 'https://task-assignment-project-server.vercel.app/'
})
    return (
        defaultAxios
    );
};

export default UseAxiosDefault;