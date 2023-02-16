import { latestModel } from "../../data/model"

export const Latestissue = ({image,title,date,time}:latestModel)=> {

    return (
        <div className="flex flex-col gap-[30px] mx-auto items-center">
            <span className="flex flex-col items-center text-center lg:max-w-[500px]">
                <p className="font-[400] text-sec-500 text-[1.2em]">Latest issue</p>
                <p className="font-[600] text-main-500 text-[1.5em]">{title}</p>
                <span className="flex gap-[4px] items-center">
                    <p className="font-sansec text-main-500 font-[300] text-[.7em]">{date}</p>
                    <p className="font-sansec text-gray-300 font-[300] text-[.7em]">•</p>
                    <p className="font-sansec text-main-500 font-[300] text-[.7em]">{time}</p>
                </span>
            </span>
            <div className="overflow-hidden lg:w-[900px]">
            <img src={image} className="w-full"  alt={title}/>
            </div>
            
        </div>
    )
}