export function List({ list, handleDelete, toggleIsDone, handleEdit }) {
    return (
        <ul>
            {
                list.map((item, i) => {
                    return (
                        <li key={i} className="flex justify-between items-center">
                            <span className=
                             {item.isDone ? 'line-through text-green-500' : 'text-red-700'}
                             >{item.todo}</span>
                            <div className="flex gap-x-2">
                                <svg onClick={() => handleDelete(i)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                {
                                    item.isDone ?
                                    <svg onClick={() => toggleIsDone(i)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                    :
                                    <svg onClick={() => toggleIsDone(i)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                }
                                <svg onClick={() => handleEdit(i)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List
