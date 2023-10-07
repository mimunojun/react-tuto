const MenuItem = ({ children }) => {
    return (
        <div
            className="text-center text-gray-500 font-bold m-0 p-3 rounded-md 
        cursor-pointer 
        hover:text-blue-500 hover:shadow-lg hover:shadow-blue-200"
        >
            {children}
        </div>
    );
};

const MenuBar = () => {
    return (
        <>
            <div className="flex flex-col">
                <MenuItem>top</MenuItem>
                <MenuItem>about</MenuItem>
                <MenuItem>works</MenuItem>
                <MenuItem>inquery</MenuItem>
            </div>
        </>
    );
};

export default MenuBar;
