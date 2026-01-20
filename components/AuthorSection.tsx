import Image from "next/image";

export default function AuthorSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto grid max-w-[1920px] grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* LEFT */}
                <div className="relative">
                    {/* Background */}
                    <Image
                        src="/images/author/bg.png"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* RuTube video */}
                    <div className="absolute left-1/2 top-1/2 w-[758px] max-w-[90%] -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-full aspect-video bg-black">
                            <iframe
                                src="https://rutube.ru/play/embed/9d91f48ce398620a3e3acb2ae8432884"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 h-full w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative flex flex-col px-8 py-10 lg:px-12">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="pt-4 pb-4 border-t-2 border-b-2 border-black">
                            <h2 className="text-4xl font-helvetica-oblique">
                                слово автора
                            </h2>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="max-w-[800px] text-xl font-helvetica-regular">
                        <p>
                            «EKAT PEOPLE CLUB» — мой магистерский проект. Он вырос из личного опыта — наблюдений, разговоров, прогулок и попыток понять, почему в какой-то момент город, в котором ты живёшь, перестаёт чувствоваться как «свой».
                            А от другого города, например, наоборот — срывает крышу.
                        </p>
                        <br />
                        <p>
                            Работая с визуальной средой и дизайном, я замечала одну вещь:
                            город очень часто показывают как набор привычных образов. Но за всем этим почти не «слышно» людей: их повседневных маршрутов, воспоминаний, переживаний. Того, что на самом деле формирует ощущение места. Со временем мне стало интересно, как проживается город. Куда люди идут, когда им хорошо или плохо. Какие места становятся для них точками опоры. Чтобы лучше узнать себя, я обратилась к другим. Так появился интерес к теме эмоциональной связи
                            с городом и к тому, как эту связь можно не просто зафиксировать, а перевести
                            в форму — визуальную, текстовую, событийную. Я начала воспринимать город как живую систему, где каждый человек является носителем уникального опыта, но этот опыт редко становится видимым и разделённым.
                        </p>
                        <br />
                        <p>
                            Данный проект — это попытка создать пространство, в котором личные городские истории становятся частью общего поля в форме живого человеческого рассказа. Через книги, маршруты, карты, встречи и совместные переживания. Для меня важно, чтобы человек мог не просто узнать новое место, а ощутить причастность — к проекту, к другим людям и к городу в целом.
                            Этот проект — про внимание. К городу, к людям и к тем чувствам, из которых складывается наше ощущение «это мой город».
                        </p>
                    </div>

                    {/* Author */}
                    <div className="mt-auto pt-12 flex items-start">
                        <div className="text-xl font-helvetica-regular leading-[1.4]">
                            <p>
                                Придумала, оформила и нарисовала для вас
                            </p>
                        </div>
                    </div>
                    <div className="mt-auto pt-12 flex items-center gap-6">
                        <Image
                            src="/images/author/face.png"
                            alt="Автор проекта"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />

                        <div className="text-xl font-helvetica-regular leading-[1.4]">
                            <p>
                                Серажитдинова Регина,<br />
                                креативный директор проекта «EKAT ПИПЛ КЛАБ»
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
