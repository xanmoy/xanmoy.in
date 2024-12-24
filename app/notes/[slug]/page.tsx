import { getBlogPost } from '../../../lib/getBlogPosts';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
    console.log(params.slug);
    const post = await getBlogPost(params.slug);

    if (!post) {
        notFound();
    }
    console.log(post);

    return (
        <article className="prose lg:prose-xl mb-72 mx-auto mt-10 p-5 rounded-md justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">{post.title}</h1>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
                Published on {new Date(post.date).toLocaleDateString()}
            </p>
            <div
                className="text-gray-700 dark:text-gray-300 mx-auto w-full sm:w-3/4 lg:w-2/3"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
