import { Platformbutton } from "./common/button"

export const Subscribe = ()=> {

    return (
        <section className="container mx-auto">
            <div className="mx-auto bg-main-100 rounded-[30px] flex flex-col items-center p-[70px] px-[0px] gap-[20px] lg:gap-[40px]">
                <p className="lg:max-w-[600px] text-main-400 font-[600] text-[1.85em] lg:text-[3em] leading-[1.2em]">Be the first to receive new information</p>
                <div className="flex flex-col gap-[30px] lg:w-[500px] lg:max-w-[550px]">
                    <p className="text-dark font-sansec font-[300] text-[1em]">Subscribe to our newsletter to receive new updates </p>
                    <span className="relative mx-auto w-[90%] lg:w-full ">
                        <input  value="" placeholder="Enter your email address" className="w-full  rounded-[35px] h-[65px] pl-[25px]
                            focus:text-dark focus:border-dark text-gray-500 text-[1em] font-sansec bg-transparent border-[1px] border-dark  outline-none
                        " />

                        <Platformbutton name="Subscribe" classN="absolute top-0 bottom-0 right-[5px] h-[55px]  flex items-center justify-center my-auto" type="normal" click={()=> alert('')} />
                    </span>
                </div>
            </div>
        </section>
    )
}