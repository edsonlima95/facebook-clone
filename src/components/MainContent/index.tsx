type MainContentProps = {
    children: React.ReactNode
}

function MainContent({ children }: MainContentProps) {

    return (
        <div className="relative top-16 ml-[340px] min-w-[600px] w-[600px] pt-6">
            {children}
        </div>
    )

}

export default MainContent