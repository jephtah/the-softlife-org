import { Deserves } from "../../data/data"

export const Deserve = ()=> {

    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col gap-[100px]">
                <span className="text-center flex flex-col items-center gap-[10px]">
                    <p className=" max-w-[800px] font-sans text-main-500 font-[600] text-[2em] lg:text-[3em] leading-[1.2em]">
                        As a young person in Nigeria, you deserve to live a <strong className="text-sec-500 font-[600]">crime free life </strong>
                    </p>
                    <p className=" max-w-[700px]  font-sansec text-dark font-[400]  text-[.8em] leading-[1.2em]">
                    Lorem ipsum dolor sit amet consectetur. Massa turpis sem urna vitae enim leo diam et. Aliquam facilisis commodo viverra sed sed eget. Pellentesq mattis euismod erat ultricies. 
                    </p>
                </span>

                <div className="flex flex-col lg:flex-row gap-[0px] mx-auto">
                    {
                        Deserves.map((item,index)=> (
                            <Singledeserve
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                index={index}
                                even={index % 2 === 0}
                            />
                        ))
                    }

                </div>
            </div>

        </section>
    )
} 

const Singledeserve = ({title,subtitle,image, even, index}:any)=> {
    var _renderBg = ()=> {
        switch(index){
            case 0:
                return `bg-sec-300`
            case 1:
                return `bg-sec-100`
            case 2:
                return `bg-main-100`
            default:
                return ``
        }
    }
    return (
        <div className={`flex ${even ? ' flex-col':' flex-col-reverse'} ${_renderBg()} lg:w-[400px]`}>
            <img className="w-full" src={image} alt={title} />

            <div className={`mt-[60px] pl-[30px] pr-[15px] py-[65px] flex flex-col gap-[20px] text-left }`}>
                <p className="font-[700] text-dark text-[2.5em] leading-[1.2em]">{title}</p>
                <p className="font-sansec font-[400] text-dark text-[1.2em] leading-[1.4em] lg:max-w-[350px] lg-h-[150px]">{subtitle}</p>
            </div>
        </div>
    )
}