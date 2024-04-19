import Button from "./Button";






const FlightActivityCard = ()=>{


    return (
     <div className="pt-[2rem] bg-white rounded-[4px]">
           <div className=" border-b-[1px] border-[#E4E7EC]">
            <div className="pb-[2rem] flex items-center justify-between   px-[1.5rem] ">
                {/* top area */}
                <div className="flex gap-[0.75rem]">
                    <img src="/flightActivity/american_airlines_symbol.svg.svg" alt="" />
                    <div>
                        <p className="poppins-semibold text-[1rem]">American Airlines</p>
                        <div className="flex items-center gap-[0.375rem] ">
                            <p className="text-[#676E7E] text-[1rem] poppins-medium">AA-829</p>
                            <p>.</p>
                            <Button className="poppins-medium text-[0.75rem] bg-[#0A369D] p-[0.5rem] ">
                            First Class 
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-between w-[621px]">
                    <div className="text-center inline-block">
                        <p className="poppins-semibold text-[1.5rem]">08:35</p>
                        <p className="text-[#676E7E] ">Sun, 20 Aug</p>
                    </div>

                    <div className="w-[60%]">
                        {/* Duration: Container */}
                        <div className="flex items-center justify-between">
                            {/* upper section */}
                            <img src="/flightActivity/Vector (1).svg" alt="" />
                            <p className="poppins-medium text-[1rem] text-[#676E7E]">Duration: 1h 45m</p>
                            <img src="/flightActivity/Vector (2).svg" alt="" />
                        </div>

                        <div className="h-[8px] w-[100%] bg-grayBlue rounded-[8px] relative after:content-[''] after:bg-blue 
                        after:h-[8px] after:w-[136px] after:absolute after:left-[32%] after:rounded-[8px]
                        ">
                            {/* progress bar */}
                        </div>

                        <div className="flex items-center justify-between">
                            {/* lower section */}
                            <p className="poppins-semibold text-[1rem] text-[#1D2433]">LOS</p>
                            <p className="poppins-medium text-[1rem] text-[#676E7E]">Direct</p>
                            <p  className="poppins-semibold text-[1rem] text-[#1D2433]">SIN</p>
                        </div>
                    </div>

                    <div className="text-center inline-block">
                        <p className="poppins-semibold text-[1.5rem]">08:35</p>
                        <p className="text-[#676E7E] ">Sun, 20 Aug</p>
                    </div>
                </div>

                <p className="poppins-semibold text-[1.75rem]">₦ 123,450.00</p>
            </div>
        </div>
        
        <div className="border-b-[1px] border-[#E4E7EC]">

            <div className="py-[1.438rem] flex items-center justify-between   px-[1.5rem] ">
                    <p className="text-grayblue2 poppins-medium text-[1.125rem] flex gap-[1rem] w-full "
                    // style={{'border':'1px solid red'}}
                    > 
                    <span className="flex gap-[0.2rem] text-nowrap"><span className="block pr-[0.75rem]">Facilities:</span>  <img src="/flightActivity/Vector (3).svg" alt=""  className="block mr-[0.375rem]"/><span>Baggage:20kg,Cabin Baggage: 8kg</span> </span>
                    <span className="flex gap-[0.375rem] text-nowrap"><img src="/flightActivity/Vector (4).svg" alt="" />In flight entertainment</span>
                    <span className="flex gap-[0.375rem] text-nowrap"><img src="/flightActivity/Vector (5).svg" alt="" /><span>In flight meal</span></span>
                    <span className="flex gap-[0.375rem] text-nowrap"><img src="/flightActivity/Vector (6).svg" alt="" /> <span>USB Port</span></span>
                    </p>
            </div>
            
           
        </div>

        <div className="flex justify-between  px-[1.5rem] py-[1.438rem] text-blue poppins-medium text-[1.125rem]">
                <div className="flex gap-[2rem]">
                    <p>Flight details</p>
                    <p>Price details</p>
                </div>
                <p>Edit details</p>
            </div>
     </div>
    )
}

export default FlightActivityCard;