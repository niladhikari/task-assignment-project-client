

import { motion } from 'framer-motion';

const Blog = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="container mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl">
      <motion.div
        className="card p-4 shadow-lg  rounded-lg bg-blue-300"
        variants={cardVariants}
        initial="hidden"
        whileHover="hover"
        animate="visible"
      >
        <h3 className="font-bold text-xl mb-2">
          The Evolution of Task Management Platforms
        </h3>
        <p className="text-gray-600">
        This blog could dive into the history and evolution of task management
          systems. It might explore how task management platforms have evolved
          from traditional to modern digital solutions, discussing the
          technological advancements, features, and usability improvements that
          have shaped their evolution. You can also cover the significance of
          cloud-based solutions, collaborative tools, and mobile applications in
          todays task management landscape
        </p>
      </motion.div>

      <motion.div
        className="card p-4 shadow-lg bg-blue-300 rounded-lg"
        variants={cardVariants}
        initial="hidden"
        whileHover="hover"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <h3 className="font-bold text-xl mb-2">Strategies and Best Practices</h3>
        <p className="text-gray-600">
        This blog could delve into the core strategies and best practices for
          effective task management. It might cover topics such as task
          prioritization techniques, time management strategies, collaborative
          task allocation methods, and the role of task management tools in
          streamlining workflows. You could also include tips for overcoming
          common challenges in managing tasks and achieving productivity
        </p>
      </motion.div>

      <motion.div
        className="card p-4 shadow-lg bg-blue-300 rounded-lg"
        variants={cardVariants}
        initial="hidden"
        whileHover="hover"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <h3 className="font-bold text-xl mb-2">A Comprehensive Guide</h3>
        <p className="text-gray-600">
        This blog could guide readers through the process of selecting the
          most suitable task management platform for their needs. It might
          discuss key factors to consider when evaluating task management tools,
          such as features, scalability, integrations, user interface, pricing
          models, and customer support. Comparisons between different platforms,
          their strengths, weaknesses, and use-case scenarios can be valuable in
          aiding readers decision-making process.
        </p>
      </motion.div>
    </div>
  );
};

export default Blog;