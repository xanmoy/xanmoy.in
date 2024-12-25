
export interface BlogPost {
    id: number;
    title: string;
    content: string;
    slug: string;
    date: string;
    imgUrl?: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        content: "In this note, readers will explore the steps required to set up a Next.js project from scratch. The post explains the default folder structure, how to create pages, and introduces Next.js’ file-based routing system. It also delves into the concept of 'pages' in Next.js and how it handles server-side rendering to enhance the SEO and performance of web applications. Additionally, the guide highlights the benefits of static site generation, such as improved load times and reduced server load.",
        slug: "getting-started-with-nextjs",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
        id: 2,
        title: "Linux Guide for Beginners",
        content: "This guide provides a comprehensive guide for beginners looking to learn Linux. It covers topics such as installing Linux distributions, navigating the command line interface, and managing files and directories. The post also delves into package management systems like APT and YUM, how to install software, and how to update and upgrade packages. Additionally, the blog highlights the benefits of using Linux for development, system administration, and security, and provides resources for further learning.",
        slug: "power-of-server-components",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
        id: 3,
        title: "Styling in Next.js",
        content: "This guide explores the various styling options available in Next.js, such as CSS modules, styled-jsx, and CSS-in-JS libraries like styled-components. It explains how to set up global styles, import external CSS libraries, and use CSS-in-JS to create dynamic styles based on props. The post also delves into the benefits of server-side rendering for styles and how Next.js optimizes CSS delivery to improve performance. Additionally, the blog highlights the benefits of using Tailwind CSS with Next.js to create responsive and accessible designs with minimal effort.",
        slug: "styling-in-nextjs",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
        id: 4,
        title: "Data Fetching in Next.js",
        content: "This guide explores the various data fetching methods available in Next.js, such as getStaticProps, getServerSideProps, and getStaticPaths. It explains how these functions can be used to fetch data at build time, request time, or generate dynamic routes. The post also delves into the concept of incremental static regeneration, which allows Next.js to update static pages without rebuilding the entire site. Additionally, the blog highlights the benefits of server-side rendering and how it can improve SEO and performance by pre-rendering pages on the server.",
        slug: "data-fetching-in-nextjs",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
        id: 5,
        title: "Authentication in Next.js",
        content: "In this note, readers will learn how to implement authentication in Next.js using various methods such as cookies, JWT tokens, and OAuth. The post explains the differences between client-side and server-side authentication and how to secure routes based on user authentication status. It also delves into the concept of protected routes and how to restrict access to certain pages based on user roles. Additionally, the blog highlights the benefits of using third-party authentication providers like Auth0 or Firebase to simplify the authentication process and enhance security.",
        slug: "authentication-in-nextjs",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
        id: 6,
        title: "Optimizing Next.js Applications",
        content: "This guide explores various optimization techniques for Next.js applications to improve performance and user experience. It covers topics such as code splitting, lazy loading, and image optimization to reduce bundle size and load times. The post also delves into server-side rendering and static site generation to enhance SEO and scalability. Additionally, the blog highlights the benefits of using the Next.js Image component to automatically optimize images based on device size and resolution, ensuring a fast and responsive user experience.",
        slug: "optimizing-nextjs-applications",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    }
];

export async function getBlogPosts(): Promise<BlogPost[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return blogPosts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return blogPosts.find(post => post.slug === slug);
}