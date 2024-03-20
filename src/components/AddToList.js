import React, { useState } from 'react';

export default function AddToList({ addTask }) {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const addToList = () => {
        if (input.trim() !== '') {
            addTask(input.trim());
            setInput('');
        } else {
            alert('Please enter a value');
        }
    }

    return (
        <div className="flex flex-col self-center max-w-full w-[964px] max-md:mr-2.5 -mt-10">
            <div className="self-center text-8xl text-black max-md:text-4xl">
                Todo <span className="text-yellow-400">List</span>
            </div>
            <div className="flex gap-5 mt-20 text-xl text-neutral-300 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <input
                    type="text"
                    placeholder="What your todo"
                    value={input}
                    onChange={handleInputChange}
                    className="rounded-3xl border border-solid shadow-lg text-slate-800 border-neutral-600 w-fit grow justify-center items-center px-3 max-md:px-5 max-md:max-w-full" />
                <button onClick={addToList}>
                    <img
                        loading="lazy"
                        alt="add to list"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a7792318874d0cebc90d5b938f53fd556ef290916884046d31cb82e67177f8b?apiKey=89a892a24a5940518254fdf55b2a9fd6&"
                        className="shrink-0 self-start mt-1.5 aspect-square w-[65px]" />
                </button>
            </div>
        </div>
    )
}
