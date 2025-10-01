import CartDrawer from "@/components/cart/CartDrawer";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { CartProvider } from "@/contexts/CartContext";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import "./globals.css";

export const metadata: Metadata = {
    title: "Maica Etnike",
    description: "Hijesho Shtëpinë: Shfleto koleksionin tonë të dekoreve unike të punuara me dorë",
};
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'], // Specify the weights you want to include
    style: ['normal', 'italic'] // Optionally specify styles
});
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" className={poppins.className}>
            <head>
                {/* Meta Pixel Code */}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1266779235128961'); // Updated Meta Pixel ID
        fbq('track', 'PageView');
        
        // Enhanced tracking functions
        window.trackProductView = function(productId, productName, price) {
          fbq('track', 'ViewContent', {
            content_ids: [productId],
            content_name: productName,
            content_type: 'product',
            value: price,
            currency: 'EUR'
          });
        };
        
        window.trackAddToCart = function(productId, productName, price) {
          fbq('track', 'AddToCart', {
            content_ids: [productId],
            content_name: productName,
            content_type: 'product',
            value: price,
            currency: 'EUR'
          });
        };
        
        window.trackPurchase = function(productIds, totalAmount) {
          fbq('track', 'Purchase', {
            content_ids: productIds,
            content_type: 'product',
            value: totalAmount,
            currency: 'EUR'
          });
        };
        
        window.trackInitiateCheckout = function(productIds, totalAmount) {
          fbq('track', 'InitiateCheckout', {
            content_ids: productIds,
            content_type: 'product',
            value: totalAmount,
            currency: 'EUR'
          });
        };
        
        window.trackContact = function() {
          fbq('track', 'Contact');
        };
        
        window.trackCustomEvent = function(eventName, parameters) {
          fbq('track', eventName, parameters);
        };
      `}
                </Script>
                <noscript>
                    <Image
                        height={1}
                        width={1}
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1266779235128961&ev=PageView&noscript=1"
                        alt=""
                        unoptimized
                    />
                </noscript>
            </head>
            <body suppressHydrationWarning>
                <CartProvider>
                    <Header />
                    <CartDrawer />
                    <div className="fixed bottom-6 right-6 z-30 flex gap-4">
                        <Link
                            href="https://www.instagram.com/maica.etnike/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-gray-100 text-white p-4 rounded-full shadow-lg"
                            aria-label="Chat on Instagram"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" // shkurtuar për të mos mbushë shumë vend
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
