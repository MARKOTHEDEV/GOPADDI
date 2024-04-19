import Button from "./Button";
import SearchBar from "./SearchBar";
import { CiSearch } from "react-icons/ci";


const TopBar = ()=>{


    return (
        <div className="py-[2.188rem] px-[2rem] flex items-center justify-between gap-[1rem] items-center 
        sticky top-0
        ">

            <div className="flex gap-[1.75rem]">
            <img src="logo.svg" alt="gopaddi logo" />
            <div className="w-[400px] ">
            <SearchBar />

            </div>
            </div>            


                {/*  Top Bar Links Container*/}
            <div className="flex items-center">

                {/* first section */}
                <div className="flex items-center gap-[1.5rem]">
                    <TopBarIconWithTextLink 
                    icon="/topbaricons/House.svg"
                    text="Home"
                    />

    <TopBarIconWithTextLink 
                    icon="/topbaricons/dashboard.svg"
                    text="Dashboard"
                    />


    <TopBarIconWithTextLink 
                    icon="/topbaricons/wallet2.svg"
                    text="Wallet"
                    />


    <TopBarIconWithTextLink 
                    icon="/topbaricons/Vector (1).svg"
                    text="Plan a trip"
                    />

    <TopBarIconWithTextLink 
                    icon="/topbaricons/Vector (2).svg"
                    text="Commission for life"
                    />

                </div>

                    {/* second section */}
                <div className="flex px-[2rem]  items-center ">
                    <div className="bg-[#98A2B3] h-[50px] w-[2px] mr-[2.031rem]">
                        {/* this is the line */}
                    </div>
                    <Button >Subscribe</Button>
                </div>

                <div className="flex gap-[1.5rem]  items-center">
                <TopBarIconWithTextLink 
                    icon="/topbaricons/Bell.svg"
                    text="Notification"
                    />
                {/* <TopBarIconWithTextLink 
                icon="/topbaricons/cart.svg"
                text="Carts"
                /> */}
                                <TopBarIconWithTextLink 
                icon="/topbaricons/PlusSquare.svg"
                text="Create"
                />

                <div className="flex gap-[0.938]rem">
                    <img src="/topbaricons/Ellipse 775.svg" alt="" />
                    <img src="/topbaricons/CaretDown.svg" alt="" />
                </div>
                </div>
            </div>

        </div>
    )
}

export default TopBar;

type TopBarIconWithTextLinkProp ={
    text:string,
    icon:string,
}
const TopBarIconWithTextLink =({text,icon}:TopBarIconWithTextLinkProp)=>(
    //no need for a component it specific to this file
    <div className="inline-block">
        <img src={icon} className="block mx-auto" alt="" />
        <p className="poppins-regular font-[500] text-[0.8rem] text-grayblue2 text-center"> 
        {text}
        </p>
    </div>
)