
type StoreItemProps = {
    imagePerfil: string,
    imageUrl: string,
    title: string,
}

function StoreItem({ title, imageUrl, imagePerfil }: StoreItemProps) {

    return (
        <div className="relative flex w-[130px] h-[200px]">
            <div className="absolute w-full h-full bg-[#00000059] rounded-lg"></div>
            <img src={`${imageUrl}`} className="rounded-lg" alt="" />
            <div className="absolute top-2 left-2 w-10 h-10 border-4 border-blue-500 rounded-full">
                <img src={`${imagePerfil}`} className="rounded-full" alt="" />
            </div>
            <div className="absolute bottom-0 left-2 p-1">
                <p className="text-white">{title}</p>
            </div>
        </div>
    )

}

export default StoreItem