import { useState } from 'react'

const FunctionalComponent = ({name}) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        if(value > 0)
        setValue(value - 1);
    }
    return (
    <div>
        <h1>fungctional component</h1>
        <h2>siapa {name} Component</h2>
        <button onClick={handlePlus}>+</button>
        <span>{''} {value} {''}</span>
        <button onClick={handleMinus}>-</button>
    </div>
    
    )
}
FunctionalComponent.defaultProps = {
    name: 'user'
}
export default FunctionalComponent