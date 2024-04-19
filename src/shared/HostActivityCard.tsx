



const HostActivityCard = ()=>{


    return (
      <div className="bg-white flex">
          <div className="bg-white rounded-[4px] p-[1.5rem] flex w-[96%]">
            <img src="/hotels/Rectangle 3437.svg" className="block h-[100%]" alt="" />


            <div className=" w-[90%]"
            // style={{'border':'1px solid green'}}
            >
               <div className="flex  items-start justify-between pl-[1rem]">
               <div 
                // style={{'border':'1px solid red'}}
                >
                    <h2 className="text-[#000000] poppins-semibold text-[1.25rem]">Riviera Resort, Lekki</h2>
                    <p className="text-[#1D2433] poppins-medium w-[500px]">18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1</p>
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

                <div className="border-b-[1px] border-t-[1px] text-[#647995]  border-[#E4E7EC] mt-[1.125rem] pl-[1rem] flex  items-center justify-between">
                    <p className="flex gap-[0.75rem] py-[0.875rem]">
                        <span >Facilities:</span>
                        <span className="flex items-center gap-[0.375rem]"><img src="/hotels/Vector 2.svg" alt="" /><span>Pool</span></span>
                        <span className="flex items-center gap-[0.375rem]"><img src="/hotels/Vector (1) 2.svg" alt="" /><span>Bar</span></span>
                    </p>

                    <p className="flex gap-[0.75rem]">
                        <span><img src="" alt="" /> <span>Check In: 20-04-2024</span></span>
                        <span><img src="" alt="" /> <span>Check Out: 20-04-2024</span></span>
                    </p>
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

        <div className="bg-[#FBEAE9]  flex items-center justify-center w-[4%] cursor-pointer w-[4%]">
            <img src="/close_activties.svg" alt="" />
     </div>
      
      </div>

    );
};

export default HostActivityCard;