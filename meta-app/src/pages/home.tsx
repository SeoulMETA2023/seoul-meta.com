import React, {useEffect} from 'react';
import {useTitle} from "../utils/title";

export default function Home() {
    const [, setTitle] = useTitle()
    const date = new Date()

    useEffect(() => {
        setTitle("Home | META")
    }, [setTitle]);

    return (
        <div>
            <section className={"h-150 xs:h-160 bg-black-gear overflow-hidden relative flex justify-center"}>
                <img className={"w-screen absolute bottom-0 translate-y-1/2 animate-gear-spin"}
                     src={"image/meta_icon(white).svg"}
                     alt={"meta gear"}/>
                <div className={"m-10 w-9/12 h-1/3"}>
                    <div className={"w-full"}>
                        <div className={"text-4xl xs:text-5xl text-white font-open-sans"}>
                            THE FREE SPACE
                        </div>
                        <div className={"text-4xl xs:text-5xl text-white font-open-sans"}>
                            FOR CREATION.
                        </div>
                        <div className={"mt-5 text-xs xs:text-sm text-gray-dark font-noto-sans break-keep"}>
                            META는 공학을 향한 열정과 창의성으로 함께 뛰어난 아이디어를 현실로 구현하고,
                            새로운 기술과 경험을 서로 공유합니다.
                        </div>
                        <div className={"w-full mt-5 xs:mt-10 flex justify-end"}>
                            <button
                                className={"px-5 py-2 w-fit h-fit rounded-full bg-white flex items-center font-noto-sans font-bold"}>
                                부스 보러 가기
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"h-140 p-7 grid grid-rows-12 gap-2 bg-white"}>
                <div className={"row-span-6 flex items-center"}>
                    <img className={"w-full rounded-xl"} src={"image/family2023.jpg"} alt={"2023 META family"}/>
                </div>
                <div className={"w-full row-span-6 flex flex-col gap-4"}>
                    <h3 className={"font-noto-sans text-3xl font-bold"}>
                        저희는 META 입니다
                    </h3>
                    <p className={"font-noto-sans text-base break-keep"}>
                        4차 산업혁명을 이끄는 여러 기술들을 제작하고, 여러 공학 학문에 대해 탐구하는 동아리입니다.
                        미리 정해진 프로젝트를 진행하는 것이 아닌 자신이 원하는 작품을 팀원들과 제작합니다.
                        원한다면 학교의 안전을 위해 미사일을 만들 수도 있겠네요.
                    </p>
                </div>
            </section>
            <section className={"h-140 p-7 grid grid-rows-12 gap-2 bg-gray-light"}>
                <div className={"row-span-6 flex items-center"}>
                    <img className={"w-full rounded-xl"} src={"image/family2023.jpg"} alt={"2023 META family"}/>
                </div>
                <div className={"w-full row-span-6 flex flex-col gap-4"}>
                    <h3 className={"font-noto-sans text-3xl font-bold"}>
                        짧은 역사, 그러나 많은 수상
                    </h3>
                    <p className={"font-noto-sans text-base break-keep"}>
                        META는 아직 {date.getFullYear() - 2013}년밖에 되지 않은 동아리임에도 불구하고
                        경희제에서 매년 우수한 성적을 거두었으며,
                        올해 또한 여러 흥미롭고 훌륭한 프로젝트들이 다수 준비되어있습니다.
                    </p>
                    <a href={"https://google.com"} className={"text-blue-sky font-noto-sans after:content-['>'] after:ml-1.5"}>바로 가기</a>
                </div>
            </section>
            <section className={"h-140 p-7 grid grid-rows-12 gap-2 bg-white"}>
                <div className={"row-span-6 flex items-center"}>
                    <img className={"w-full rounded-xl"} src={"image/family2023.jpg"} alt={"2023 META family"}/>
                </div>
                <div className={"w-full row-span-6 flex flex-col gap-4"}>
                    <h3 className={"font-noto-sans text-3xl font-bold"}>
                        짧은 역사, 그러나 많은 수상
                    </h3>
                    <p className={"font-noto-sans text-base break-keep"}>
                        META는 아직 {date.getFullYear() - 2013}년밖에 되지 않은 동아리임에도 불구하고
                        경희제에서 매년 우수한 성적을 거두었으며,
                        올해 또한 여러 흥미롭고 훌륭한 프로젝트들이 다수 준비되어있습니다.
                    </p>
                    <a href={"https://google.com"} className={"text-blue-sky font-noto-sans after:content-['>'] after:ml-1.5"}>바로 가기</a>
                </div>
            </section>
            <section className={"h-140 p-7 grid grid-rows-12 gap-2 bg-gray-light"}>
                <div className={"row-span-6 flex items-center"}>
                    <img className={"w-full rounded-xl"} src={"image/family2023.jpg"} alt={"2023 META family"}/>
                </div>
                <div className={"w-full row-span-6 flex flex-col gap-4"}>
                    <h3 className={"font-noto-sans text-3xl font-bold"}>
                        저희 부스를 찾고 계신가요?
                    </h3>
                    <p className={"font-noto-sans text-base break-keep"}>
                        META는 아직 {date.getFullYear() - 2013}년밖에 되지 않은 동아리임에도 불구하고
                        경희제에서 매년 우수한 성적을 거두었으며,
                        올해 또한 여러 흥미롭고 훌륭한 프로젝트들이 다수 준비되어있습니다.
                    </p>
                    <a href={"https://google.com"} className={"text-blue-sky font-noto-sans after:content-['>'] after:ml-1.5"}>바로 가기</a>
                </div>
            </section>
        </div>
    );
}