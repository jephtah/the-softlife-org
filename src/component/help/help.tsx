export const Singlehelp = ({title,subtitle,svg,image,index,even}:any)=> {
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
    var _renderTitle = ()=> {
        switch(index){
            case 0:
                return `text-sec-500`
            case 1:
                return `text-sec-500`
            case 2:
                return `text-main-500`
            default:
                return ``
        }
    }
    return (
        <div className={`lg:w-fit w-[80vw] relative flex items-center justify-between text-left  ${_renderBg()} ${even ? 'flex ':'flex-row-reverse'}  `}>
            <span className={`flex flex-col gap-[15px] px-[30px] lg:px-[45px] py-[50px] lg:py-[60px] ${_renderBg()} lg:max-w-[650px]`}>
                    <p className={`${_renderTitle()} text-[1.5em] lg:text-[2.2em] `}>{title}</p>
                    <p className="font-sansec font-[400] text-dark text-[.7em] lg:text-[1em] leading-[1.4em]">{subtitle} </p>
            </span>
            <div className="lg:w-[430px] hidden  lg:flex overflow-hidden">
                <img src={image} alt={title} className="w-full" />
            </div>
            <div className={`md:h-[50px] rounded-full p-[20px] flex items-center justify-center absolute top-[20px] 
                ${_renderBg()} ${even ? 'left-[-30px]':'right-[-30px]'}
            `}>
                <img className="md:h-[25px]"  src={svg} alt={ `sv ${index}`} />
            </div>
        </div>
    )
}