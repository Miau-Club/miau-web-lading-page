import Link from "next/link"
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar"
import { cn } from "@/lib/utils"

export const MiauMenuBar = ({ items, menuBarClassname, onClick }: { items: { item: string, href: string }[], menuBarClassname?: string, onClick?: any }) => {


    return (
        <Menubar onClick={onClick} className={cn("bg-miau-blueLight border-miau-white/15 border-solid border-2", menuBarClassname)}>
            {
                items.map(({ item, href }) =>
                (
                    <MenubarMenu >
                        <Link href={href}>
                            <MenubarTrigger className="bg-transparent text-miau-white data-[state=open]:bg-miau-yellow data-[state=open]:text-miau-yellowDark text-xs sm:text-sm">{item}</MenubarTrigger>
                        </Link>
                    </MenubarMenu>
                )
                )
            }
        </Menubar>
    )
}