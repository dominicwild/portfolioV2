import { FunctionComponent } from 'react';
import { AmazonwebservicesPlainWordmarkIcon, AzurePlainIcon, CakephpPlainIcon, CPlainIcon, CplusplusPlainIcon, CsharpPlainIcon, Css3PlainIcon, ErlangPlainIcon, Html5PlainIcon, JavascriptPlainIcon, MatlabPlainIcon, MysqlPlainIcon, PhpPlainIcon, PythonPlainIcon, ReactOriginalIcon,RPlainIcon, TypescriptOriginalIcon, TypescriptPlainIcon, UnityOriginalIcon, UnityOriginalWordmarkIcon } from 'react-devicons';

interface Props extends React.SVGProps<SVGElement> {
    size?: number | string;
    color?: string;
  }

interface SkillData {
    name: string;
    detail?: string;
    icon: React.FunctionComponent<Props>;
}

const skillsData: Array<SkillData> = [
    {
        name: "React",
        detail: "Created small scale webpages (even this portfolio), webform with login using AWS Cognito and Lambda.",
        icon: ReactOriginalIcon
    },
    {
        name: "TypeScript",
        icon: TypescriptPlainIcon,
    }, {
        name: "JavaScript",
        icon: JavascriptPlainIcon,
    }, {
        name: "HTML5",
        icon: Html5PlainIcon,
    }, {
        name: "CSS3",
        icon: Css3PlainIcon,
    }, {
        name: "AWS",
        detail: "Used: Cognito, Dynamo DB, SQS, SNS, Lambda, Secrets Manager, Lightsail, EC2, S3",
        icon: AmazonwebservicesPlainWordmarkIcon,
    }, {
        name: "Azure",
        icon: AzurePlainIcon,
    }, {
        name: "Java",
        detail: "Created microservices in Spring boot, an IRC bot, some Java games and more projects.",
        icon: JavascriptPlainIcon,
    }, {
        name: "C#",
        detail: "Created Unity Augmented Reality App using Vuforia, an IRC bot from scratch, windows automation",
        icon: CsharpPlainIcon,
    }, {
        name: "C++",
        icon: CplusplusPlainIcon,
    }, {
        name: "C",
        icon: CPlainIcon,
    }, {
        name: "Python",
        icon: PythonPlainIcon,
    }, {
        name: "Unity",
        icon: UnityOriginalIcon,
    }, {
        name: "R",
        icon: RPlainIcon,
    }, {
        name: "Matlab",
        icon: MatlabPlainIcon,
    }, {
        name: "CakePHP",
        detail: "Developed a social networking site",
        icon: CakephpPlainIcon,
    }, {
        name: "PHP",
        icon: PhpPlainIcon,
    }, {
        name: "MySQL",
        icon: MysqlPlainIcon,
    }, {
        name: "Erlang",
        icon: ErlangPlainIcon
    }
]

export default skillsData;