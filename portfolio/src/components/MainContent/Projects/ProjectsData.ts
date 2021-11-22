interface ProjectData {
    mediaLink: string;
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    dateStarted: Date;
}

const randomMediaLink = "https://loremflickr.com/320/240?random=1";
const getRandomInt = (max: number) => {
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
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Language Classifier",
        description: `
A Natural Language Processing project using machine learning techniques to identify the language of a particular corpus of text.

The classifier was made completely from scratch using Java, with no external machine learning libraries used. 
Cross validation, frequency analysis and variable training set size methods were used to evaluate the effectiveness of the 
technique implemented.

My language identification system works on using rank-order n-gram statistics to predict a language. The output of my system 
is a distance metric that determines how likely a piece of text is to be a particular target language. Implementation was based
off of a research paper.

Building this system taught me a lot about machine learning and the processes that need to be undertaken in order to process
 data. It gave me experience of processing high volumes of data (300k sentences) and analysing that data to form conclusions.

The conclusion of this project was an accurate classifier, maintaining 95% accuracy even for corpus only 20-40 words in size,
needing 30,000-40,000 words to give stable predictions. This was all validated using 10 fold cross validation (tested only 
with English, Czech, German and Solvenian ).`,
        dateStarted: new Date(Date.parse("Oct 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Distributed Auction System",
        description: `
A distributed fault tolerant auction system made with Java. Featured a dynamic replication server, authentication mechanism, 
encrypted data transmission, 5 step challenge response protocol.

The project made strong use of Java RMI (remote method invocation) for communication between clients and servers. There were 
distributed auction servers that had to keep up-to-date with the system as a whole to function correctly. JGroups was used as
a group server communication protocol library to ensure atomic interactions, guarantee packet arrival, manage dead connections
 etc.

The project concluded with a robust and simple distributed auction system, giving me lots of experience in the challenges
associated with design, architecture and programming distributed systems.`,
        dateStarted: new Date(Date.parse("Oct 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Micro:bit Mesh",
        description: `
Micro:bit Mesh was a mesh network protocol I developed for the BBC Micro:bit. It was a feature added with the aim to teach kids
 about the computing concept of networking, giving them a tool to play around with.

The project involved very low level C/C++ programming using the Micro:bits run time called codal. This project stressed reading
and understanding how, at a low level, embedded systems hardware could be manipulated to achieved the desired effects, working
a lot with the Micro:bits radio. One of the biggest challenges I faced while doing this project was debugging the Micro:bits,
as its difficult to know what programming logic/state each system was in. To aide in this, I made use of the Micro:bits
LED's and serial I/O to print debug data.

Feasibility tests, design, implementation and evaluation of the protocol was conducted. The protocol was based off Glossy, a
controlled packet flooding approach to mesh networks that came up in research.

The conclusion of this project was that this approach is possible, however encountered strange patterns of high packet loss 
in correlation to distance/physical network topology and therefore requires more thorough investigation from a physics 
perspective.`,
        dateStarted: new Date(Date.parse("Oct 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Krooza: 2D Twin Stick Shooter",
        description: `
A game developed through the Java's JSFML library. This game was developed alongside some friends of mine. Art was made by a 
friend and majority of the coding was done by me.

The experience taught me a lot about the importance and effectiveness of object orientated design. Before development I made a 
UML diagram to plan out the object design, with inheritance and along with how the code would flow, what particular classes and 
objects should generally do, how the engine would work, any extra challenges we may face.

The parts of the game I coded were:

- The Game Engine
- 4 Coordinated Enemy AI Types
- Car Modification System (swap different tyres, weapons (primary and secondary weapons), armour, car skins)
- Physics Engine
- Rendering Engine
- The Game's HUD
- Two Game Modes (Hoard and Survival Mode)

Working within a group also meant it was important to keep code well documented and commented. I therefore kept all code 
commented and up to date. I scheduled regular communication and meetings to ensure we were making steady progress, catching 
problems early.

The result was a game with a refined twin stick combat system. The game does however lack content to consider it a full fledged 
game, however the baseline exists for this game to be developed into something official.`,
        dateStarted: new Date(Date.parse("Oct 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Snooker Pool Game",
        description: `
A basic project that was developed for fun entirely through Java. The Snooker game was used as a way to practice object 
orientated design and tackle the challenges associated with building a game (such as dealing with frames and game logic).

The conclusion of this project is a fully implemented game of Snooker, tested for following all the rules correctly.`,
        dateStarted: new Date(Date.parse("Oct 2018")),
    },
];

projects.sort((a, b) => {
    return a.dateStarted.getTime() - b.dateStarted.getTime();
}).reverse();

export default projects;