import { BellSimpleRinging, CaretRight, DiceFive, DiceFour, GameController, Gear, HouseLine, HouseSimple, MessengerLogo, MonitorPlay, Moon, Question, SignOut, Storefront, UserCircle, UserCirclePlus, UsersThree } from "phosphor-react"
import { useState } from "react"




function Header() {

    const [show, setShow] = useState(false)

    function showProfile() {
        setShow(!show)
    }

    return (
        <>
            <header className=" bg-zinc-800 flex h-16 px-3 fixed z-10 w-full">
                <div className="w-3/12 flex items-center flex-1 lg:flex-none">
                    <p className="text-white font-bold text-xl italic">F<span className="text-lg text-blue-600">CLONE</span></p>
                    <form action="" className="hidden lg:block w-full ml-2 mr-6">
                        <input type="text" className="bg-zinc-900 px-4 h-11 outline-none border border-gray-400 focus:ring-green-500 focus:border-green-500 rounded-2xl w-full" placeholder="Pesquisar no facebook" />
                    </form>
                </div>
                <ul className="hidden w-6/12 lg:flex items-center justify-around">
                    <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><HouseLine size={28} className="text-gray-500" /></li>
                    <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><MonitorPlay size={28} className="text-gray-500" /></li>
                    <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><Storefront size={28} className="text-gray-500" /></li>
                    <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><UsersThree size={28} className="text-gray-500" /></li>
                    <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><GameController size={28} className="text-gray-500" /></li>
                </ul>
                <ul className="w-3/12 gap-2 flex items-center justify-end">
                    <li className="hidden lg:block bg-zinc-700 rounded-full p-2 hover:bg-zinc-900"><DiceFive className="text-gray-300" size={26} weight="fill" /></li>
                    <li className="hidden lg:block bg-zinc-700 rounded-full p-2 hover:bg-zinc-900"><MessengerLogo className="text-gray-300" weight="fill" size={26} /></li>
                    <li className="hidden lg:block bg-zinc-700 rounded-full p-2 hover:bg-zinc-900"><BellSimpleRinging className="text-gray-300" weight="fill" size={26} /></li>
                    <li onClick={showProfile} className="cursor-pointer w-12 h-12"><img className="rounded-full" src="/images/perfil.jpg" alt="Rounded avatar" /></li>
                </ul>
                <div className={`${show ? 'block' : 'hidden'}`}>
                    <div className="fixed top-20 right-5 p-3 rounded-lg w-[330px]  bg-zinc-800">
                        <div className="flex items-center border-b  border-gray-500">
                            <div className="w-12 h-12 mb-3">
                                <img className="rounded-full" src="/images/perfil.jpg" alt="Rounded avatar" />
                            </div>
                            <span className="text-gray-400 block ml-3 font-bold mb-3">Edson Lima</span>
                        </div>

                        <ul className="gap-2 flex flex-col mt-5 items-center ">
                            <li className="flex items-center w-full hover:bg-zinc-700  rounded-md cursor-pointer">
                                <div className="bg-zinc-700 rounded-full p-2">
                                    <Gear className="text-gray-300" size={26} weight="fill" />
                                </div>
                                <span className="ml-2 text-gray-400 font-bold  flex-1">Configurações e privacidade</span>
                                <CaretRight className="text-gray-300" size={26} />
                            </li>
                            <li className="flex items-center w-full hover:bg-zinc-700  rounded-md cursor-pointer">
                                <div className="bg-zinc-700 rounded-full p-2">
                                    <Question className="text-gray-300" size={26} weight="fill" />
                                </div>
                                <span className="ml-2 text-gray-400 font-bold flex-1">Ajuda e suporte</span>
                                <CaretRight className="text-gray-300" size={26} />
                            </li>
                            <li className="flex items-center w-full hover:bg-zinc-700  rounded-md cursor-pointer">
                                <div className="bg-zinc-700 rounded-full p-2">
                                    <Moon className="text-gray-300" size={26} weight="fill" />
                                </div>
                                <span className="ml-2 text-gray-400 font-bold flex-1">Tela e acessibilidade</span>
                                <CaretRight className="text-gray-300" size={26} />
                            </li>
                            <li className="flex items-center w-full hover:bg-zinc-700  rounded-md cursor-pointer">
                                <div className="bg-zinc-700 rounded-full p-2">
                                    <SignOut className="text-gray-300" size={26} weight="fill" />
                                </div>
                                <span className="ml-2 text-gray-400 font-bold flex-1">Sair</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )

}

export default Header