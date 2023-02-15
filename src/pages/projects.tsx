import { Donate } from "../component/donate"
import { Footer } from "../component/footer"
import { Allprojects, Projectshero, Projfocused } from "../container/projects/projects"
import { Subscribe } from "../component/subscribe"

export const Projectspage = ()=>{
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full  flex flex-col gap-[130px]">
                <Projectshero/>
                <Projfocused/>
                <Allprojects/>
                <Donate partner="no" />
                <Subscribe/>
                <Footer/>
            </div>

        </div>
    )
}