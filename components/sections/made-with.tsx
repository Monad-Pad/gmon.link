import Image from "next/image";
import Link from "next/link";

export function MadeWithSection() {
    return (
        <section className="mx-auto max-w-md w-full p-4">
        <Link href="https://t.me/gmonlinkbot?start" className="px-6 py-4 shadow rounded-xl flex flex-row items-center justify-center text-center gap-4 border transition-all duration-150 ease-in-out bg-background hover:bg-muted">
                <Image src="/assets/gmon-purple.png" alt="gmon.link logo" width={64} height={64} className="rounded-lg border outline outline-foreground/30 outline-1 shadow size-8" />
                <p className="text-base text-muted-foreground">Create your own gmon.link - it&apos;s free!</p>
        </Link>
        </section>
    )
}