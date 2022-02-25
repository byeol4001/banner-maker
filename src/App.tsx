import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import { MainWrap } from "./style/Styles";


function App() {
    return (
        <div className="App">
            <MainWrap>
                <Main />
                <Footer />
            </MainWrap>
        </div>
    );
}

export default App;
