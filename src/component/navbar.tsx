import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { Links } from "../data/data";
import bars from "../assets/svgs/bars.svg"
import close from "../assets/svgs/close.svg"
import { useEffect, useState } from "react";

export const Navbar = ({top}:any)=> {
    const [open, setOpen] = useState(false)

    useEffect(()=> {
        return () => {
            setOpen(false)
        }
    },[])
    return (
        <div className={`w-full h-[100px] sticky left-0 right-0 top-0 z-10 bg-transparent ${top > 50 ? "bg-white border-b-[1px]":""} relativve`} >
            <div className="container mx-auto h-full flex justify-between items-center">
                <img src={logo} alt="Soft Life  Logo"  className="w-[200px] flex"/>
                <span className="hidden lg:flex items-center  gap-[30px]">
                    {
                        Links.map((item,index)=> (
                            
                            <NavLink exact to={item.link} 
                                className={`font-sans text-dark lg:text-[1em] font-[400] relative w-fit`}
                                activeClassName ={`after:content-[" "] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:bottom-[-20px] after:left-0 after:mx-auto after:right-0 after:bg-sec-500`}
                                key={index}>
                                {item.name} {item.dropdown && <i className="fas fa-chevron-down  ml-[10px]"/>}
                            </NavLink>
                        ))
                    }
                </span>

                {
                    open && <div className="w-full  lg:hidden h-[100vh] bg-white absolute mx-auto top-[100px] left-0 right-0 z-0">
                        <span className="flex  flex-col gap-[30px] py-[40px] px-[30px]">
                            {
                                Links.map((item,index)=> (
                                    <span className="w-full text-left border-b-[1px] border-b-main-500 py-[10px] last:border-b-0">
                                        <NavLink exact to={item.link} 
                                            className={`font-sansec text-dark lg:text-[1em] font-[400] relative w-full leading-[24px] flex items-center justify-between`}
                                            key={index} onClick={()=> setOpen(false)}> 
                                            {item.name} {item.dropdown && <i className="fas fa-chevron-down"/>}
                                        </NavLink>
                                    </span>
                                ))
                            }
                        </span>
                    </div>
                }
                <img onClick={()=> setOpen(!open)} className="lg:hidden flex" src={!open ? bars:close}  alt="btn" />
            </div>
           
        </div>
    )
}