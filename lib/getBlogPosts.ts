
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
        content: "In this note, readers will explore the steps required to set up a Next.js project from scratch. The post explains the default folder structure, how to create pages, and introduces Next.js’ file-based routing system. It also delves into the concept of 'pages' in Next.js and how it handles server-side rendering to enhance the SEO and performance of web applications. Additionally, the blog post highlights the benefits of static site generation, such as improved load times and reduced server load.",
        slug: "getting-started-with-nextjs",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
        id: 2,
        title: "The Power of Server Components",
        content: "Next.js introduced Server Components to solve the problem of large JavaScript bundles. This feature allows developers to render certain components entirely on the server, providing the client with a leaner, faster load. The blog discusses how these components can be used to offload heavy rendering tasks, ensuring that only the necessary JavaScript is sent to the client. It also explores the benefits of less JavaScript running in the browser, reducing the overall load time and improving the user experience. The blog also highlights how Server Components can be used alongside existing Next.js features such as SSR and SSG to offer even better performance and scalability.",
        slug: "power-of-server-components",
        date: "2021-10-01",
        imgUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
        id: 3,
        title: "Styling in Next.js",
        content: "The note breaks down the various styling methods available in Next.js, starting with the default CSS and how to configure it using CSS Modules. It explains the advantages of scoped CSS with Modules, which prevent global styles from affecting other parts of the application. The post also introduces Sass, a preprocessor that adds powerful features like variables and mixins to CSS. Furthermore, the blog delves into popular CSS-in -JS solutions, such as styled - components, that allow developers to write component - level styles directly in JavaScript.This approach is becoming increasingly popular in modern React applications due to its flexibility and ability to conditionally apply styles based on props or state.",
        slug: "styling-in-nextjs",
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