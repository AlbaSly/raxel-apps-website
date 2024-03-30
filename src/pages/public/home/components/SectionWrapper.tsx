import { ReactComponent } from '../../../../interfaces'
import {SectionImage} from "./SectionImage.tsx";

type SectionWrapperProps = ReactComponent & {
  rowReverse?: boolean;
  sectionTitle: string;
  sectionTitleDescription: string;
  sectionTitleHighlightableWord?: string;
  img: string;
  imgAlt: string;
}
const SectionWrapper: React.FC<SectionWrapperProps> = (props): JSX.Element => {
  
  const {
    rowReverse = false,
    sectionTitle,
    sectionTitleDescription,
    sectionTitleHighlightableWord = Date.now().toString(),
    img,
    imgAlt,
    
    className,
    children,
  } = props;

  const regex = new RegExp(`(${sectionTitleHighlightableWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');

  const sectionTitleSplitted = sectionTitle.split(regex);

  return (
    <div className={
      [
        'info-wrapper py-16 flex flex-col items-center justify-center',
        className
      ].join(' ')
    }>
      <section className={
        [
          'container mx-auto flex flex-col',
          rowReverse ? 'md:flex-row-reverse' : 'md:flex-row',
          'items-center justify-center gap-10'
        ].join(' ')
      }>
        <div className={
          [
            'text-3xl md:text-4xl w-full md:w-1/2 font-semibold text-white text-center md:text-left animate__animated opacity-0',
            'animate__fadeIn animate__faster'
          ].join(' ')
        }>
          <h2>
            {
              sectionTitleSplitted.map((word, index) => {
                return word.toLowerCase() === sectionTitleHighlightableWord.toLowerCase() 
                  ? <span key={index} className='text-green-500 underline'>{word}</span> 
                  : word
              })
            }
          </h2>
          <p className='mt-2 text-xl font-medium'>{sectionTitleDescription}</p>
          {children}
        </div>

        <SectionImage src={img} alt={imgAlt}/>
      </section>
    </div>
  )
}

export default SectionWrapper