import Image from "next/image";
import { ModeToggle } from "../ui/theme-switcher";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { House, Plus, QrCode } from "lucide-react";
import QrCodePopover from "../ui/qr-code-popover";
import { ProjectType } from "@/lib/types/projects";

export default function ActionBar({ project }: { project: ProjectType }) {
	return (
		<div className="w-full fixed bottom-0 p-4">
			<div className="mx-auto max-w-md w-fit">
				<div className="flex items-center justify-center gap-2 border rounded-lg bg-background/70 backdrop-blur-sm px-3 py-2">
                <Link href={"https://www.gmon.link"} className="flex items-center gap-2">
						<div className={buttonVariants({ variant: "outline", size: "icon" })}>
							<House />
						</div>
					</Link>
					<QrCodePopover project={project} />
					<ModeToggle />
                    <Link target="_blank" href={"https://t.me/gmonlinkbot?start"} className="flex items-center gap-2">
						<div className={buttonVariants({ variant: "outline", size: "icon" })}>
							<Plus />
						</div>
					</Link>
					{/* <Link className={buttonVariants({ variant: "outline", size: "icon" })} target="_blank" href={"https://t.me/gmonlinkbot?start"}>
						<Image src="/assets/gmon-purple.png" alt="gmon.link logo" width={64} height={64} className="size-full" />
					</Link> */}
				</div>
			</div>
		</div>
	);
}
