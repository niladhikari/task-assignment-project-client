import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UseAxiosDefault from "../../Hooks/UseAxiosDefault";
import { AuthContext } from "../../Providers/AuthProvider";


const Details = () => {
    const params = useParams()
    console.log(params.id)
 
    const axiosDefault = UseAxiosDefault()
    const {user , loading} = useContext(AuthContext)

  // eslint-disable-next-line no-unused-vars
  const { data , isPending , isLoading , refetch} = useQuery({
      queryKey:["tasks"],
      queryFn : async()=>{
          const response = await axiosDefault.get(`/task/${params?.id}`)
          return response.data

      },
      enabled:!loading
    
  })
  if( isPending){
      return(
          <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
      
      )
  }
  return (
    <div>
        <div className={`  flex justify-between drop-shadow-xl  shadow-lg d-200 space-y-3 2xl:text-2xl lg:text-xl text-base w-[80vw] p-[2%] rounded-2xl mx-auto mt-[5vh]`}>

           <div className=" space-y-3">
           <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Task Title</span>: {data?.taskTitle}</p>
            <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Task Description</span>: {data?.taskDescription}</p>
            <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl"></span>Task Deadline : {data?.taskDeadline}</p>
            <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Task Priority </span> : {data?.taskPriority}</p>
         
            
         </div>
         </div>
           
    </div>
  )
};

export default Details;