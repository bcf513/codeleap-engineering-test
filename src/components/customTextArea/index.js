import './style.css'
import { useRef } from 'react'

function CustomTextArea({placeholder, id, name, onChange, onSubmit, value, maxHeight = 90}) {

    const textAreaRef = useRef(null);
    
    const handleChange = e => {
        
        textAreaRef.current.style.height = "0px";
        
        const scrollHeight = textAreaRef.current.scrollHeight;
        const minHeight = textAreaRef.current.style.minHeight 
        
        const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

        const actualHeight = clamp(scrollHeight, minHeight, maxHeight)

        textAreaRef.current.style.height = actualHeight + 'px'

        onChange(e)

    }

    const handleKeyDown = e => {

        if (e.key === "Enter" && !e.shiftKey) onSubmit()

    }

    return (
        <textarea className='customTextArea'
            id={id}
            name={name}
            placeholder={placeholder}
            ref={textAreaRef}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={value}
        />
    )
}

export default CustomTextArea