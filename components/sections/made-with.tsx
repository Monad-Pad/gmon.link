import Image from "next/image";
import Link from "next/link";

export function MadeWithSection() {
    return (
        <section className="md:fixed md:bottom-0 md:right-0 md:max-w-sm max-w-md md:w-auto w-full mt-auto md:mt-0 mx-auto md:mx-0 p-4">
        <Link href="https://t.me/gmonlinkbot?start" className="px-4 py-3 shadow rounded-lg flex flex-row items-center justify-center text-center gap-2 border transition-all duration-150 ease-in-out bg-background hover:bg-muted">
                <Image src="/assets/gmon-purple.png" alt="gmon.link logo" width={64} height={64} className="rounded-lg border outline outline-foreground/30 outline-1 shadow size-6" />
                <p className="text-sm text-muted-foreground">Create your own gmon.link - it&apos;s free!</p>
        </Link>
        </section>
    )
}