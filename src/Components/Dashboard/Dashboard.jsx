import React, {  useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTasks from '../../Hooks/UseTasks';
import Draggable from 'react-draggable';
import UseAxiosDefault from '../../Hooks/UseAxiosDefault';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {
  const { tasks ,refetch} = useTasks();
  const navigate = useNavigate()
  const defaultAxios = UseAxiosDefault()
  const {user} = useContext(AuthContext)

  const handleDrag = (id, position) => {
    // Save the dragged position directly to localStorage
    localStorage.setItem(`draggedPosition_${id}`, JSON.stringify(position));
  };
  const handleDelete = (id) => {
    defaultAxios.delete(`task/${id}`)
    .then(res => {
        if(res?.data ){
              refetch()
        }
    })
  }

  return (
    <div>
     <div className=' flex lg:flex-row flex-col w-max mx-auto gap-7 items-center mb-30'>
     <h1 className="text-2xl mb-[5vh] font-bold text-center mt-[5vh]">Task management dashboard</h1>
      <div id="profile-container" className="profile-picture text-black mr-[4%] cursor-pointer">
   <img className={` rounded-profile`} src={user?.photoURL} alt="" /> 
   </div>
   <p className=' text-center'>Name  {user?.displayName}</p>
   <p className=' text-center'>Email {user?.email}</p>
     </div>
      <Link to="/createTask" className="btn lg:top-[20vh] top-[37vh] flex justify-center items-center fixed right-5 bg-white 2xl:text-lg rounded-xl font-bold">
        <p className="text-2xl 2xl:text-3xl">+</p> <p>Create Task</p>
      </Link>
      <div className="flex  absolute flex-wrap">
        <div className="space-y-5 lg:w-[30vw] p-[2%] ">
          <h3 className="text-xl font-bold text-center">To-do list Tasks</h3>
          <div>
            {tasks?.map((task) => (
              <Draggable
                key={task?._id}
                onDrag={(e, data) => handleDrag(task?._id, { x: data.x, y: data.y })}
                defaultPosition={JSON.parse(localStorage.getItem(`draggedPosition_${task?._id}`)) || { x: 0, y: 0 }}
              >
                <div className="grid px-[2%] py-[1%] rounded-lg border border-gray-300 grid-cols-3">
                  <p>{task?.taskTitle?.slice(0, 6)}</p>
                  
                   <p>{task.taskDescription}</p>
                  <Link onClick={()=>{handleDelete(task?._id)}} className="btn btn-ghost">Delete</Link>
                </div>
              </Draggable>
            ))}
          </div>
        </div>
        <h3 className="text-xl absolute lg:top-0 top-[40vh] left-[10vw] lg:left-[40vw] w-[10vw] font-bold text-center">Ongoing Tasks</h3>
        <h3 className="text-xl absolute top-[80vh] lg:pb-0 pb-[30vh]  left-[10vw] lg:top-0 lg:left-[70vw] w-[10vw] font-bold text-center">Completed Tasks</h3>
      </div>
    </div>
  );
};

export default Dashboard;
