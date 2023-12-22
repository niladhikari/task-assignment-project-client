

import { useQuery } from "@tanstack/react-query";

import UseAxiosDefault from "./UseAxiosDefault";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useTasks = () => {
      const axiosDefault = UseAxiosDefault()
      const {user , loading} = useContext(AuthContext)

    const { data:tasks , isPending , isLoading , refetch} = useQuery({
        queryKey:["tasks"],
        queryFn : async()=>{
            const response = await axiosDefault.get(`/tasks/${user?.email}`)
            return response.data

        },
        enabled:!loading
      
    })
    if( isPending){
        return(
            <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
        
        )
    }
    return {tasks , isPending , isLoading , refetch}
};

export default useTasks;