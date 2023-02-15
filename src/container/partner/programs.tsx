import { Platformbutton } from "../../component/common/button"
import { partner } from "../../data/data"

export const Programs = ()=> {

    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col gap-[80px]">
                <p className="font-[600] text-dark text-[1em]">PARTNER PROGRAMS</p>
                <div className="flex flex-col gap-[100px]">
                    {
                        partner.map((item,index)=> (
                            <Singleporgram
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                even={index % 2 === 0}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const Singleporgram = ({title,subtitle,image, even}:any)=> {
    return (
        <div className={`flex text-left ${even ? 'flex-col lg:flex-row ':' flex-col lg:flex-row-reverse'} items-center justify-between `}>
            <span className="flex flex-col gap-[30px] lg:max-w-[500px]">
                <p className="font-[700] text-[1.5em] text-dark">{title}</p>
                <p className="font-sansec font-[400] text-dark text-[1em] leading-[1.4em]">{subtitle}</p>
                <Platformbutton type="withicon" classN="fa-solid fa-arrow-right" name="Get Started" click={()=>alert('')} />
            </span>
            <img className="lg:w-[450px]" src={image} alt={title} />
        </div>
    )
}