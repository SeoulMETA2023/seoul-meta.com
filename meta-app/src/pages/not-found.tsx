import React, {Fragment} from 'react';
import HeaderBar from "../components/header-bar";
import Footer from "../components/footer";

export default function NotFound() {
    return (
        <Fragment>
            <HeaderBar/>
            <div className={"mt-16 h-160 flex flex-col items-center"}>
                <div className={"mt-10 h-fit font-open-sans text-8xl tracking-widest"}>
                    404
                </div>
                <div className={"mt-5 font-noto-sans font-bold"}>
                    Page Not Found...
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};