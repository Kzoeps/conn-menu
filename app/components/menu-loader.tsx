import { Skeleton } from "@/components/ui/skeleton";

export default function MenuLoader() {
    return (
        <ul>
            {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="mt-2">
                    <Skeleton className="h-4 w-full  bg-slate-400 " />
                </li>
            ))}
        </ul>
    )
}
