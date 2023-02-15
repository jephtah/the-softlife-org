import proj from "../../assets/images/proj0.png"
import { Platformbutton } from "../../component/common/button"
import { Singleproject } from "../../component/projects"
import { projects } from "../../data/data"

export const Projects = ()=> {

    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col gap-[50px]">
                <span className="flex items-end justify-between">
                    <p className="font-[500] text-dark text-[1.3em]">Selected projects</p>
                    <p className="font-[300] text-[1.2em] text-sec-500">See all</p>
                </span>
                <div className="w-full flex flex-col gap-[40px] lg:gap-[20px]">
                    <div className="w-full h-fit lg:h-[50vh] lg:overflow-hidden flex flex-col lg:flex-row items-center gap-[30px] bg-sec-100 mb-[50px] lg:mb-0" >
                        <img src={proj} className="lg:max-w-[600px]"  alt="Project One"/>
                        <div className="lg:max-w-[350px] flex flex-col gap-[15px]  text-left my-auto mx-auto p-[30px] lg:p-0 ">
                            <Label title="Laptop Scholarship" />
                            <p className="text-gray-400 font-[500] text-[1.2em]">Lorem ipsum dolor sit amet consec. Massa turpis sem </p>
                            <Platformbutton  name="Explore" type="withicon" classN="fas fa-arrow-right" click={()=> alert('') } />
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[20px]">
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


            </div>
        </section>
    )
}

const Label = ({title}:any)=> {

    return (
        <p className="w-fit border-sec-500 border-[1px] rounded-full bg-transparent text-dark font-[400] text-[.8em] py-[5px] px-[10px]">{title}</p>
    )
}