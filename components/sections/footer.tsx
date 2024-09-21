import ContributorCycle, { Contributor } from "../ui/contributors";

export default function Footer({ contributors }: { contributors: Contributor[] }) {
    return (
        <footer className="py-4">
            <div className="w-full flex items-center justify-center gap-1">
                <p className="text-sm text-muted-foreground font-medium">Made with ❤️ by</p>
                <ContributorCycle contributors={contributors} size={24} showCount={1}/>
                <p className="text-sm text-muted-foreground font-medium">+ {contributors.length - 1 <= 0 ? "" : contributors.length - 1} more contributors</p>
            </div>
        </footer>
    )
}