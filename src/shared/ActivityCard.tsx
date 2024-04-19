import Button from "./Button";





type Prop ={
    theme:'darkBlue'|'lightBlue'|'blue'
}
const ActivityCard = ({theme}:Prop)=>{

    const colorTheme ={
        'darkBlue':{
            text:'text-white',
            btn:'text-white',
            bg:'bg-blackthickBlue '
        },
        'lightBlue':{
            text:'text-[#000000]',
            btn:'text-[#000000]  text-white',
            bg:'bg-grayBlue text-white',
        },
        'blue':{
            text:'text-white',
            btn:'text-blue bg-white',
            bg:'bg-blue text-white'
        
        },
    }
    return (
        <div className={`w-[270px] ${colorTheme[theme].bg}  ${colorTheme[theme].text} py-[1rem] px-[0.875rem] rounded-[4px]`}>
        {/* Activie Card */}
        <p className="poppins-semibold  text-[1rem]">Activities</p>
        <p className="poppins-regular text-[0.875rem] pt-[0.5rem] ">Build, personalize, and optimize your itineraries with our trip planner.</p>
        <Button className={`w-full mt-[2.313rem] ${colorTheme[theme].btn}`}
        // color={''}
        >Add Activities</Button>
    </div>
    );
};

export default ActivityCard;