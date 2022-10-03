import { ImageSquare, Smiley, VideoCamera } from "phosphor-react"



function PostWriter() {

    return (
        <div className="bg-zinc-800 rounded-lg mb-4 p-5">
            <div className="flex items-center">
                <img className="rounded-full" src="/images/perfil.jpg" alt="Rounded avatar" width={40} height={40} />
                <form action="" className="w-full ml-2 mr-6">
                    <input type="text" className="bg-zinc-900 outline-none border border-gray-400 focus:ring-green-500 focus:border-green-500  px-4 h-11 rounded-2xl w-full" placeholder="No que você está pensando, Edson ?" />
                </form>
            </div>
            <div className="flex mt-5 justify-between">
                <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                    <VideoCamera size={32} className="text-rose-600" />
                    <span className="text-gray-300 font-bold blocl ml-3">Video ao vivos</span>
                </div>
                <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                    <ImageSquare size={32} className="text-green-600" />
                    <span className="text-gray-300 font-bold blocl ml-3">Foto/Video</span>
                </div>
                <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                    <Smiley size={32} className="text-yellow-600" />
                    <span className="text-gray-300 font-bold blocl ml-3">Sentimento/Atividade</span>
                </div>
            </div>
        </div>
    )

}

export default PostWriter