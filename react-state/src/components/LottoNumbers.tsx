type Props = {
    onToggle: () => number[]
}


const LottoNumbers = (props:Props) => {
    return (
        <div>
            <button onClick={props.onToggle}>Generate Lotto Numbers</button>
        </div>
    )
}

export default LottoNumbers