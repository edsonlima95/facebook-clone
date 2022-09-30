import { ChatText, Share, ThumbsUp } from "phosphor-react";

function PostItem() {

    return (
        <div className="flex flex-col bg-zinc-700 rounded-lg mb-10">
            <div className="flex items-center p-5 ">
                <div className="w-12 h-12">
                    <img src="/images/perfil.jpg" className="rounded-full" alt="" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-gray-400">Edson Lima</p>
                    <p className="text-gray-200">22h</p>
                </div>
            </div>

            <img src="/images/perfil.jpg" alt="" />

            <div>
                
            </div>

            <div className="flex justify-between p-3">
                <div className="flex text-gray-200 p-5 hover:bg-gray-600 hover:rounded-lg">
                    <ThumbsUp size={24}className="mr-2" />
                    <span>curtir</span>
                </div>
                <div className="flex text-gray-200 p-5 hover:bg-gray-600 hover:rounded-lg">
                    <ChatText size={24}className="mr-2" />
                    <span>comentar</span>
                </div>
                <div className="flex text-gray-200 p-5 hover:bg-gray-600 hover:rounded-lg">
                    <Share size={24} className="mr-2"/>
                    <span>compartilhar</span>
                </div>
            </div>

        </div>
    )

}

export default PostItem;