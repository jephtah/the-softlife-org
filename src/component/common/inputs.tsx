export const Inputs = ({input, type,name, value, change, imp,holder}:any)=> {

    var _renderInput = ()=> {

    
        switch(input){
            case 'input':
               return <span className="w-full relative">
                    <input placeholder={holder} value={value} type={type} className="w-full bg-white pl-[20px] h-[40px] py-[40px] outline-none"  />
                    {imp && <Important/>}
               </span>
            case 'textarea':
                return <span className="w-full relative">
                        <textarea placeholder={holder} value={value}  className="w-full bg-white pl-[20px] py-[20px] h-[200px] max-h-[250px] text-gray-500 font-sansec text-[1em] outline-none" />
                        {imp && <Important/>}
                </span> 
            
            default:
                return <></>
        }
    }
    return (
        _renderInput()
    )

}

const Important = ()=> {

    return (
        <p className="font-sansec text-red-700 font-[500] text-[.5em]">*</p>
    )
}