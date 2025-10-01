'use client'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Product } from '@/utilies/product';

interface SearchBarProps {
    placeholder?: string;
    className?: string;
    showResults?: boolean;
    onSearch?: (query: string) => void;
}

export default function SearchBar({ 
    placeholder = "Kërko produkte...", 
    className = "",
    showResults = true,
    onSearch
}: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Close search when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Search function
    const handleSearch = async (searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
            const data = await response.json();
            setResults(data.products || []);
        } catch (error) {
            console.error('Search error:', error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle input change with debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (query.trim()) {
                handleSearch(query);
                setIsOpen(true);
            } else {
                setResults([]);
                setIsOpen(false);
            }
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [query]);

    // Handle search submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            if (onSearch) {
                onSearch(query);
            } else {
                router.push(`/search?q=${encodeURIComponent(query)}`);
            }
            setIsOpen(false);
        }
    };

    // Handle result click
    const handleResultClick = (productSlug: string) => {
        router.push(`/product/${productSlug}`);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <div ref={searchRef} className={`relative ${className}`}>
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => query.trim() && setIsOpen(true)}
                        placeholder={placeholder}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 pl-10 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-albanianRed/50 focus:border-albanianRed/50 transition-all duration-200"
                    />
                    
                    {/* Search Icon */}
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    
                    {/* Clear Button */}
                    {query && (
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('');
                                setIsOpen(false);
                                setResults([]);
                                inputRef.current?.focus();
                            }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                            <XMarkIcon className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </form>

            {/* Search Results Dropdown */}
            {showResults && isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-ultraBlack border border-white/20 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
                    {isLoading ? (
                        <div className="p-4 text-center text-gray-400">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-albanianRed mx-auto mb-2"></div>
                            Kërkohet...
                        </div>
                    ) : results.length > 0 ? (
                        <div className="py-2">
                            {results.map((product, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleResultClick(product.slug)}
                                    className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors border-b border-white/10 last:border-b-0"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="relative flex-shrink-0 w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                                            <Image
                                                src={product.images?.[0] || '/images/placeholder.jpg'}
                                                alt={product.name}
                                                fill
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white font-medium truncate">
                                                {product.name}
                                            </p>
                                            <p className="text-gray-400 text-sm truncate">
                                                {product.description?.substring(0, 50)}...
                                            </p>
                                            <p className="text-albanianRed font-bold text-sm">
                                                {product.price}€
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                            
                            {/* View All Results */}
                            <div className="border-t border-white/10">
                                <Link
                                    href={`/search?q=${encodeURIComponent(query)}`}
                                    className="block px-4 py-3 text-center text-albanianRed hover:bg-white/5 transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Shiko të gjitha rezultatet ({results.length})
                                </Link>
                            </div>
                        </div>
                    ) : query.trim() ? (
                        <div className="p-4 text-center text-gray-400">
                            <p>Nuk u gjet asnjë produkt për &quot;{query}&quot;</p>
                            <p className="text-sm mt-1">Provo me fjalë të tjera</p>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}
