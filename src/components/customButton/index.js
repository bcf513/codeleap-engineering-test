import { useState, useEffect } from 'react';

function CustomButton({text, inputsToFill, handleButtonClick}) {

    const [buttonDisabled, setbuttonDisabled] = useState(false);

    useEffect(() => {
        for (let string of inputsToFill) {
            if (string.length === 0) {
                setbuttonDisabled(true)
                break
            }
            setbuttonDisabled(false)
        }
    }, [inputsToFill]);

    return (
        <button disabled={buttonDisabled} onClick={handleButtonClick}>{text}</button>
    )
    
}

export default CustomButton