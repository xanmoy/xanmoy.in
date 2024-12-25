import Link from 'next/link';
import { getBlogPosts } from '../../lib/getBlogPosts';
import Image from 'next/image';

export default async function Home() {
    const posts = await getBlogPosts();

    return (
        <div className="flex flex-col items-center px-4">
            <h2 className="text-5xl sm:text-7xl font-bold mb-6" style={{ fontFamily: 'Brandon Grotesque, sans-serif' }}>Notes.</h2>
            <div className="space-y-4 group mb-3 sm:mb-8 last:mb-0">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="p-4 bg-gray-100 max-w-screen-2xl border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            <Link href={`/notes/${post.slug}`} className="text-black dark:text-white hover:underline">
                                {post.title}
                            </Link>
                        </h3>
                        
                        <p className="text-gray-700 dark:text-gray-300">{post.content.substring(0, 100)}...</p>
                        
                        
                    </article>
                ))}
            </div>
        </div>
    );
}
