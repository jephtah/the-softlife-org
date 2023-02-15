export const Homehelp=()=> {

    return (
        <section className="w-full lg:h-[50vh] bg-sec-100 py-[50px]">
            <div className="container h-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[40px] lg:gap-[0px] text-left">
                <span className="flex flex-col gap-[10px] max-w-[410px]">
                    <p className="text-dark font-sans font-[500] text-[2em] lg:text-[3.5em] leading-[1.2em]">We help you to live the SoftLife</p>
                    <span className="border-b-[4px] border-b-sec-500 w-fit pb-[5px]">
                        <a href="/" className="font-sansec font-[500] text-sec-500 text-[1.2em] leading-[1.4em]">LEARN MORE</a>
                    </span>
                </span>
                <p className="font-[400] text-dark text-[1em] leading-[1.4em] max-w-[450px]">
                    We understand that young people can face a wide range of challenges, from poverty and lack of opportunity to peer pressure and negative influences. We understand that young people can face a wide range of challenges, from poverty and lack of opportunity to peer pressure and negative influences.
                </p>
            </div>
        </section>
    )
}