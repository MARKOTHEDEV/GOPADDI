import GeneralLayout from "../layout/GeneralLayout";
import ActivityCard from "../shared/ActivityCard";
import Button from "../shared/Button";
import SideBar from "../shared/SideBar";



const IndexPage =()=>{

    return (
        <GeneralLayout>
            <div>
                <div className="relative">
                    {/* banner area */}
                    <img src="/bannergoback.svg" className="absolute top-[1.5rem] left-[1.5rem]" alt="" />
                    <img src="/banner.svg" alt=""  className="rounded-[4px]"/>
                </div>


                {/* headers */}
                <div className="flex mt-[1.25rem] justify-between ">
                    <div>
                    <p className="poppins-medium  text-[0.875rem] flex gap-[0.25rem]  items-center py-[0.25] px-[0.5rem] bg-cream text-brown w-[261px] ">
                        <span><img src="/browncalendar.svg" alt="" /></span>
                        <span>21 March 2024</span>
                        <img src="/brownarrow.svg" alt="" />
                        <span>21 April 2024</span>
                    </p>
                    <h1 className="poppins-semibold text-[1.5rem] py-[0.25rem]">Bahamas Family Trip</h1>

                    <p className="poppins-regular text-[1rem] text-[#676E7E] flex items-center gap-[0.25rem]">
                        <span className="">
                        New York, United States of America 
                        </span>
                        <span className="w-[2px] h-[14px] bg-[#D0D5DD] block"></span>
                        <span>
                        Solo Trip
                        </span>

                    </p>
                    </div>

                    <div className="flex items-center  gap-[0.5rem]">
                        <Button color='lightBlue' className="py-[0.949rem] px-[4.375rem]">
                            <img src="/adduserimage.svg"  className="mx-auto block" alt="" />
                        </Button>

                        <img src="/moreimg.svg" alt="" />
                    </div>

                </div>

              <div className="flex items-start justify-between">
                  {/* Activies Card Contaiiner */}
                  <div className="flex gap-[0.25rem] mt-[1.25rem]">
                   <ActivityCard
                   theme='darkBlue'
                   />
                   <ActivityCard theme="lightBlue"/>
                   <ActivityCard  theme='blue'/>
                </div>

                <div className="flex items-center">
                    <img src="/box.svg" alt="" />
                    <div className="bg-grayBlue h-[2px] w-[31px]"></div>
                    <img src="/set.svg" alt="" />
                </div>
              </div>
            </div>
        </GeneralLayout>
    )
}

export default IndexPage;