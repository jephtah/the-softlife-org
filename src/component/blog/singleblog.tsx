import { latestModel } from "../../data/model";
import { Label } from "../projects";

export const Singleblog = ({image,title,date,time,type}:latestModel)=> {

    return (
        <div className="lg:w-[400px] w-full py-[10px] px-[15px] lg:py-[25px] lg:px-[30px] flex flex-col gap-[30px] border-main-500 border-[1px]">
            <div className="lg:w-[350px] w-full lg:h-[350px] overflow-hidden">
                <img src={image} alt={title} className="w-full" />
            </div>
            <div className="flex flex-col gap-[10px] text-left">
                <Label title={type}/>
                <p className="font-[500] text-main-500 text-[1.1em]">{title}</p>
                <span className="flex gap-[4px] items-center">
                    <p className="font-sansec text-main-500 font-[300] text-[.7em]">{date}</p>
                    <p className="font-sansec text-sec-500 font-[300] text-[.7em]">•</p>
                    <p className="font-sansec text-main-500 font-[300] text-[.7em]">{time}</p>
                </span>
            </div>
        </div>
    )
}