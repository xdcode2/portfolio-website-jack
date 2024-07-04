# Responsive Portfolio Website

Build a Responsive Portfolio Website using React JS & TailwindCSS

## [View Demo](https://jackanderson-xdcode.netlify.app/ "Responsive Portfolio Website")

![Responsive Portfolio Website](./public/Responsive%20Portfolio%20Website.png)

## 🗒️ Table of Contents

1. [💬 Introduction](#introduction)
2. [🛠️ Tools](#tools)
3. [✨ Features](#features)
4. [🚀 Getting Started](#getting-started)
5. [💻 Code Snippets](#code-snippets)
6. [☕ Support Me](#support-me)

## <a name="introduction">💬 Introduction</a>

Welcome to the Responsive Personal Portfolio Website repository! This project is a step-by-step guide to creating a sleek, modern, and fully responsive personal portfolio website. Whether you're a beginner web developer or a pro looking to refine your skills, this repository provides all the essential resources you need to build a stunning online portfolio.

[Watch video tutorial](https://youtu.be/uwrIY1K8jYU)

## <a name="tools">🛠️ Tools</a>

-   [React JS](https://react.dev)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion/)
-   [React Router](https://reactrouter.com/en/main)
-   [React Simple TypeWriter](https://react-simple-typewriter.vercel.app/?path=/docs/introduction--page)
-   [Email JS](https://www.emailjs.com/)

## <a name="features">✨ Features</a>

-   **Responsive Design:** Ensures your portfolio looks great on desktops, tablets, and mobile devices.
-   **Clean and Modern Layout:** A professional design that highlights your projects, skills, and experience.
-   **Interactive Elements:** Smooth scrolling, hover effects, and other interactive features to enhance user experience.
-   **Email Sending Feature:** Integrated email sending functionality to allow visitors to contact you directly from the website.

## <a name="getting-started">🚀 Getting Started</a>

To get started follow these steps:

#### Cloning the Repository

Using CLI

```bash
git clone https://github.com/xdcode2/portfolio-website-jack.git
```

**\*\*_Ensure you have installed [Git](https://git-scm.com) on your machine._**

or using GitHub:

-   Go to the project [repository](https://github.com/xdcode2/portfolio-website-jack) on my GitHub page
-   Click on the green button on the top 👆
-   Click Download ZIP

#### Installation

Install the project dependencies using npm:

```bash
npm install
```

**\*\*_Ensure you have installed [NodeJS](https://nodejs.org/en) on your machine._**

#### Running the Project

```bash
npm run dev
```

**\*\*_This project uses [Vite](https://vitejs.dev)._**

## <a name="code-snippets">💻 Code Snippets</a>

<details>
<summary><code>.env</code></summary>

```env
VITE_SERVICE_ID=YOUR_SERVICE_ID
VITE_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

Replace the placeholder values with your IDs and Keys. You can get these values by signing in/up to [**EmailJS**](https://www.emailjs.com/)

> [Service ID](https://dashboard.emailjs.com/admin) </br> [Template ID](https://dashboard.emailjs.com/admin/templates) </br> [Public Key](https://dashboard.emailjs.com/admin/account/general) </br> We use these env variables in `src/pages/contact.js` file.

</details>

<details>
    <summary><code>tailwindcss.config.js</code></summary>

```js
/** @type {import('tailwindcss').Config} \*/
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            es: "425px",
            sm: "640px",
            md: "768px",
            lg: "992px",
            xl: "1300px",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        extend: {
            padding: {
                "sec-sm": 40,
                "sec-md": 80,
                "sec-lg": 112,
            },
            colors: {
                primary: {
                    10: "#8EB5FF",
                    20: "#70A1FF",
                    30: "#518DFF",
                    40: "#3379FF",
                    50: "#1465FF",
                    60: "#1059E4",
                },
                secondary: {
                    10: "#FFE2A2",
                    20: "#FFD77F",
                    30: "#FFCB5B",
                    40: "#FFC038",
                    50: "#FFB514",
                    60: "#DF9E10",
                },
                gray: {
                    10: "#F4F4F5",
                    20: "#E4E4E7",
                    30: "#D4D4D8",
                    40: "#A1A1AA",
                    50: "#71717A",
                    60: "#52525B",
                    70: "#3F3F46",
                    80: "#27272A",
                    90: "#18181B",
                },
            },
            fontSize: {
                h1: [
                    "clamp(2.25rem, 4vw, 3.75rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h2: [
                    "clamp(2rem, 4vw, 3rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h3: [
                    "clamp(1.75rem, 4vw, 2.25rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                "3xlg": ["clamp(1.5rem, 4vw, 2rem)"],
                "2xlg": ["clamp(1.25rem, 4vw, 1.5rem)"],
            },
            transitionDuration: {
                DEFAULT: "300ms",
            },
        },
    },
    plugins: [],
};
```

</details>

<details>
    <summary><code>src/index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    * {
        @apply m-0 box-border scroll-smooth border-red-500 p-0 font-inter;
    }
    section {
        @apply relative overflow-hidden py-sec-md;
    }

    img {
        @apply select-none object-cover;
    }
}

@layer components {
    .link {
        @apply text-base font-medium text-gray-90 transition-colors hover:text-primary-50;
    }
    .btn-primary {
        @apply inline-flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-50 px-6 text-base font-normal text-gray-10 transition-colors hover:bg-primary-60;
    }
    .label {
        @apply w-full text-base font-normal text-gray-90;
    }
    .input {
        @apply h-12 w-full rounded-lg border-[1.5px] border-solid border-gray-30 px-2 text-gray-90 outline-0 placeholder:text-sm placeholder:font-normal placeholder:text-gray-50 focus:border-primary-50;
    }
}
```

</details>

## <a name="support-me">☕ Support Me</a>

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J1NMYT7)

Hey bro please don't forget to subscribe to [my channel](https://www.youtube.com/@_xdcode_ "XD Code") 😊😊.
