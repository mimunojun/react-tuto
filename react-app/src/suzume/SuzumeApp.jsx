import Content from "./Content";
import Header from "./Header";
import MenuBar from "./MenuBar";
const SuzumeApp = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <Header />
                </div>
                <div className="flex m-2">
                    <div className="basis-1/5">
                        <MenuBar />
                    </div>
                    <div className="basis-4/5 pr-8">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuzumeApp;
