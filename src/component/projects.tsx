import { Projectmodel } from "../data/model"
import { Platformbutton } from "./common/button"


export const Label = ({title}:any)=> {

    return (
        <p className="w-fit border-sec-500 border-[1px] rounded-full bg-transparent text-dark font-[400] text-[.8em] py-[5px] px-[10px]">{title}</p>
    )
}

export const Singleproject = ({type,title,image}: Projectmodel )=> {

    return (
        <div className="flex flex-col gap-[30px]">
            <img src={image} alt={title} />
            <div className="flex flex-col gap-[15px] lg:max-w-[350px] text-left">
                <Label title={type} />
                <p className="text-dark font-[500] text-[1.3em]">{title}</p> 
                <Platformbutton  name="Explore" type="withicon" classN="fas fa-arrow-right" click={()=> alert('') } />
            </div>
        </div>
    )
}

