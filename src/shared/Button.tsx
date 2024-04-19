import React from "react"
import { useNavigate } from "react-router-dom";
import { tv, type VariantProps } from 'tailwind-variants';
 

const ButtonStyle =tv({
    base:'  flex  items-center justify-center  rounded-[0.5rem] py-[0.75rem] px-[1rem] rounded-[0.3rem] text-[1rem]',
    variants:{
        color:{
            blue:'text-white bg-blue',
            white:'bg-white text-blue '
        },

        weight:{
            '500':'font-[500]'
        }
        
    },

    defaultVariants:{
        color:'blue',
        weight:'500'
    },
    

})

export type ButtonStyleVariants = VariantProps<typeof ButtonStyle>; // this is just converting the ButtonStyle keys to actuall props for me to use


type Prop = React.PropsWithChildren<{
 className?:string,
 onClick?:(e: React.MouseEvent<HTMLButtonElement>)=>void;
 disabled?:boolean;
}> & ButtonStyleVariants 
const Button = ({children,className='',disabled=false,onClick=(e)=>{},...rest}:Prop)=>{


    return (
        <button 
        disabled={disabled}
        onClick={onClick}
        className={ButtonStyle({...rest,class:className})} >
            {children}
        </button>
    )
}

export default Button

