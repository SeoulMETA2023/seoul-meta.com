import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";

export default function HeaderBar() {
    const [active, setActive] = useState<boolean>(false);

    function headerOff() {
        setActive(false);
    }

    function headerToggle() {
        setActive(!active);
    }

    return (
        <Fragment>
            <header className={"w-full h-16 fixed bg-black-gear flex justify-center z-50"}>
                <div className={"m-3 w-full flex justify-between"}>
                    <Link to={"/"} onClick={headerOff}>
                        <img src={"image/meta_full(white).svg"} alt={"meta logo"} className={"h-full"}/>
                    </Link>
                    <svg width="400" height="400" viewBox="0 0 40 40" className={"w-fit h-full"} onClick={headerToggle}>
                        <path fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd"
                              d="M33.3327 10H6.66602V15H33.3327V10Z"></path>
                        <path fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd"
                              d="M6.66602 18.3317H33.3327V23.3317H6.66602V18.3317Z"></path>
                        <path fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd"
                              d="M6.66602 26.665H33.3327V31.665H6.66602V26.665Z"></path>
                    </svg>
                </div>
            </header>
            <div className={`w-full ${active? "h-screen" : "h-16"} pt-16 fixed bg-black-gear duration-700 ease-in-out overflow-hidden z-40`}>
                <div className={"mr-12 ml-12 mt-5 flex flex-col text-white font-noto-sans"}>
                    <Link to={"/"}
                          className={`header-list ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Who are we?
                    </Link>
                    <Link to={"/team"}
                          className={`header-list ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Team
                    </Link>
                    <Link to={"/rocket"}
                          className={`header-sublist ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Rocket
                    </Link>
                    <Link to={"/car"}
                          className={`header-sublist ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Car
                    </Link>
                    <Link to={"/rover"}
                          className={`header-sublist ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Rover
                    </Link>
                    <Link to={"/robot-arm"}
                          className={`header-sublist ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Robot Arm
                    </Link>
                    <Link to={"/guide-bot"}
                          className={`header-sublist ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Guide Bot
                    </Link>
                    <Link to={"/ball-balance"}
                          className={`header-sublist ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Ball Balance
                    </Link>
                    <Link to={"/credit"}
                          className={`header-list ${active? "opacity-100" : "opacity-0"}`}
                          onClick={headerOff}>
                        Credit
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};