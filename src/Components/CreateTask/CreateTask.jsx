// CreateTaskForm.js

import { useForm } from 'react-hook-form';
import UseAxiosDefault from '../../Hooks/UseAxiosDefault';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const CreateTask = () => {
  const defaultAxios = UseAxiosDefault()
  const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email
    console.log('Submitted data:', data);
    setValue('taskTitle', '');
    setValue('taskDescription', '');
    setValue('taskDeadline', '');
    setValue('taskPriority', '');
    if(data && data.email){
      defaultAxios.post('/task' , data)
      .then(res => {
        console.log(res.data)
       if(res.data.insertedId){
        toast.success("you have successfully created a task")
       }
      })
    }
  };

  return (
    <>
    <Toaster
    position="top-center"
    reverseOrder={false}
    toastOptions={{className:" text-center"}}
    
/>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Create New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
    
        <div className="mb-4">
          <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-600">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            name="taskTitle"
            {...register('taskTitle', { required: 'Task title is required' })}
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${
              errors.taskTitle ? 'border-red-500' : 'focus:border-black'
            }`}
          />
          {errors.taskTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.taskTitle.message}</p>
          )}
        </div>

        {/* Task Description */}
        <div className="mb-4">
          <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-600">
            Task Description
          </label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            {...register('taskDescription', { required: 'Task description is required' })}
            rows="3"
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${
              errors.taskDescription ? 'border-red-500' : 'focus:border-black'
            }`}
          ></textarea>
          {errors.taskDescription && (
            <p className="text-red-500 text-sm mt-1">{errors.taskDescription.message}</p>
          )}
        </div>

        {/* Task Deadline */}
        <div className="mb-4">
          <label htmlFor="taskDeadline" className="block text-sm font-medium text-gray-600">
            Deadline
          </label>
          <input
            type="date"
            id="taskDeadline"
            name="taskDeadline"
            {...register('taskDeadline', { required: 'Task deadline is required' })}
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${
              errors.taskDeadline ? 'border-red-500' : 'focus:border-black'
            }`}
          />
          {errors.taskDeadline && (
            <p className="text-red-500 text-sm mt-1">{errors.taskDeadline.message}</p>
          )}
        </div>

        {/* Task Priority */}
        <div className="mb-4">
          <label htmlFor="taskPriority" className="block text-sm font-medium text-gray-600">
            Priority
          </label>
          <select
            id="taskPriority"
            name="taskPriority"
            {...register('taskPriority', { required: 'Task priority is required' })}
            className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${
              errors.taskPriority ? 'border-red-500' : 'focus:border-black'
            }`}
          >
            <option value="" disabled>
              Select Priority
            </option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          {errors.taskPriority && (
            <p className="text-red-500 text-sm mt-1">{errors.taskPriority.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-black text-white p-2 rounded-md hover:bg-black focus:outline-none focus:shadow-outline-black "
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateTask;
