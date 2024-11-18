import Image from 'next/image'

type ButtonPropsType={
    type:"submit" | "button";
    title:string;
    icon?:string;
    variant:string;
    full?:boolean;

}

const Button =({type,title,icon,variant,full}:ButtonPropsType)=>{
    return(
        <button
        type={type}
        className={`${variant} flex justify-center items-center gap-3 rounded-full border ${full && 'w-full'}`}
        >
            {icon && <Image src={icon} alt={title} width={20} height={20}/>}
            <label className="text-[16px] whitespace-nowrap cursor-pointer">{title}</label>
        </button>
    )
}

export default Button;