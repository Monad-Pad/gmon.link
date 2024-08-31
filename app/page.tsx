import { MadeWithSection } from "@/components/sections/made-with";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon, Banknote, CaseLowerIcon, Handshake, LinkIcon, SmileIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Claim your own link",
    icon: LinkIcon,
  },
  {
    title: "Completely free",
    icon: Handshake,
  },
  {
    title: "For nads, by nads",
    icon: SmileIcon,
  }
]

export default function Home() {
	return (
		<main className="">
			<section className="py-16 flex items-center justify-center min-h-screen sm:min-h-0">
				<div className="max-w-screen-xl px-6 sm:px-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
					<div className="flex flex-col gap-8 items-start justify-center max-w-md">
						<Image src="/assets/gmon.png" alt="gmon-logo" width={100} height={100} className="w-16 h-16" />
						<div className="space-y-2">
							<h1 className="text-4xl sm:text-5xl font-bold">gmon.link</h1>
							<p className="text-lg sm:text-xl text-muted-foreground">
								gmon.link is the easiest and quickest way to aggregate links for projects or individual.
							</p>
						</div>
            <div className="flex flex-col gap-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-row gap-3">
                  <feature.icon className="w-6 h-6 text-primary-foreground/90" />
                  <p className="text-lg text-muted-foreground">{feature.title}</p>
                </div>
              ))}
            </div>
						<div>
							<div className="flex flex-row flex-wrap gap-4">
								<Link href="https://t.me/gmonlinkbot" target="_blank" className={buttonVariants({ variant: "default", size: "lg" })}>
									<LinkIcon className="w-4 h-4 mr-2" /> Claim your link
								</Link>
								<Link href="https://gmon.link/monad-pad" target="_blank" className={buttonVariants({ variant: "outline", size: "lg" })}>
									View example <ArrowRightIcon className="w-4 h-4 ml-2" />
								</Link>
							</div>
							<p className="text-sm text-muted-foreground mt-2">
								*Completely free to use, built by{" "}
								<Link href="https://monadpad.xyz" target="_blank" className="underline">
									Monad Pad
								</Link>
								.
							</p>
						</div>
					</div>
					<div className="hidden sm:block">
						<Image
							unoptimized
							src="/assets/gmon-ui.png"
							alt="gmon-ui"
							width={500}
							height={500}
							className="w-full h-full max-h-[750px] object-contain"
						/>
					</div>
				</div>
			</section>
      <div className="hidden sm:block"><MadeWithSection /></div>
      
		</main>
	);
}
