import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosDefault from "./UseAxiosDefault";


const UseOngoingTasks = () => {
    const axiosDefault = UseAxiosDefault()
    const {user , loading} = useContext(AuthContext)

  const { data:ongoing , isPending , isLoading , refetch} = useQuery({
      queryKey:["tasks"],
      queryFn : async()=>{
          const response = await axiosDefault.get(`/tasks/${user?.email}`)
          return response?.data?.filter(task => {task?.result === "ongoing"})

      },
      enabled:!loading
    
  })
  if( isPending){
      return(
          <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
      
      )
  }
  return {ongoing , isPending , isLoading , refetch}
};

export default UseOngoingTasks;