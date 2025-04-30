import { useState } from 'react';



const ClickCounter = () => {
    const [count, setCount] = useState<number>(0)
    const handleAddCount = () => {
        setCount(count => count + 1)
    }
    const handleDcreaseCount = () => {
        setCount(count => count - 1)
    }
    return (
        <div className="output">
            <p>Count time : {count}</p>
            <button onClick={handleAddCount}>Click Counter (+)</button>
            <button onClick={handleDcreaseCount}>Click Counter (-)</button>
        </div>
    )
}

export default ClickCounter