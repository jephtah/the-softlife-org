import donate from "../assets/images/donate.png"
import { Platformbutton } from "./common/button"
export const Donate = ({partner}:any)=> {
    return (
        <section className="w-full h-[100vh] overflow-hidden bg-main-500 flex flex-col-reverse lg:flex-row justify-between">
            <div className="my-auto mx-auto text-white text-left p-[40px] lg:p-[0]">
                <div className="flex flex-col gap-[30px] lg:max-w-[500px]">
                    <span className="flex flex-col gap-[5px]">
                        <p className="text-[1.4em] font-[400] ">Want to Support the cause?</p>
                        <p className="text-[1.85em] lg:text-[2.5em] w-full font-[700] ">Donate to the SoftLife or Be a partner</p>
                    </span>
                    <span className="flex flex-col gap-[40px]">
                        <p className="font-sansec font-[300] text-[1em] lg:text-[1.2em]">
                            Lorem ipsum dolor sit amet consectetur. Massa turpis sem urna vitae enim leo diam et. Aliquam facilisis commodo viverra 
                        </p>
                        <span className="w-fit flex gap-[20px]">
                            <Platformbutton  name="Donate" type="secondary" click={()=> alert('')} />
                           {!partner && <Platformbutton  name="Become a Partner" type="outline-sec" click={()=> alert('')} />}
                        </span>
                    </span>
                </div>
            </div>
            <img src={donate} alt="donate" />
        </section>
    )
}