interface InputInterface {
  size : 'sm' | 'md' | 'lg' | 'full',
  color : 'primary' | 'secondary',
  placeholder : string,
  Reference : any,

}

export const Input = ( props : InputInterface ) => {
  const size = {
    'sm' : 'w-72',
    'md' : 'w-106',
    'lg' : 'w-152',
    'full' : 'w-full',
  }

  const color = {
    'primary' : "bg-",
    'secondary' : ""
  }
  return(
    <input ref={props.Reference} placeholder={props.placeholder} className={`${size[props.size]} px-2 py-1.5`}/>
  )
}