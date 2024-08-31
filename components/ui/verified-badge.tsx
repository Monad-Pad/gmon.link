import { CheckCircle } from "lucide-react";
import { Badge } from "./badge";

export function VerifiedBadge() {
    return (
        <Badge variant="default"><CheckCircle size={16} className="mr-1.5" /> Verified</Badge>
    )
}