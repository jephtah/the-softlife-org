import { Platformbutton } from "../../component/common/button"
import { Inputs } from "../../component/common/inputs"

export const Contact =()=> {

    return (
        <section className="container mx-auto  ">
            <div className="bg-sec-100 container py-[50px] mx-auto rounded-[30px] flex flex-col gap-[50px]">
                <p className="font-[500] text-sec-500 text-[1.3em]" >Fill out this form and we’ll be in touch</p>
                <form className="w-full flex flex-col gap-[50px]">
                    <span className="w-[100%] flex flex-nowrap gap-[20px]">
                        <Inputs input="input" type="text"  value="" holder="First Name" />
                        <Inputs input="input" type="text"  value="" holder="Last Name" />
                    </span>
                    <Inputs input="input" type="email"  value="" holder="Email Address" />
                    <Inputs input="textarea" type="text"  value="" holder="Why do you want to partner with us" />
                    <Platformbutton type="normal" bg="bg-sec-500" name="SUBMIT" classN="rounded-[10px]" click={()=> alert('')} />
                </form>
            </div>
        </section>
    )
}