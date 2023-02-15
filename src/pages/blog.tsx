import { Footer } from "../component/footer"
import { Subscribe } from "../component/subscribe"
import { Blog } from "../container/blog/blog"

export const Blogpage = ()=>{
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full  flex flex-col gap-[130px]">
                <Blog/>
                <Subscribe/>
                <Footer/>
            </div>

        </div>
    )
}