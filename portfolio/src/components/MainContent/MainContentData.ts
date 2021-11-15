const NEW_LINE = "{newLine}";

const mainContentDataRaw = [
  {
    title: "About Me",
    description: `
        I am a Lancaster University graduate with a master’s in computer science (4 years) achieving a first-class
        honour. Throughout my degree I studied many areas of computer science: Machine learning, natural language processing,
        media coding and processing, languages and compilation, human computer interaction, web applications, networking,
        distributed systems, software design etc.
        ${NEW_LINE}
        After this, I got some industry experience working in multiple agile teams on a few projects. I gained experience of
        Java Spring, more JavaScript and PowerShell, along with some C#.
        `,
  },
  {
    title: "Motivation",
    description: `
        I am a software developer seeking to grow, learn and expand my perspective in my profession. The key to this is
        experiences to learn what is effective and what is not, exposure to different techniques, practices, unique problems
        and constraints is what helps you grow the most. I am a fast learner and I am always looking to improve myself. 
        ${NEW_LINE}
        I firmly believe that having a breadth of knowledge about technologies and techniques to use is the key software
        development. At heart, software is all about solving problems and embedding business knowledge into code.
        The more tools, technologies and techniques you’re aware of, the more methods you have at your
        disposal to tackle those problems and find optimal solutions to them. Given this, I also like to constantly experiment
        with something new when and where possible. Even something as simple as a different naming convention, style of coding,
        method of organising code or even communicating ideas to others. While coding is important to this profession,
        communication is the most dominant factor in any project.   
        `,
  },
  {
    title: "Projects",
    description: `
        Below are some of the projects I have worked on. One of those projects is this portfolio site. It is a recreation of
        my first portfolio site. It is a single page application that uses React with Typescript. 
        ${NEW_LINE}
        My previous portfolio site used PHP, which isn't the best choice for a static website. So I want to recreate it using 
        my new experience and learnings in React and software in general, along with a bit more of a modern design, among making
        it portable.
    `,
  },
];

const mainContentData = mainContentDataRaw.map(({ title, description }) => {
  return {
    title,
    description: description.split(NEW_LINE),
  };
});

export default mainContentData;
