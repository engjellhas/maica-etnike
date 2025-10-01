import Collection from "@/components/collection";
import HeroV2 from "@/components/heroV2";
import TopSwiper from "@/components/topSwiper";
import { getProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const products = await getProducts();

    return (
        <div className={'flex flex-col '}>
            <HeroV2 />

            <Collection title={'KOLEKSIONI KUNDËR SERBISË'} bigText={true} products={products.slice(0, 6)} />
            {/* Match Countdown Section */}
            <section className="bg-ultraBlack py-12 md:py-32 border-b-4 border-albanianRed/50">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    {/* Main Title - Sharper, more impactful */}
                    <h2 className="text-5xl md:text-7xl font-normal titleFont text-white tracking-tighter mb-4">
                        KRENARIA SHQIPTARE
                    </h2>

                    {/* Separator Line */}
                    <div className="w-16 h-1.5 bg-albanianRed mx-auto mb-12 transform -skew-x-12"></div>

                    {/* Message Blocks - Stronger hierarchy and color accents */}
                    <div className="space-y-8">

                        {/* Most Powerful Line (Red/Primary Accent) */}
                        <p className="text-2xl md:text-3xl font-bold text-albanianRed tracking-wide uppercase">
                            Mbajmë kujtimin e 1999-së gjallë. Çdo fije është e fryrë me krenarinë dhe zemërimin tonë të shenjtë.
                        </p>

                        {/* Supporting Message (White/Secondary) */}
                        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
                            Simbolet tona nuk janë thjesht dizajn - janë një **mesazh i prerë** për botën se ne nuk harrojmë dhe nuk falim.
                        </p>

                        {/* Qualifier/Call-to-Identity (Subtle) */}
                        <p className="text-lg text-gray-500 italic pt-4">
                            Vetëm për ata që e kuptojnë vërtetësinë. Për ata që mbajnë flakën e krenarisë shqiptare.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: Ndeshja Po Afrohet (Action Callout) --- */}
            {/* The call to action is now a full-width banner for immediate attention */}
            <TopSwiper title="Serbi, Serbi Q*fsha Motren" />
            <section className="bg-albanianRed/5 py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="bg-albanianRed/10 border border-albanianRed/40 rounded-xl p-6 md:p-10 max-w-xl mx-auto shadow-xl">

                        <h3 className="text-3xl md:text-4xl font-extrabold text-albanianRed mb-4 uppercase tracking-wider">
                            Ndeshja Po Afrohet
                        </h3>

                        <p className="text-xl text-white font-bold mb-4">
                            Shqipëria vs Serbia
                        </p>

                        <p className="text-lg text-gray-300 mb-8">
                            Koha për t&apos;u treguar kush jemi ka ardhur. Mbulo krenarinë shqiptare!
                        </p>

                        <Link href="/product" passHref>
                            <button
                                className="w-full md:w-auto px-10 py-3 bg-albanianRed text-white font-bold uppercase tracking-widest rounded-lg transition duration-300 hover:bg-albanianRed/80 hover:shadow-2xl shadow-albanianRed/50 transform hover:scale-[1.02]"
                            >
                                Blej Tani - MBULO KRENARINË
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <TopSwiper title="Serbi, Serbi Q*fsha Motren" />

            {/* --- SECTION 3: Why We Fight (Image & Detailed Explanation) --- */}
            <section className="relative bg-ultraBlack py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-normal titleFont text-white tracking-tight mb-4">
                            Pse <span className="text-albanianRed">LUFTOJMË</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            <b>1999</b> nuk është thjesht një vit. Është një betim. Një premtim se nuk do ta harrojmë kurrë atë që kemi fituar.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left - Text Blocks */}
                        <div className="space-y-12 order-2 lg:order-1">

                            {/* Feature 1 */}
                            <div className="p-6 border-l-4 border-albanianRed bg-white/5 backdrop-blur-sm rounded-lg shadow-lg">
                                <h3 className="text-2xl md:text-3xl font-bold text-albanianRed mb-3">
                                    Kujtimi është i Shenjtë
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    Çdo copë veshjeje që bëjmë është një **kujtim i gjallë** i atyre që humbëm. Çdo simbol i Shqiponjës është një betim se nuk do të harrojmë kurrë.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="p-6 border-l-4 border-albanianGold bg-white/5 backdrop-blur-sm rounded-lg shadow-lg">
                                <h3 className="text-2xl md:text-3xl font-bold text-albanianGold mb-3">
                                    Krenaria është e Pavdekshme
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    Mund të na marrin gjithçka, por nuk mund të na marrin dot krenarinë. Ajo jeton e palëkundur në çdo fije që veshim dhe në çdo zë që brohorasim.
                                </p>
                            </div>

                        </div>

                        {/* Right - Image (Now with a more dramatic look) */}
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-2xl shadow-albanianRed/30 transform transition duration-500 hover:shadow-albanianRed/60">
                                <Image
                                    src="/images/motren.png"
                                    alt="Krenaria Shqiptare"
                                    fill
                                    className="object-cover transform scale-100 hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
                                />
                                {/* Stronger Overlay for drama and text legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <TopSwiper title="Serbi, Serbi Q*fsha Motren" />

            {/* Collection Preview */}

            {/* Call to Action Section */}
            <section className="bg-ultraBlack py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-thin text-white mb-8">
                        Bashkohu me Ne
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Mos u harro kurrë. Mos u harro kurrë. Mos u harro kurrë.
                    </p>

                    <div className="flex flex-col items-center sm:flex-row gap-6 justify-center">
                        <Link href="/product">
                            <button className="btn-primary text-lg px-12 py-4">
                                Shiko Koleksionin
                            </button>
                        </Link>
                        <Link href="/product">
                            <button className="btn-secondary text-lg px-12 py-4">
                                Blej Tani
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
