import React, {useState} from "react";
import Spinner from "../../../../components/Spinner/Spinner.tsx";

type SectionImageProps = {
    src: string,
    alt: string,
}
export const SectionImage: React.FC<SectionImageProps> = (props) => {
    const [ isloading, setIsLoading ] = useState(true);

    const { src, alt } = props;

    return (
    <div className={'w-full md:w-1/2 relative'}>
        {
            isloading &&
            <div className={'absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50'}>
                <Spinner/>
            </div>
        }
        <img loading='lazy' onLoad={() => {setIsLoading(false)}} src={src} alt={alt} className={[
            'w-full drop-shadow-xl',
        ].join(' ')}/>
    </div>
    )
};