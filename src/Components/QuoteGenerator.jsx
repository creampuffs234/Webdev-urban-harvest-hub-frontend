import { useState, useEffect } from 'react';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
        setLoading(true);
        setError(null);
        try {
            // Fetch from backend API
            const response = await fetch('/api/quotes');
            if (!response.ok) throw new Error('Failed to fetch from backend');
            const data = await response.json();

            // If we got a quote (even if success is false/fallback), show it
            if (data.quote) {
                setQuote({ text: data.quote, author: data.author });
                localStorage.setItem('dailyQuote', JSON.stringify({ text: data.quote, author: data.author }));
            } else {
                throw new Error('No quote data received');
            }
        } catch (err) {
            console.error("Error fetching quote:", err);
            setError("Using cached/offline quote");
           
            const cached = localStorage.getItem('dailyQuote');
            if (cached) {
                setQuote(JSON.parse(cached));
            } else {
                setQuote({
                    text: "Sustainability begins with small daily actions.",
                    author: "Urban Harvest Hub"
                });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Try to load from cache first for instant render
        const cached = localStorage.getItem('dailyQuote');
        if (cached) {
            setQuote(JSON.parse(cached));
            setLoading(false);
            // Fetch fresh in background to update cache
            fetchQuote();
        } else {
            fetchQuote();
        }
    }, []);

    return (
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-l-8 border-chelsea-cucumber shadow-lg mb-8 max-w-2xl mx-auto transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-chelsea-cucumber/10 text-chelsea-cucumber text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">Daily Inspiration</span>
                        {error && <span className="text-xs text-gray-400">({error})</span>}
                    </div>

                    {loading && !quote.text ? (
                        <div className="animate-pulse space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/4 mt-4"></div>
                        </div>
                    ) : (
                        <blockquote className="relative">
                            <p className="text-xl md:text-2xl text-gray-800 font-serif italic leading-relaxed">
                                "{quote.text}"
                            </p>
                            <footer className="mt-3 font-medium text-chelsea-cucumber flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-chelsea-cucumber"></span>
                                {quote.author || "Unknown"}
                            </footer>
                        </blockquote>
                    )}
                </div>

                <button
                    onClick={fetchQuote}
                    disabled={loading}
                    className={`p-3 rounded-full bg-gray-50 hover:bg-chelsea-cucumber/10 text-chelsea-cucumber transition-all duration-300 group flex-shrink-0 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    aria-label="Refresh quote"
                    title="Get a new quote"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transform transition-transform duration-500 ${loading ? 'animate-spin' : 'group-hover:rotate-180'}`}
                    >
                        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default QuoteGenerator;
