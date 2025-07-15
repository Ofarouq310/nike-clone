
export default function ProductCard(props) {
  return (
    <div onClick={props.onClick} className="flex flex-col gap-4 justify-center">
          <img src={props.image} alt="shoe-image" className="thumbnail-hover"></img>
    </div>  
  )
}
