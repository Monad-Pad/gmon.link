import Link from "next/link";
import ShowcaseGrid from "./showcase-grid";

export default function ShowcaseSection() {
	return (
		<section className="py-12">
			<div className="max-w-5xl mx-auto px-6 sm:px-8">
				<div className="space-y-2 text-center mb-10">
					<h2 className="text-3xl font-bold">These nads use gmon.link</h2>
					<p className="text-lg text-muted-foreground">
						If they can, why can&apos;t you?{" "}
						<Link
							className="text-foreground underline transition-colors hover:text-primary"
							href={"https://t.me/gmonlinkbot?start"}
							target="_blank"
						>
							Claim your gmon.link
						</Link>
                        .
					</p>
				</div>
				<ShowcaseGrid />
			</div>
		</section>
	);
}
