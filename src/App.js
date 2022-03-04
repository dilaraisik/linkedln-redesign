import "./App.css";
import Navbar from "./components/navbar";
import AboutCard from "./components/about-card";
import ProjectsCard from "./components/projects-card";
import SkillsCard from "./components/skills-and-endoresments-card";
import ExperienceCard from "./components/experience-card";
import EducationCard from "./components/education-card";
import Footer from "./components/footer";
import ProfileCard from "./components/profile-card";
import Dashboard from "./components/dashboard";
import Visitors from "./components/visitors";
import Courses from "./components/courses";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-10 max-w-[1180px] w-full mx-auto">
        <div className="w-full max-w-[850px] gap-y-10 flex flex-col">
          <ProfileCard />
          <AboutCard />
          <ProjectsCard />
          <SkillsCard />
          <ExperienceCard />
          <EducationCard />
        </div>
        <div className="max-w-[290px] w-full flex flex-col gap-y-10 mt-10">
          <Dashboard />
          <Visitors />
          <Courses />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
