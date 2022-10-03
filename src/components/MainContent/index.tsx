type MainContentProps = {
    children: React.ReactNode
}

function MainContent({ children }: MainContentProps) {

    return (
        <div className="relative top-16 lg:ml-[340px] lg:min-w-[600px] lg:w-[600px] pt-6 p-5 lg:p-14">
            {children}
        </div>
    )

}

export default MainContent