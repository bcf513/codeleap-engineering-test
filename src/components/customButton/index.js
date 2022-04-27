import { useState, useEffect } from 'react';

function CustomButton({text, inputsToFill, onClick}) {

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
        <button disabled={buttonDisabled} 
            onClick={onClick}
            type='button'>
            {text}
        </button>
    )
    
}

/*
        <input disabled={buttonDisabled} 
            onClick={onClick}
            type='submit'
            value={text}
        />
        <button disabled={buttonDisabled} 
            onClick={onClick}
            type='submit'>
                {text}
        </button>
        <button disabled={buttonDisabled} 
            onClick={onClick}
            type='button'>
                {text}
        </button>
*/

export default CustomButton