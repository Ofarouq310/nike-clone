
export default function ThumbnailShoe(props) {
  return (
    <div onClick={props.onClick} className={`bg-thumbnail bg-cover bg-no-repeat rounded-2xl flex items-center justify-center max-sm:p-4 sm:w-40 sm:h-40 thumbnail-hover ${props.isSelected ? 'border-coral-red border-2' : 'border-transparent'}`}>
        <img src={props.image} alt={props.alt} className='object-contain' />
    </div>
  )
}
