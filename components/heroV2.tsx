'use client'
import { motion, } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export default function HeroV2() {
    return (
        <div className="relative bg-ultraBlack">
            <div className="max-w-7xl mx-auto md:px-6 pb-0 md:py-0">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-[5/2] relative overflow-hidden bg-[#e03a39]">
                        <Image
                            src={'/images/maica-etnike-scene.jpg'}
                            alt={'Albanian Ultra Collection'}
                            fill
                            className={'object-cover'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-albanianRed text-white px-8 py-4">
                        <div className="text-sm font-bold tracking-widest uppercase">
                            KUNDËR SERBISË
                        </div>
                    </div>
                </motion.div>


                <div className="grid pt-16 pb-8 px-6 grid-cols-1 gap-16 lg:gap-24 items-center md:min-h-[45vh]">
                    <div className="space-y-4">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <p className="text-2xl  font-extralight italic leading-relaxed">
                                1999 nuk harrohet kurrë.
                            </p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight titleFont text-white leading-none md:flex gap-12">
                                <span className="block text-albanianRed">SERBI, SERBI</span>
                                <span className="block font-extralight ">Q*fsha Motren</span>
                            </h1>

                            <div className="space-y-4 max-w-lg">

                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Koha për t&apos;u treguar kush jemi ka ardhur!
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <Link href={'/product'}>
                                <button className="btn-primary">
                                    blej tani
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
