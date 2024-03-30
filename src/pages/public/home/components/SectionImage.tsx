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
        <>
            {
                isloading &&
                <div className={'w-full md:w-1/2'}>
                    <Spinner/>
                </div>
            }
            <img loading='lazy' onLoad={() => {setIsLoading(false)}} src={src} alt={alt} className={[
                'drop-shadow-xl w-full md:w-1/2',
            ].join(' ')}/>
        </>
    )
};