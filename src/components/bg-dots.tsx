import { twMerge } from "tailwind-merge"

function BGDots({ children, className, color }: { children: any, className?: string, color?: string }) {

    return (
        <div className={twMerge("relative h-full w-full", className)}>
            <div className={twMerge(`absolute h-full w-full bg-[radial-gradient(#F7F7F7_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]`, color)} />
            {children}
        </div>
    )

}


export { BGDots }