
type StoreItemProps = {
    imagePerfil: string,
    imageUrl: string,
    title: string,
}

function StoreItem({ title, imageUrl, imagePerfil }: StoreItemProps) {

    return (
        <div className="relative group flex w-[130px] h-[170px]">
           
            <div className="absolute  w-full h-full bg-[#00000015] group-hover:bg-[#00000059] rounded-lg"></div>
           
            <img src={`${imageUrl}`} className="group-hover:scale-105 duration-700 rounded-lg" alt="" />
           
            <div className="absolute top-2 left-2 w-10 border-4 border-blue-500 rounded-full">
                <img src={`${imagePerfil}`} className="w-10 h-8 rounded-full" alt="" />
            </div>
           
            <div className="absolute bottom-0 left-2 p-1">
                <p className="text-white">{title}</p>
            </div>
        </div>
    )

}

export default StoreItem