import { Platformbutton } from "../../component/common/button"
import hero from "../../assets/images/hero.png"
export const Homehero = ()=> {

    return (
        <section className="w-full h-[70vh] lg:h-[100vh] flex items-start lg:items-center justify-start">
            <div className="mx-auto container h-full py-[60px] lg:h-[70%] relative flex-col gap-[30px] lg:gap-0">
                <div className="flex flex-col float-left justify-between gap-[30px]">
                    <span className="flex flex-col gap-[20px] max-w-[500px] text-left">
                        <p className="font-sans text-[2em] md:text-[3em] font-[500] leading-[1.2em]">Helping Young People Make Better Choices</p>
                        <p className="font-sansec text-[1em] font-[400]">
                            SOFTlife is focused on improving the quality of life of Nigeria’s young people by helping them make great choices about their lives today.  
                        </p>
                    </span>
                    <Platformbutton type="normal" name="Learn More" classN='w-fit' click={()=> alert('')} />
                </div>
                <img src={hero} alt="Hero collage" className="w-[90vw] lg:w-[850px] lg:absolute  lg:right-[5em] lg:top-[-50px]" />
            </div>
        </section>
    )
}