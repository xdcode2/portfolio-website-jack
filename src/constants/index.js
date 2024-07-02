import { CodeXml, FileCog, LayoutPanelLeftIcon } from "lucide-react";
import {
    project01,
    project02,
    project03,
    project04,
    project05,
    project06,
    testimonial01,
    testimonial02,
    testimonial03,
} from "./assets";

export const navbarLinks = [
    {
        id: "home",
        path: "/#home",
        label: "Home",
    },
    {
        id: "about",
        path: "/#about",
        label: "About",
    },
    {
        id: "portfolio",
        path: "/#portfolio",
        label: "Portfolio",
    },
    {
        id: "testimonials",
        path: "/#testimonials",
        label: "Testimonials",
    },
];

export const services = [
    {
        id: "webdesign",
        icon: LayoutPanelLeftIcon,
        title: "Web Design",
        description:
            "Creating visually appealing and user-friendly websites that reflect your brand's identity.",
    },
    {
        id: "webdevelopment",
        icon: CodeXml,
        title: "Web Development",
        description:
            "Building high-performance websites using the latest technologies and frameworks. Focusing on front-end development, I ensure your site is fast, and tailored to your specific.",
    },
    {
        id: "SEOptimization",
        icon: FileCog,
        title: "SEO Optimization",
        description:
            "Enhancing your site’s content, structure, and performance with technical strategies, ensuring higher rankings and easier discovery by customers.",
    },
];

export const projects = [
    {
        id: 1,
        link: "#",
        title: "Personal Portfolio Website",
        tags: ["Design", "Development"],
        image: project01,
    },
    {
        id: 2,
        link: "#",
        title: "E-Commerce Website",
        tags: ["Design", "Development"],
        image: project02,
    },
    {
        id: 3,
        link: "#",
        title: "Travel Website",
        tags: ["Design", "Development"],
        image: project03,
    },
    {
        id: 4,
        link: "#",
        title: "Healthcare Website",
        tags: ["Design"],
        image: project04,
    },
    {
        id: 5,
        link: "#",
        title: "Education Platform",
        tags: ["Design"],
        image: project05,
    },
    {
        id: 6,
        link: "#",
        title: "Weather App",
        tags: ["Design"],
        image: project06,
    },
];

export const testimonials = [
    {
        id: 1,
        clientName: "Carlos Smith",
        clientJob: "CEO",
        clientImage: testimonial01,
        comment:
            "The attention to detail and dedication to creating a user-friendly experience were evident in every step of the process. You transformed our vision into a stunning and functional website. Highly recommended!",
    },
    {
        id: 2,
        clientName: "Mike Peter",
        clientJob: "Founder's Associate",
        clientImage: testimonial02,
        comment:
            "Working with you was an absolute pleasure. The website exceeded our expectations and has significantly boosted our online presence.",
    },
    {
        id: 3,
        clientName: "Alex Miller",
        clientJob: "CEO",
        clientImage: testimonial03,
        comment:
            "Professional, creative, and highly skilled. You delivered a website that perfectly matches our brand.",
    },
];
