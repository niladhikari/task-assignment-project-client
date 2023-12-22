import Banner from "../../Components/Baneer/Banner";
import UserTypesSection from "../../Components/UsersTypeSection/UserTypeSection";


const HomePage = () => {
    return (
        <div className=" space-y-28">
          <Banner></Banner>
          <UserTypesSection></UserTypesSection>
          
        </div>
    );
};

export default HomePage;