import React from "react";
import TopBar from "../shared/TopBar"




type Prop =React.PropsWithChildren<{}>

const GeneralLayout = ({children}:Prop)=>{


    return (
        <div>
            <div>
            <TopBar />
            </div>

            {children}
        </div>
    )
}

export default GeneralLayout;