import logo from "../assets/images/logow.png"
import { footLinks } from "../data/data"

export const Footer = ()=> {

    return (
        <section className="w-full bg-main-500 py-[80px]">
            <div className="container mx-auto text-white text-left flex flex-col lg:flex-row items-start  gap-[40px] lg:gap-[120px]">
                <img className="w-[170px]" src={logo}  alt="Logo"/>
                <div className="flex flex-wrap lg:flex-row items-start gap-[50px] lg:gap-[100px]">
                    {
                        footLinks.map((item,index)=> (
                            <ul key={index} className="pl-0 pr-0 flex flex-col gap-[30px]">
                                <li className="font-[700] text-[1.3em]">{item.name}</li>
                                {item.links.map((item,index)=> (
                                    <li className="font-sansec font-[400] text-[1.1em]" key={index}>{item}</li>
                                ))}
                               
                            </ul>

                        ))
                    }

                    <ul className="pl-0 pr-0 flex flex-col gap-[30px]">
                        <span className="text-white flex items-center gap-[30px] text-[1.5em]">
                            <i className="fab fa-instagram"/>
                            <i className="fab fa-linkedin-in"/>
                            <i className="fab fa-facebook-f"/>
                            <i className="fab fa-twitter"/>
                        </span>
                        <li className="font-sansec font-[400] text-[1.1em]">contact@TheSoftLife.com</li>
                        <li className="font-sansec font-[400] text-[1.1em]">+234 555 777 888</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}