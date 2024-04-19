import Button from "./Button";




const GeneralActivities =()=>{

    return (
        <div className="bg-white flex">
          <div className="bg-white rounded-[4px] pt-[1.5rem] pl-[1.5rem] pb-[1.5rem] flex w-[96%]">

            <div className="relative">
            <img src="/hotels/Rectangle 3437.svg" className="block h-[100%]" alt="" />

            <div className="flex justify-between absolute w-[90%]
            top-[50%] left-[5%]
            "
            //  style={{'border':'1px solid green'}}
            >
                        <img src="/activity/Vector.svg" alt="" />
                        <img src="/activity/vector1.svg" alt="" />
                    </div>
            </div>


            <div className=" w-[95%] "
            // style={{'border':'1px solid green'}}
            >
               <div className="flex  items-start justify-between pl-[1rem] pr-[1.5rem]">
               <div 
                // style={{'border':'1px solid red'}}
                >
                    <h2 className="text-[#000000] poppins-semibold text-[1.25rem]">The Museum of Modern Art</h2>
                    <p className="text-[#1D2433] poppins-medium w-[500px]">
                    Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant
                    </p>
                    <p className="flex gap-[0.875rem] pt-[0.5rem]">
                        <p className="text-blue text-[1rem] poppins-medium flex items-center gap-[0.375rem]">
                            <span><img src="/hotels/MapPin.svg" alt="" /></span>
                            <span>Show in map</span>
                        </p>

                        < p className="poppins-medium flex items-center gap-[0.25rem] text-[#676E7E]"> 
                            <img src="/hotels/Vector (1).svg" alt="" />
                            <span>8.5 (436)</span>
                        </p>

                        <p className="poppins-medium flex items-center gap-[0.25rem] text-[#676E7E]">
                            <img src="/hotels/Vector (2).svg" alt="" />
                            <span>King size room</span>
                        </p>


                    </p>
                </div>

                <div
                // style={{'border':'1px solid red'}}
                >
                    <p className="poppins-semibold text-[1.75rem] text-[#1D2433]">₦ 123,450.00</p>
                    <p className="poppins-semibold text-[#1D2433] text-[1rem]">Total Price: NGN 560,000</p>
                    <p className="poppins-semibold text-[#1D2433] text-[1rem]">1 room x 10 nights incl. taxes</p>
                </div>
               </div>

                <div className="border-b-[1px] border-t-[1px] text-[#647995]  border-[#E4E7EC] mt-[1.125rem] pl-[1rem] flex  items-center justify-between pt-[0.875rem] pb-[2.375rem]
                 pr-[1.5rem]
                ">
                    <div>
                    <p className="flex gap-[0.75rem] poppins-medium text-[1.125rem]"><span>What's Included:</span> <span>Admission to the Empire State Building</span></p>
                   <p className="text-blue poppins-medium text-[1.125rem] ">See more</p>
                    </div>

                    <div className="flex gap-[0.875rem]">
                        <Button className="text-[#0A369D] text-[white] bg-[#0b369d]">
                        Day 1
                        </Button>
                        <div className="flex flex-col gap-[0.625rem]">
                            <img src="/activity/roundedup.svg"   className="cursor-pointer" alt="" />
                            <img src="/activity/roundeddown.svg" className="cursor-pointer" alt="" />
                        </div>
                    </div>
                </div>

             
                <div className="flex justify-between  px-[1.5rem] py-[1rem] text-blue poppins-medium text-[1.125rem]">
                <div className="flex gap-[2rem]">
                    <p>Flight details</p>
                    <p>Price details</p>
                </div>
                <p>Edit details</p>
            </div>
            </div>

      

           
        </div>

        <div className="bg-[#FBEAE9]  flex items-center justify-center w-[4%] cursor-pointer w-[4%] ">
            <img src="/close_activties.svg" alt="" />
     </div>
      
      </div>
    )
}

export default GeneralActivities;