import { twMerge } from "tailwind-merge"

function H1({ children, className }: { children: any, className?: string }) {

    return (<h1 className={twMerge('text-miau-white font-bold text-xl sm:text-3xl', className)}>{children}</h1>)

}

export { H1 }