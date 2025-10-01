import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-ultraBlack border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-thin titleFont text-white tracking-wider">
                                Maica Etnike
                            </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Për ata që mbajnë krenarinë shqiptare në zemër dhe nuk harrojnë 1999-në.
                        </p>
                        <div className="flex space-x-4">
                            {/* <Link href="https://www.facebook.com/profile.php?id=61572725369869" target="_blank" className="text-white/50 hover:text-albanianRed transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </Link> */}
                            <Link href="https://www.instagram.com/maica.etnike/" target="_blank" className="text-white/50 hover:text-albanianRed transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            {/* <Link href="https://www.tiktok.com/@crafty.kosova" target="_blank" className="text-white/50 hover:text-albanianRed transition-colors">
                                <span className="sr-only">TikTok</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                                </svg>
                            </Link> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-white uppercase tracking-wider">
                            Lidhje të Shpejta
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/product" className="text-gray-400 hover:text-albanianRed transition-colors">
                                    Koleksioni Kundër Serbisë
                                </Link>
                            </li>
                            <li>
                                <Link href="/product" className="text-gray-400 hover:text-albanianRed transition-colors">
                                    Krenaria 1999
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="text-gray-400 hover:text-albanianRed transition-colors">
                                    Shporta
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mission Statement */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-white uppercase tracking-wider">
                            Misioni Ynë
                        </h4>
                        <div className="space-y-4">
                            <p className="text-gray-400 leading-relaxed">
                                1999 nuk harrohet kurrë. Mbajmë kujtimin gjallë përmes simboleve dhe veshjeve tona.
                            </p>
                            <div className="w-16 h-px bg-gradient-to-r from-albanianRed to-albanianGold"></div>
                            <p className="text-sm text-gray-500">
                            &apos;Krenaria shqiptare është e pavdekshme&apos;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                © 2024 Maica Etnike. Të gjitha të drejtat e rezervuara.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Mbulo krenarinë shqiptare - 1999 nuk harrohet kurrë.
                            </p>
                        </div>
                        
                        <div className="flex items-center space-x-6">
                            <Link href="https://www.aligator.xyz/" target="_blank" className="text-gray-500 hover:text-albanianRed transition-colors text-sm">
                                Nga aligator.xyz 🐊
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
