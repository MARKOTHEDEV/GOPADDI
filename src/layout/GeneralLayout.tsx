import React from "react";
import TopBar from "../shared/TopBar"
import SideBar from "../shared/SideBar";




type Prop =React.PropsWithChildren<{}>

const GeneralLayout = ({children}:Prop)=>{


    return (
        <div className="w-[100%]" style={{
            'border':'1px solid red'
        }}> 
            <div>
            <TopBar />
            </div>

            <div className="bg-gray flex p-[2.5rem] gap-[4rem]">

            <SideBar/>

            <div className="bg-white w-full p-[1.3rem]">
            {children}
            </div>
            </div>
        </div>
    )
}

export default GeneralLayout;