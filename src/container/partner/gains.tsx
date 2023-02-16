import gain from "../../assets/images/gain.png"
import { gains } from "../../data/data"
import { deservemodel } from "../../data/model"

export const Gains =() => {
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-[40px]">
                <div className="flex flex-col gap-[50px] text-left">
                    <span className="flex flex-col gap-[15px] lg:max-w-[550px]">
                        <p className="font-[600] text-dark text-[1.5em] lg:text-[2.2em]">What you stand to gain</p>
                        <p className="font-sansec font-[400] text-[1em] text-black leading-[1.4em]">As a SoftLife partner, you are entitled to have access to all there is  to know about the SoftLife</p>
                    </span>
                    <div className="w-full lg:w-fit flex flex-col gap-[30px]">
                        {
                            gains.map((item,index)=> (
                                <Singlegains
                                    key={index}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>  
                </div>

                <img className="lg:w-[500px] lg:mt-[50px]" src={gain} alt="gains" />
            </div>
        </section>
    )
}

const Singlegains = ({title,subtitle,image}:deservemodel)=> {
    return (
        <div className="flex lg:max-w-[450px] items-center gap-[25px]">
            <img src={image} alt={title} />
            <span className="flex flex-col gap-[8px]">
                <p className="font-[500] text-dark text-[1em]">{title}</p>
                <p className="font-sansec font-[300] text-black text-[.8em] leading-[1.4em]" >{subtitle}</p>
            </span>
        </div>
    )
}