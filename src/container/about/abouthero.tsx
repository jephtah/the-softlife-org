import top from "../../assets/svgs/doodles.svg"
import young from "../../assets/images/youngpeople.png"
export const Abouthero = ()=> {
    return (
        <section className="h-[100vh] bg-sec-100 relative flex items-center justify-center ">
            <img src={top} className="w-full absolute top-0 left-0 right-0" alt="top" />
            <div className="container my-auto mx-auto flex flex-col gap-[50px] items-start justify-center ">
                    <div className="flex flex-col text-left gap-[0px] text-[3em] lg:text-[10em] leading-[1em]">
                        <span className="w-fit h-fit border-b-[6px] border-b-fit border-b-sec-500 px-[15px] pb-[15px]">
                            <p className="font-[600] text-main-500">Who we</p>
                        </span>
                        <span className="w-fit h-fit border-b-[6px] border-b-fit border-b-sec-500 px-[15px]  pb-[15px]">
                            <p className="font-[600] text-main-500" >are.</p>
                        </span>
                    </div>
                    <div className="flex flex-col text-left gap-[10px]">
                        <p className="font-sansec font-[600] text-[1.4em]"> We Help Young people see the light </p>
                        <span className="font-sansec font-[400] text-main-500 text-[.75em] lg:text-[1em] lg:max-w-[50vw] leading-[1.7em]">
                            <p>
                                Welcome to the SoftLife, dedicated to helping young people in Nigeria stay away from crime and build positive, successful futures. We believe that every person has the potential to be a leader in their community, and our goal is to provide the resources and support needed to make that happen.
                            </p>
                            <p>
                                We understand that young people can face a wide range of challenges, from poverty and lack of opportunity to peer pressure and negative influences.
                            </p>
                        </span>
                    </div>
                    
            </div>
        </section>
    )
}

export const Youngpeople = ()=> {
    return (
        <section className="w-full">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex flex-col gap-[30px] text-left">
                    <p className="font-[600] text-main-500 text-[2em] lg:text-[3em] max-w-[70vw] lg:max-w-[625px]"> Young People  are the pillars of the society.</p>
                    <span className="flex flex-col gap-[20px] font-sansec text-[1em] text-dark max-w-[70vw] lg:max-w-[590px] leading-[1.4em]">
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit scelerisque dictum dolor. Etiam rutrum vitae lorem lectus. Ullamcorper quisque mauris justo suspendisse praesent egestas. Lectus imperdiet pellentesque volutpat fusce. Nulla magna nunc proin facilisis tortor diam </p>
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit scelerisque dictum dolor. Etiam rutrum vitae lorem lectus. Ullamcorper quisque mauris justo suspendisse praesent egestas. Lectus imperdiet pellentesque volutpat fusce. Nulla magna nunc proin facilisis tortor diam </p>
                    </span>
                </div>
                <div className="lg:w-[650px] overflow-hidden">
                    <img className="w-full" src={young} alt="young folks"/> 
                </div>
            </div>
        </section>
    )
}