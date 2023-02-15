import React from "react"
import Errorsvg from "../assets/svgs/error.svg"
import { Bigtitle } from "../component/common/bigtitle"
// import { NavLink } from "react-router-dom";
export const Error = ()=> {


    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col items-center">
                    <img className="md:w-[450px]" src={Errorsvg} alt="Error-404-svg"/>
                    <Bigtitle
                        title="Oops"
                        subtitle="We do not have the page you are currently looking for, maybe it was removed or renamed."
                        classes="md:max-w-[450px]"
                    />
                    {/* <NavLink className="error-404-btn" to="/" style={{textDecoration:'none'}}> Back To Home </NavLink> */}
            </div>

        </div>
    )
}