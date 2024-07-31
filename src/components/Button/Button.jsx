function Button(props){

    return(
        <button
        style={{
            padding : '10px 15px',
            borderRadius : '10px',
            outline: 'none',
            backgroundColor: props.backgroundColor

            
        }}
        onClick = {()=>props.action(props.backgroundColor)}>
            {props.text }
            
        </button>
    )
}
export default Button