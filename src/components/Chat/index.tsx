
type ChatProps = {
    title: string,
    imgUrl: string,
}


function Chat({ title, imgUrl }: ChatProps) {

    return (
        <div className="flex items-center relative z-20 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
            <div>
                <img className="w-10 h-10 rounded-full" src={`${imgUrl}`} alt="" />
                <span className="bottom-[4px] left-[2.3rem] absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <p className='ml-3'>{title}</p>
        </div>
    )

}

export default Chat