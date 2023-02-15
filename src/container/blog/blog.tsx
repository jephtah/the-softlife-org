import { useState } from "react"
import issue from "../../assets/images/issue.png"
import { Latestissue } from "../../component/blog/latest"
import { Tab } from "../../component/common/tab"
import { Singleblog } from "../../component/blog/singleblog"
import { blogs } from "../../data/data"
export const Blog = ()=> {
    const [active, setActive]= useState<number>(0)
    return (
        <section className="w-full pt-[100px]">
            <div className="container mx-auto flex flex-col gap-[100px]">
                <Latestissue image={issue} title='Getting The Right Information to get started in tech' date="Jan 14th, 2023" time="3 mins read" />
                <div className="flex  mx-auto flex-col gap-[50px] items-center">
                        <Tab active={active} data={['All','Technology', 'Learning']} click={(value:number)=> setActive(value)} />
                
                    <div className="w-full flex mx-auto items-start gap-[40px] flex-wrap">
                        {
                            blogs.map((item,index)=> (
                                <Singleblog
                                    key={index} time={item.time}
                                    title={item.title} image={item.image}
                                    type={item.type} date={item.date}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
