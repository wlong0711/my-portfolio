import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SportHall",
      description: "A MERN stack booking platform for sports courts. Features complex conflict detection algorithms to prevent double-bookings, an interactive Admin Dashboard, and JWT authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", // Placeholder: Gym/Sport
    //   github: "#", // Add your real link later
    //   demo: "#"
    },
    {
      title: "EasyCook AI",
      description: "An AI-powered mobile app that recommends recipes by recognizing ingredients from photos. Integrated Gemini 1.5 Flash model and Spoonacular API.",
      tech: ["Flutter", "Dart", "Firebase", "Gemini AI", "MVVM"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1470&auto=format&fit=crop", // Placeholder: Cooking
    //   github: "#",
    //   demo: "#"
    },
    {
      title: "Online Learning Platform",
      description: "A comprehensive e-learning system with course management and quizzes. Built with Vue 3 using MVC architecture and role-based access control.",
      tech: ["Vue.js", "Firebase", "MongoDB", "JavaScript"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop", // Placeholder: Education
    //   github: "#",
    //   demo: "#"
    },
    {
      title: "RecycleGo",
      description: "Location-based recycling app promoting eco-friendly habits. Integrated Google Maps API for tracking and JIRA for Agile project management.",
      tech: ["Flutter", "Google Maps API", "Firebase", "Agile"],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1470&auto=format&fit=crop", // Placeholder: Recycling
    //   github: "#",
    //   demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
          Featured Work
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}