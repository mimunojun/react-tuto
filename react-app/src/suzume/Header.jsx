const Header = ({ items }) => {
    return (
        <>
            <div className="flex border-b border-gray-300">
                <div className="basis-1/2 flex">
                    <div className=" overflow-hidden h-20 scale-95 hover:scale-100">
                        <img
                            src="./y2klogo.png"
                            className="h-full m-2 cursor-pointer "
                        ></img>
                    </div>
                </div>
                <div className="basis-1/2 flex justify-end">
                    {items.map((item) => {
                        return (
                            <div className="basis-32 text-gray-700 font-bold text-center py-8 ">
                                <span className="hover:text-blue-500 hover:cursor-pointer">
                                    {item}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Header;
