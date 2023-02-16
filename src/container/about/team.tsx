import { Label } from "../../component/projects"
import { teams } from "../../data/data"

export const Teammember = ()=> {
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col items-center  gap-[20px]">
                <p className="font-[500] text-main-500 text-[1.8em] lg:text-[3em]">Meet the SoftLife team</p>
                <div className="w-full flex flex-wrap gap-[30px] text-left ">
                    {
                        teams.map((item,index)=> (
                            <div className="lg:max-w-[400px] w-full py-[30px] px-[25px] flex flex-col gap-[10px] border-[1px] border-main-500">
                                <div className="w-[100%] h-[250px] lg:w-[357px] lg:h-[357px] bg-gray-600"></div>
                                <Label title={item.label} />
                                <p className="font-[500] text-main-500 tex-[1.25em]">{item.name}</p>
                            </div>
                        ))  
                    }
                </div>
            </div>
        </section>
    )
}