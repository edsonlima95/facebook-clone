import { ChatText, Share, ThumbsUp } from "phosphor-react";

type PostProps = {
    name: string,
    hour: string,
    imgProfile: string,
    likeName: string,
    description?: string,
    imgUrl?: string,
    likeImg?: string,
    likeTotal?: string,
}

function Post({ name, hour, imgProfile, imgUrl, description, likeName, likeImg, likeTotal }: PostProps) {

    return (
        <div className="flex flex-col bg-zinc-800 rounded-lg mb-10">
            <div className="flex  items-center p-5 ">
                <div className="max-w-12 max-h-12">
                    <img src={`${imgProfile}`} className="w-12 h-12 rounded-full" alt="" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-gray-400">{name}</p>
                    <p className="text-gray-200">{hour}h</p>
                </div>
            </div>

            <div className="pb-5 pl-5">
                <p className="text-gray-200">{description}</p>
            </div>

            <img src={`${imgUrl}`} className="w-full max-h-[500px]" alt="" />

            <div className="flex gap-1 p-3 ">
                <div className="w-5 h-5">
                    <img src="/images/curtir2.svg" alt="" />
                </div>
                <div className="w-5 h-5">
                    <img src={`${likeImg}`} alt="" />
                </div>
                <p className="underline text-gray-400">{likeName} e outras {likeTotal} pessoas curtiram</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between p-3">
                <div className="flex text-gray-200 p-5 hover:bg-zinc-700 hover:rounded-lg">
                    <ThumbsUp size={24} className="mr-2" />
                    <span>curtir</span>
                </div>
                <div className="flex text-gray-200 p-5 hover:bg-zinc-700 hover:rounded-lg">
                    <ChatText size={24} className="mr-2" />
                    <span>comentar</span>
                </div>
                <div className="flex text-gray-200 p-5 hover:bg-zinc-700 hover:rounded-lg">
                    <Share size={24} className="mr-2" />
                    <span>compartilhar</span>
                </div>
            </div>

        </div>
    )

}

export default Post;