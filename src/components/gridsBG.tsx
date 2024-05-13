export const GridsBG = ({ countCols, countRows }: { countCols: number, countRows: number }) => {

    return (
        <div className={`grid grid-cols-5 sm:grid-cols-10 absolute inset-0 z-0 top-16`} >
            {
                Array.from(Array(60).keys()).map(x => {
                    return (<div key={x} className="border border-miau-white/5 rounded-tl-sm"></div>)
                })
            }
        </div>
    )
}