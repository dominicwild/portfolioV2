interface ProjectData {
    mediaLink: string;
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    dateStarted: Date;
}

const randomMediaLink = "https://loremflickr.com/320/240?random=1";
const getRandomInt = (max : number) => {
    return Math.floor(Math.random() * max);
}

const projects: Array<ProjectData> = [
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Portfolio Site V1",
        description: `
I made this site completely from scratch, only using Bootstrap. I took this opportunity to make the site in a mobile first 
manner, making it completely responsive was a goal of this project.

With this project I also put to use some lessons I learned in my prior social network project. Some key aspects I explored in 
this project were: Use of PHP for templating repetitive page elements, using Google fonts, using CSS animations, responsive 
design and content management.

One design decision I made on this site was not to use a database. As this seemed overkill for a static website 
(no complex data or data relationships), at least at the scale it is now. Being much easier to manage with PHP arrays that 
dynamically create content, essentially a database as PHP arrays instead.

This website will continue to grow over time as more projects get developed. At the moment the layout is fairly simple and I 
plan to evolve it into something more visually appealing in the future as a passion project. Some usability improvements are 
also planned.`,
        dateStarted: new Date(Date.parse("Jul 2019")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Enterprise Social Network (ESN)",
        description: `
This project was undertaken as part of my university placement. It involved developing a social networking site through the 
full software development life cycle (Analyis, design, implementation, testing and evaluation). The company was facing some 
internal social communication problems, no knew what events were happening or what their co-workers were up to. Initial 
need-finding took place via interviews and a company wide questionnaire, data quantized, analyzed and requirements were derived,
 among a Minimum Viable Product (MVP) plan.

The requirements were designed and then implemented successfully, meeting the MVP. The project later went on to form part of 
my dissertation designing an incremental development technique for Enterprise Social Networks. The ESN was made with CakePHP,
which sped up development and taught me a lot about web development, the general architecture and approaches most common
frameworks employ to streamline development.

During the testing phase, the company was unable to deploy my solution on their services in good time. Therefore over a 
weekend I decided to move my solution to Amazon AWS. This was my first time deploying a web server on a linux distribution,
it involved lots of rapid learning and was a very fun experience. The knowledge I gained from this experience was invaluable,
as I'm utilizing it right now, to write and host this portfolio website!

The finished product was feature complete containing the following features:

- OAuth2 Google authentication
- User Posts and Comments
- Image Attachments for Posts
- User Created Polls
- Recent Activity Panel
- Event System (for organising social events)
- Group System (for categorizing events and posts)
- Google Calendar Integration (for events)
- Administration Page
- HTML Email Notifications for various alerts (new events, comments, posts etc)
- User Profiles
- Search Function`,
        dateStarted: new Date(Date.parse("Jan 2019")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Distributed Storage & Worker System with RESTful API",
        description: `
A system developed where simple jobs could be submitted via a web interface. Simple jobs such as encryption, text analysis 
and hashing were available. The results of these jobs were available to download asynchronously from the browser on completion.

The distributed system was developed entirely in Java, using a Java servlet to send/receive REST API calls. Data was stored 
on the backend using a Distributed Hash Table (DHT), using a robust architectural topology with nodes arranged in a ring.

This project stressed by OO design capabilities, making nodes that could function as works, storage nodes or both, using 
inheritance to achieve this feature. Along with experience of developing concurrent applications, processes and implementing
abstract algorithms into code.

Conclusion of the project involved a fault tolerant system able to keep track of stored files, their status, manage node or 
operation failures and handle collisions.`,
        dateStarted: new Date(Date.parse("Nov 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Augmented Reality Mobile Application",
        description: `
This was a group project named HEART (Historical Experiences in Augmented Reality). The application was developed in Unity 
(using C#) using a library called Vuforia which specializes in the development of AR applications.

HEART's goal was to digitally reconstruct old heritage sites and provide a innovative approach to delivering information about 
such a site. We developed a prototype, not having the technical expertise or resources to achieve the full product.

My responsibilities in this project were coding parts of the application, such as scripts to play media, progress bar & its 
trigger, researching voice controls etc. I also designed an experiment to test the usability of the application following a 
validated scale for measuring usability, which I adapated specifically for the experiment. I gather participants, explained 
the procedure and statistically analysed the results.

Meeting deadlines within this project was of critical importance, therefore I made and managed a Slack to keep track of 
everyone's work. I integrated this will Google Doc notifications to ensure the team was always aware of when new files were 
added to our shared resources. The project demonstrated the importance of keeping active communication with a team to ensure 
a project is on track and help team members with any bumps along the way. Along with asking for help from people on the team 
with more Unity experience than me, they were a valuable source of learning.

The conclusion of the project was a proof of concept AR application with voice assistant, hot spots, voice controls, audio 
and video logs, animated historical scenes etc. that highlighted the future challenges such an application would face.`,
        dateStarted: new Date(Date.parse("Oct 2018")),
    }
];

projects.sort((a, b) => {
    return a.dateStarted.getTime() - b.dateStarted.getTime();
}).reverse();

export default projects;