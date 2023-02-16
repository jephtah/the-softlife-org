import { useState } from "react"
import { Tab } from "../../component/common/tab"
import { Singleproject } from "../../component/projects"
import person from "../../assets/images/persontalk.png"
import top from "../../assets/svgs/projects.svg"
import { projects } from "../../data/data"

export const Allprojects = ()=> {

    const [active, setActive]= useState<number>(0)
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col items-center gap-[50px]">
            <Tab active={active} data={['All','Ongoing', 'Past', 'Future']} click={(value:number)=> setActive(value)} />
                <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[20px]">
                    {
                        projects.map((item,index)=> (
                            <Singleproject
                                key={index}
                                title={item.title}
                                image={item.image}
                                type={item.type}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
} 

export const  Projectshero =()=> {
    return (
        <section className="h-[50vh] bg-main-100 relative flex items-center justify-center overflow-hidden">
            <img src={top} className="max-w-[300vw] mx-auto w-[1000px] lg:w-full  absolute top-0 left-0 right-0" alt="top" />
            <div className="container my-auto mx-auto flex items-center justify-center ">
                    <span className="w-fit h-fit border-b-[4px] border-b-fit border-b-sec-500 px-[15px]">
                        <p className="font-[600] text-main-500 text-[2em] lg:text-[3em] " >OUR PROJECTS</p>
                    </span>
            </div>
        </section>
    )
}

export const Projfocused = ()=> {

    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-[30px] lg:gap-0  text-left">
                <div className="flex flex-col gap-[30px] lg:max-w-[550px]">
                    <p className="font-[600] text-main-500 text-[1.5em] lg:text-[1.8em] leading-[1.4em]">Our projects are focused on organizing bootcamps and skill acquisition programs</p>
                    <span className="flex flex-col gap-[20px] lg:gap-[40px] lg:max-w-[420px] text-[.75em] lg:text-[1em]">
                        <p className="font-sansec font-[300] text-dark  leading-[1.5em]">
                            Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla
                        </p>
                        <p className="font-sansec font-[300] text-dark leading-[1.5em]">
                            Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla
                        </p>
                    </span>
                </div>
                <div className="overflow-hidden lg:w-[480px]">
                    <img src={person} alt="person" />
                </div>
                
            </div>
        </section>
    )
}