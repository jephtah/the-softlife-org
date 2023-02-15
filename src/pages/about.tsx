import { Footer } from "../component/footer"
import { Abouthero } from "../container/about/abouthero"
import { Abouthelp } from "../container/about/help"
import { Teammember } from "../container/about/team"

export const Aboutpage = ()=>{
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full  flex flex-col gap-[130px]">
                <Abouthero/>
                <Abouthelp/>
                <Teammember/>
                <Footer/>
            </div>

        </div>
    )
}