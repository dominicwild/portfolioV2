import { join } from "path";

interface ProjectData {
    mediaLink: string;
    title: string;
    descriptionMarkDownFile: string;
    githubLink?: string;
    liveLink?: string;
    dateStarted: Date;
}

const MARKDOWN_DIRECTORY = './data/projects/markdown/';

const randomMediaLink = "https://loremflickr.com/320/240?random=1";
const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

const projects: Array<ProjectData> = [
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Portfolio Site V1",
        descriptionMarkDownFile: "portfolio-site-v1.md",
        dateStarted: new Date(Date.parse("1 Jul 2019")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Enterprise Social Network (ESN)",
        descriptionMarkDownFile: "enterprise-social-network.md",
        dateStarted: new Date(Date.parse("1 Jan 2019")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Distributed Storage & Worker System with RESTful API",
        descriptionMarkDownFile: "distributed-storage-worker.md",
        dateStarted: new Date(Date.parse("1 Nov 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Augmented Reality Mobile Application",
        descriptionMarkDownFile: "ar-mobile-app.md",
        dateStarted: new Date(Date.parse("1 Oct 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Language Classifier",
        descriptionMarkDownFile: "nlp-language-classifier.md",
        dateStarted: new Date(Date.parse("1 Oct 2018")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Distributed Auction System",
        descriptionMarkDownFile: "distributed-auction-system.md",
        dateStarted: new Date(Date.parse("1 Nov 2017")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Micro:bit Mesh",
        descriptionMarkDownFile: "microbit-mesh.md",
        dateStarted: new Date(Date.parse("1 Oct 2017")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Krooza: 2D Twin Stick Shooter",
        descriptionMarkDownFile: "krooza.md",
        dateStarted: new Date(Date.parse("1 Oct 2016")),
    },
    {
        mediaLink: `${randomMediaLink}${getRandomInt(1000)}`,
        title: "Snooker Pool Game",
        descriptionMarkDownFile: "pool-game.md",
        dateStarted: new Date(Date.parse("1 Apr 2016")),
    },
];

projects.forEach(project => {
    project.descriptionMarkDownFile = join(MARKDOWN_DIRECTORY, project.descriptionMarkDownFile);
})

const projectsByDateAscending = [...projects].sort(byDateAscending());
const projectsByDateDescending = [...projectsByDateAscending].reverse();

export default projectsByDateDescending;

function byDateAscending(): ((a: ProjectData, b: ProjectData) => number) | undefined {
    return (a, b) => {
        return a.dateStarted.getTime() - b.dateStarted.getTime();
    };
}
