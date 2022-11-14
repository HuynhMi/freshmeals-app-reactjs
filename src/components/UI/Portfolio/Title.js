import { memo } from "react";

const Title = ({title, subtitle}) => {
    return (
        <>
            {subtitle && <h6 className="font-bold text-greenBtn capitalize mb-3">{subtitle}</h6>}
            {title && <h1 className="text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-bold capitalize mb-12">{title}</h1>}
        </>
    )
}

export default memo(Title);