import { MessengerLogo } from "phosphor-react"

type MenuRightProps = {
    children: React.ReactNode
}


function MenuRight({ children }: MenuRightProps) {

    return (
        <div className="scroll-right fixed top-16 px-3 py-6 right-0 w-3/12 h-full overflow-y-auto">

            <div className="flex flex-col text-gray-300">
                <p className="text-gray-500 font-semibold mb-5">Aniversários</p>

                <div className="flex items-center">
                    <div className="w-10 h-10">
                        <img src="/images/presente.png" alt="" />
                    </div>
                    <p>Hoje é aniversário de <span className="text-gray-300 font-bold">edson lima</span> e outras 5 pessoas</p>
                </div>

                <span className="border-b mt-1 rounded-lg border-gray-500"></span>

                <div className="flex text-gray-500 items-center gap-2 mt-3">
                    <MessengerLogo size={28} />
                    <p>Bate-papo</p>
                </div>
                {children}
            </div>
        </div>
    )

}

export default MenuRight