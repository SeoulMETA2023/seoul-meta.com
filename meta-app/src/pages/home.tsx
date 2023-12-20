import React from 'react';

export default function Home() {
    return (
        <div className={"h-150 mobile:h-160 bg-black-gear overflow-hidden relative flex justify-center"}>
            <img className={"w-screen absolute bottom-0 translate-y-1/2 animate-gear-spin"}
                 src={"image/meta_icon(white).svg"}
                 alt={"meta gear"}/>
            <div className={"m-6 w-9/12 h-1/3"}>
                <div className={"w-full"}>
                    <div className={"text-4xl mobileS:text-5xl text-white font-open-sans"}>
                        THE FREE SPACE
                    </div>
                    <div className={"text-4xl mobileS:text-5xl text-white font-open-sans"}>
                        FOR CREATION.
                    </div>
                    <div className={"mt-5 text-xs mobileS:text-sm text-gray-light font-noto-sans"}>
                        META는 공학을 향한 열정과 창의성으로 자유롭게 프로젝트를 진행합니다.
                        함께 뛰어난 아이디어를 현실로 구현하고, 새로운 기술과 경험을 서로 공유합니다.
                    </div>
                    <div className={"w-full mt-5 mobile:mt-10 flex justify-end"}>
                        <button className={"p-5 w-fit h-10 rounded-full bg-white flex items-center font-noto-sans font-bold"}>
                            부스 보러 가기 &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}