import Image from "next/image";
import Link from "next/link";

export function MadeWithSection({ isProjectPage = false }: { isProjectPage?: boolean }) {
	return (
		<section className={`${isProjectPage ? "block mx-auto max-w-md lg:fixed lg:bottom-0 lg:right-0" : "fixed bottom-0 right-0 w-auto mx-0"} p-4`}>
			<Link
				href="https://t.me/gmonlinkbot?start"
				className="px-4 py-3 shadow rounded-lg flex flex-row items-center justify-center text-center gap-2 border transition-all duration-150 ease-in-out bg-background hover:bg-muted"
			>
				<Image
					src="/assets/gmon-purple.png"
					alt="gmon.link logo"
					width={64}
					height={64}
					className="rounded-lg border outline outline-foreground/30 outline-1 shadow size-6"
				/>
				<p className={`${isProjectPage ? "lg:text-sm text-base" : "text-sm"} font-medium text-muted-foreground`}>Create your own gmon.link - it&apos;s free!</p>
			</Link>
		</section>
	);
}
