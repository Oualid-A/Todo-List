import React, { useEffect } from 'react';
import delImg from "../assets/delete.png";
import updateImg from "../assets/update.png";

export default function MyTasks({ list, setNewValue, incrementCount, counter, checkedTasks, onCheckChange, deleteTask, updateTask, editIndex, newValue, setEditIndex }) {

    useEffect(() => {
        console.log("rendering...");
    });

    const handleEditClick = (index) => {
        if (editIndex === null) {
            setEditIndex(index);
            const newValues = [...newValue];
            newValues[index] = list[index];
            setNewValue(newValues);
        }
    };

    return (
        <div className="flex flex-col self-center mt-10 w-full text-xl max-w-[1073px] text-neutral-300 max-md:max-w-full">
            {list.map((item, index) => (
                <div key={index} className="flex gap-5 w-full justify-between items-center m-auto mt-6 max-md:flex-wrap max-md:max-w-full">
                    {/* checkbox */}
                    <input
                        checked={checkedTasks[index]}
                        onChange={() => { onCheckChange(index) }}
                        className="shrink-0 self-stretch my-auto border border-black border-solid h-[24px] w-[44px]" type="checkbox"
                    />
                    {editIndex === index ? (
                        // edit input
                        <input
                            className='w-full mb-4 py-3 px-2 rounded-3xl border border-solid justify-between items-center m-auto mt-6 max-md:flex-wrap max-md:max-w-full'
                            value={newValue[index]}
                            onChange={(e) => {
                                const newValues = [...newValue];
                                newValues[index] = e.target.value;
                                setNewValue(newValues);
                            }}
                            onBlur={() => updateTask(index)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    updateTask(index);
                                }
                            }}
                        />
                    ) : (
                        <div onClick={() => incrementCount(index)} className={`justify-center items-start px-3 py-3 text-black font-mono bg-white rounded-3xl border border-solid w-full shadow-lg border-neutral-600 max-md:px-5 max-md:max-w-full ${checkedTasks[index] ? 'line-through' : ''}`}>
                            {item}
                        </div>
                    )
                    }
                    {/* Actions */}
                    <div className='flex items-center space-x-6 w-[340px] lg:w-[290px]'>
                        <div>{counter[index] !== 0 ? counter[index] : ''}</div>
                        {/* delete */}
                        <button>
                            <img
                                loading="lazy"
                                alt='delete Task'
                                src={delImg}
                                onClick={() => deleteTask(index)}
                                className="shrink-0 w-25 max-w-full aspect-[2.33]" />
                        </button>
                        {/* update */}
                        <button>
                            <img
                                loading="lazy"
                                alt='update list'
                                src={updateImg}
                                onClick={() => handleEditClick(index)}
                                className="shrink-0 w-25 max-w-full aspect-[2.33]" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
