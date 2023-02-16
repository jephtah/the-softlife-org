
interface Platformbtn {
    type:string,
    name:string,
    classN?:string,
    bg?:string,
    click: ()=> void,
}
export const Platformbutton = ({type,name,classN,bg,click}:Platformbtn)=> {

    var _renderBtn = ()=> {

    
        switch(type){
            case 'normal':
                return <button className={`rounded-full ${bg ? bg: 'bg-main-500'} py-[10px] px-[15px]  md:py-[15px] md:px-[30px] font-sansec text-[1em] font-[500] text-white ${classN}`}>{name}</button>
            
            case 'secondary':
                return <button className="rounded-full bg-white py-[10px] px-[15px] md:py-[15px] md:px-[30px] font-sansec text-[1em] font-[500] text-dark">{name}</button>
            case 'outline-sec':
                return <button className="rounded-full bg-transparent border-[2px] border-white py-[10px] px-[15px] md:py-[15px] md:px-[30px] font-sansec text-[1em] font-[500] text-white">{name}</button>
            case 'withicon':
                return <p className="font-sansec text-[1.1em] font-[600] text-dark flex items-center gap-[10px]">{name}
                    <i className={classN}></i>
                </p>
            default:
                return <></>
        }
    }
    return (
        _renderBtn()
    )
}