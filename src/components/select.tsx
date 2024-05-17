import { twMerge } from "tailwind-merge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const SelectCustom = ({ className, children, defaultValue, onChange }:
    { className?: string, children: any, defaultValue: string, onChange: (e: string) => void }) => {

    return (
        <Select onValueChange={onChange} defaultValue={defaultValue} >
            <SelectTrigger className={twMerge("w-26 bg-miau-branding text-miau-white justify-center gap-4 border-transparent", className)}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {
                    children
                }
            </SelectContent>
        </Select>
    )
}


const SelectCustomItem = ({ value, description }: { value: string, description: string }) => {
    return (<SelectItem className="focus:bg-miau-white focus:text-miau-black text-miau-black border-transparent" value={value}>{description}</SelectItem>)
}

export { SelectCustom, SelectCustomItem }