import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="text-center flex flex-col items-center justify-center">
            <div>
                <Image src="/robot.svg" alt="404" width={100} height={100} className='pb-4' />
            </div>

            <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="text-blue-600 hover:underline">
                Go back to the homepage
            </Link>
        </div>
    )
}
