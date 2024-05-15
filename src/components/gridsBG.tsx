import { twMerge } from "tailwind-merge"

// classname='absolute inset-0 z-0 top-16'
export const GridsBG = ({ classname, gridClass, countGrids = 60 }:
    { classname?: string, gridClass?: string, countGrids?: number }) => {

    return (
        <div className={twMerge(`grid grid-cols-5 sm:grid-cols-10`, classname)} >
            {
                Array.from(Array(countGrids).keys()).map(x => {
                    return (<div key={x} className={twMerge("border", gridClass)} />)
                })
            }
        </div>
    )
}