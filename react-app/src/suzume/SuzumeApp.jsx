import Content from "./Content";
import Header from "./Header";
import MenuBar from "./MenuBar";

const items = ["トップ", "作品", "やったこと", "ブログ", "お問い合わせ"];

const SuzumeApp = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <Header items={items} />
                </div>
                <div className="m-2">
                    <div className="mx-auto pr-8">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuzumeApp;
