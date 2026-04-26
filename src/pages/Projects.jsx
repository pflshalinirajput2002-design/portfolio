import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Vid Tube",
    image: "/vidTube.png",
    link: "https://pflshalinirajput2002-design.github.io/youtubeClone/",
    code: `const handleSearch = () => {
  fetchVideos(query);
};`
  },
  {
     id: 2,
    title: "Analog Clock",
    image: "/Analog.png",
    link: "https://pflshalinirajput2002-design.github.io/analog-clock/",
    code: `const updateClock = () => {
  setTime(new Date());
};`
  },
  {
    id: 3,
    title: "Awesome Mehandi",
    image: "/mehandi.png",
    link: "https://pflshalinirajput2002-design.github.io/stylish-mehandi/index.html",
    code: `useEffect(() => {
  loadDesigns();
}, []);`
  },
  {
    id: 4,
    title: "Gemini Clone",
    image: "/reactGeminiClone.png",
    link: "https://pflshalinirajput2002-design.github.io/gemini-clone/",
    code: `const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    const response = await runChat(prompt);
  };`
  },
  {
    id: 5,
    title: "Admin DashBoard",
    image: "/AdminDashboard.png",
    link: "https://pflshalinirajput2002-design.github.io/Dashboard/",
    code: `<nav class="navbar navbar-default navbar-fixed-top" id="nvbar">
        <div class="container-fluid">
            <div class="navbar-header">
          <button type="button" id="sidebarToggle" class="navbar-toggle">
  };`
  },
  {
    id: 6,
    title: "Quiz",
    image: "/quizimg.png",
    link: "https://pflshalinirajput2002-design.github.io/Quiz/",
    code: `  <nav class="navbar navbar-expand-sm navbar-dark quiz-navbar">
        <div class="container-fluid">
            <img src="LearningImages/quizlogo.png" alt="logo" 
            style="height:50px;width:50px;border-radius:50%;" />
  };`
  }
];

const Projects = () => {
  return (
    <div className="app">
      <div className="content">
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />

              <div className="project-title">
                <h3>{project.title}</h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eye-icon"
                >
                  👁️
                </a>
              </div>

              <pre>
                <code>{project.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Shalini Rajput. All rights reserved.
      </footer>
    </div>
  );
};

export default Projects;
