import { MessengerLogo } from "phosphor-react"

type MenuRightProps = {
    children: React.ReactNode
}


function MenuRight({ children }: MenuRightProps) {

    return (
        <div className="fixed top-16 px-3 py-6 right-0 w-3/12 h-full overflow-y-auto">

            <div className="flex flex-col text-gray-300">
                <p className="text-gray-500 font-semibold mb-5">Patrocinado</p>

                <span className="border rounded-lg border-gray-400"></span>

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