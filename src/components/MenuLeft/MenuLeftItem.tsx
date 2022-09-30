
type MenuLeftItemProps = {
    title: string,
    imgUrl: string,
}

function MenuLeftItem({title, imgUrl}: MenuLeftItemProps) {

    return (
        <div className="flex items-center mb-3 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
            <div className="w-10 h-10 mr-2">
                <img className="rounded-full" src={`${imgUrl}`} alt="" />
            </div>
            <p>{title}</p>
        </div>
    )

}

export default MenuLeftItem