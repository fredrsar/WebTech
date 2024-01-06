import React, { useState } from 'react'; 

const CommentForm = ({
    btnLabel, 
    formSubmitHandler, 
    formCancelHandler = null,
    initialText = ""
}) => {
    const [value, setValue] = useState(initialText); 

    const submitHandler = (e) => {
        e.preventDefault(); 
        formSubmitHandler(value); // Do whatever we want to do through a function 
        setValue(""); // Resetting input field
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='flex flex-col items-end border rounded-lg p-4'> 
                <textarea className='text-black w-full focus:outline-none bg-transparent' 
                rows="3" 
                placeholder="Write a comment!"
                value={value}
                onChange={(e) => setValue(e.target.value)}>
                </textarea>
                <div className='flex item-center gap-x-2 pt-2'> 
                    {formCancelHandler && (
                        <button onClick={formCancelHandler} className='px-6 py-2.5 rounded-lg border border-red-500 text-red-500'> 
                            Cancel
                        </button>
                    )}
                    <button 
                        type="submit" 
                        className='bg-gradient-to-br from-purple-600 to-blue-500 
                        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white font-semibold'
                    >
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
    )
}
export default CommentForm; 