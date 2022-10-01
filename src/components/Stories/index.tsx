
type StoreProps = {
    children: React.ReactNode
}

function Store({ children }: StoreProps) {

    return (
        <div className="flex flex-col gap-2 bg-zinc-800 rounded-lg pt-3 mb-4">
            <ul className="flex text-center justify-around border-b mb-3 font-bold border-gray-500 pt-3 text-gray-400">
                <li className="border-b-2 border-blue-500 h-[30px] w-[90px]">
                    <span className="text-blue-600">
                        Stories
                    </span>
                </li>
                <li>Reels</li>
                <li>Salas</li>
            </ul>
            <div className="flex gap-2 justify-between p-5">
                {children}
            </div>
        </div>
    )

}

export default Store