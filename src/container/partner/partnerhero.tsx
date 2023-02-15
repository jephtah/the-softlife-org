import { Platformbutton } from "../../component/common/button"
import partner from "../../assets/images/partner.png"
export const Partnerhero = ()=> {
    var texts = [
        'Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit ',
        'Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis '
    ]
    return (
        <section className="w-full relative lg:h-[100vh] bg-green-100 flex items-end justify-start">
            <div className="mx-auto container">
                <div className="flex flex-col items-start justify-between gap-[30px] lg:pb-[100px] p-[30px] lg:p-0">
                    <span className="flex flex-col gap-[45px] max-w-[500px] text-left ">
                        <p className="lg:max-w-[550px] font-sans text-[2em] lg:text-[3em] font-[500] leading-[1.2em] text-main-500 ">Become a SoftLife Partner</p>
                        <span className="lg:max-w-[600px] flex flex-col gap-[30px]">
                            {
                                texts.map((item,index)=> (
                                    <p key={index} className="font-sansec text-[1em] font-[400] text-dark"> {item} </p>
                                ))
                            }
                        </span>
                    </span>
                    <Platformbutton type="withicon" name="Learn More" classN="fas fa-arrow-right text-man-500" click={()=> alert('')} />
                </div>
                <img src={partner} alt="Hero collage" className="hidden lg:flex lg:w-auto h-full absolute right-0 top-0 bottom-0" />
            </div>
        </section>
    )
}