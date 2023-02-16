export const Tab = ({data, click, active}:any)=>{

    return (
        <span className="flex w-fit  gap-[10px] border-[1px] border-main-500 p-[10px] rounded-[45px]">
            {
                data.map((item:string,index:number)=> (
                    <p onClick={()=>click(index)} className={`cursor-default  rounded-[45px] py-[10px] px-[20px] lg:py-[15px] lg:px-[50px] text-[.8em] ${active === index? 'bg-main-500  text-white':' bg-transparent text-main-500'}`}>
                        {item}
                    </p>
                )) 
            }
        </span>
    )
}