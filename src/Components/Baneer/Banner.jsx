import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero lg:min-h-[90vh] min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/QFCPhjk/task-management-dependencies.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5"> A task management platform streamlines productivity by efficiently
            organizing and tracking assignments across teams and individuals.</p>
            <Link to='/dashboard' className="btn btn-ghost border border-white">Lets Explore</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;