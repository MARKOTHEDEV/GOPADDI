




const SideBar = ()=>{


    return (
        <div className="bg-white w-[300px] px-[1.5rem] py-[2.688rem] h-[100vh] "
        >   

        <div className="flex gap-y-[0.75rem] flex-col">
                    <SideBarLinks text="Activities"
                    img={'/sidebar/RoadHorizon.svg'}
                    />


                    <SideBarLinks text="Hotels"
                    img={'/sidebar/Vector.svg'}
                    />
                    <SideBarLinks text="Flights"
                    img={'/sidebar/Vector (1).svg'}
                    />

                    <SideBarLinks text="Study"
                    img={'/sidebar/Vector (2).svg'}
                    />

                    <SideBarLinks text="Visa"
                    img={'/sidebar/Vector (3).svg'}
                    />

                    <SideBarLinks text="Immigration"
                    img={'/sidebar/Vector (4).svg'}
                    />

                    <SideBarLinks text="Medical"
                    img={'/sidebar/Vector (5).svg'}
                    />

                    <SideBarLinks text="Vacation Packages"
                    img={'/sidebar/Vector (6).svg'}
/>
        </div>

        
        <div className="bg-gray rounded-[4px] py-[1.125rem] px-[0.875rem] flex items-center gap-[1.563rem] mt-[4rem] pr-[2rem]">

            <div className="flex items-center gap-[0.5rem]">
            <p className="bg-blue py-[0.813rem] px-[0.875rem] text-white rounded-[4px] w-[50px]">GO</p>
            <p className="text-nowrap">Personal Account</p>
            </div>

            <img src="/personalAccount.svg" alt="" />
        </div>

        </div>
    )
}

export default SideBar;


const SideBarLinks =({img,text}:{img:string,text:string})=>(
    <div className="text-grayblue2 flex gap-[0.5rem] text-[1rem] py-[1rem] px-[0.938rem] cursor-pointer">
        <img src={img} alt="" />
        <p>{text}</p>
    </div>
)