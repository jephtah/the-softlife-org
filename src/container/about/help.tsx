import { Singlehelp } from "../../component/help/help"
import { help } from "../../data/data"

export const Abouthelp = ()=> {

    return (
        <section className="w-full ">
            <div className="container mx-auto flex flex-col gap-[50px]">
                <p className="font-[500] text-[1.5em] lg:text-[3em] text-main-500">How we help you</p>
                <div className="w-full   flex flex-col items-center justify-center gap-[20px]">
                    {
                        help.map((item,index)=> (
                            <Singlehelp
                                index={index}
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                even={index % 2 === 0}
                                image={item.image}
                                svg={item.svg} 
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}