"use client";

import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion';
import type { Product } from "@/lib/sanity";
import ProductSwiper from "./ProductSwiper";

export default function Collection({title, bigText, products}: { 
    title: string, 
    bigText: boolean, 
    products: Product[] 
}) {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {bigText ?
                <motion.h2 whileInView={{scale: 1, opacity: 1, y: 0}}
                           initial={{scale: 0.95, opacity: 0, y: 50}}
                           transition={{duration: 0.3, ease: "easeOut"}}
                           className='titleFont text-4xl md:text-7xl mb-2 font-light'>{title}
                </motion.h2>
                :
                <motion.h2 whileInView={{scale: 1, opacity: 1, y: 0}}
                           initial={{scale: 0.95, opacity: 0, y: 50}}
                           transition={{duration: 0.3, ease: "easeOut"}}
                           className='titleFont text-3xl md:text-4xl  font-light'>{title}
                </motion.h2>
            }
            {bigText && <motion.p whileInView={{scale: 1, opacity: 1, y: 0}}
                                  initial={{scale: 0.95, opacity: 0, y: 50}}
                                  transition={{duration: 0.3, ease: "easeOut"}}
                                  className={'mt-4'}>Për porosi na kontaktoni në <Link
                target={'_blank'} href={'https://www.instagram.com/maica.etnike/'}>Instagram</Link></motion.p>}
            {bigText && <Link href={'/product'}>
                <button className={'btn-secondary mt-4'}>Shiko më shumë</button>
            </Link>}
            <ProductSwiper products={products} />

        </div>
    );
}
