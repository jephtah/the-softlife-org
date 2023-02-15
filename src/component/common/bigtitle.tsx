export const Bigtitle = ({title, subtitle, classes, color}:any)=> {

    return (
        <div className={`flex flex-col gap-[15px] ${color} items-center`}>
                    <p className="font-[700] xl:text-[3em] leading-[1.2em] xl:w-[930px]">
                        {title}
                    </p>
                    <p className={`font-sansec font-[400] xl:text-[1.25em] leading-[1.5em] ${classes}`}>
                        {subtitle}
                    </p>
                </div>
    )
}