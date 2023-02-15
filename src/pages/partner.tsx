import { Footer } from "../component/footer"
import { Subscribe } from "../component/subscribe"
import { Contact } from "../container/partner/contact"
import { Gains } from "../container/partner/gains"
import { Partnerhero } from "../container/partner/partnerhero"
import { Programs } from "../container/partner/programs"

export const Partner = ()=> {

    return (
        <div className="w-full flex lg:mt-[-120px] flex-col items-center">
            <div className="w-full  flex flex-col gap-[130px]">
                <Partnerhero/>
                <Gains/>
                <Programs/>
                <Contact/>
                <Subscribe/>
                <Footer/>
            </div>

        </div>
    )
}