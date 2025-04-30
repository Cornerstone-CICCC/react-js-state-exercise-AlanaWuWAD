type Props = {
    onToggle: () => void
}

const LightToggle = (props:Props) => {
    return(
        <div >
            <button onClick = {props.onToggle}>Toggle Lights</button>

        </div>
    )
}

export default LightToggle