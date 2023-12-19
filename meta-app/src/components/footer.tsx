import React from 'react';

export default function Footer() {
    return (
        <footer className={"h-40 bg-black-gear flex justify-center items-center"}>
            <div className={"flex flex-col items-center"}>
                <img src={"image/seoulhs.png"} alt={"seoulhs logo"} className={"w-10 filter grayscale"}/>
                <div className={"text-center text-gray-dim font-noto-sans font-bold text-sm"}>
                    서울고등학교 기계공학부
                    <br/>
                    META
                </div>
            </div>
        </footer>
    );
}