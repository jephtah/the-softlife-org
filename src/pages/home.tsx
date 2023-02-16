import { Donate } from "../component/donate"
import { Footer } from "../component/footer"
import { Subscribe } from "../component/subscribe"
import { Deserve } from "../container/home/deserve"
import { Homehelp } from "../container/home/homehelp"
import { Homehero } from "../container/home/homehero"
import { Projects } from "../container/home/projects"

export const Homepage = ()=> {

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full  flex flex-col gap-[130px]">
                <Homehero/>
                <Homehelp/>
                <Deserve/>
                <Donate/>
                <Projects/>
                <Subscribe/>
                <Footer/>
            </div>

        </div>
    )
}