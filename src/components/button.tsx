import { cn } from "@/lib/utils"
import { Button as ButtonUi } from "./ui/button"

export const Button = ({ text, variant = 'default', onClick, classname, size }: { text: string, classname?: string, variant?: 'default', onClick: any, size?: 'default' | 'sm' | 'lg' | 'icon' }) => {

    const variantCustoms = {
        'default': 'bg-miau-branding hover:bg-miau-branding/90'
    }


    return (<ButtonUi onClick={onClick} size={size} variant={variant} className={cn(variantCustoms[variant], classname)}>{text}</ButtonUi>)

}