import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "Success is not in what you have, but who you are.",
    "Dream bigger. Do bigger.",
    "You don’t need to see the whole staircase, just take the first step."
];

const QuoteBox = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        getNewQuote();
    }, []);

    const getNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl max-w-xl text-center">
            <p className="text-lg italic mb-6">“{quote}”</p>
            <button
                onClick={getNewQuote}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded transition"
            >
                New Quote
            </button>
        </div>
    );
};

export default QuoteBox;