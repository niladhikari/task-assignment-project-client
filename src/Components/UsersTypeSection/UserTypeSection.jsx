
import { motion } from 'framer-motion';
import SectionTitle from '../../Pages/SectionTitle/SectionTitle';

const UserTypeSection = () => {

  const cardVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05 },
  };

  const users = [
    {
      title: "Project Managers",
      description:
        "Overseeing project progress, assigning tasks, and monitoring team performance.",
    },
    {
      title: "Remote Workers",
      description:
        "Facilitating collaboration, task allocation, and progress tracking among distributed teams.",
    },
    {
      title: "Small Business Owners",
      description:
        "Handling day-to-day operations, task delegation, and project management.",
    },
    {
      title: "Students",
      description:
        "Planning and managing academic assignments, projects, and study schedules.",
    },
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      description:
        "Helps individuals and teams stay organized and focused, enhancing productivity.",
    },
    {
      title: "Efficient Collaboration",
      description:
        "Facilitates seamless communication, task delegation, and progress tracking among team members.",
    },
    {
      title: "Deadline Management",
      description:
        "Ensures timely completion of tasks and projects, reducing delays.",
    },
    {
      title: "Resource Optimization",
      description:
        "Enables better resource allocation and utilization for enhanced efficiency.",
    },
  ];

  return (
     <div className="mt-20 max-w-7xl mx-auto">
      <SectionTitle subHeading="What is Our Client Benefits" heading={'Task Management Users'} />
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 px-3 lg:px-0">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Types of Users</h2>
          <div className="space-y-4">
            {users.map((user, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
              >
                <h3 className="text-lg font-semibold mb-2">{user.title}</h3>
                <p className="text-gray-600">{user.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Benefits</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
              >
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSection;
