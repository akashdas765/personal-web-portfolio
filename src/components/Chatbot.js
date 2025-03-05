import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState([]);  // Stores chat messages
    const [isOpen, setIsOpen] = useState(false);
    const chatRef = useRef(null); // For auto-scrolling

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const askChatbot = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        // Add User's Message
        setMessages(prev => [...prev, { text: query, sender: "user" }]);
        setQuery("");

        try {
            let res = await fetch(`http://127.0.0.1:8000/ask?query=${encodeURIComponent(query)}`);
            let data = await res.json();

            // Add Bot's Response
            setMessages(prev => [...prev, { text: data.answer, sender: "bot" }]);
        } catch (error) {
            console.error("❌ Fetch error:", error);
            setMessages(prev => [...prev, { text: "Oops! Something went wrong. Try again later.", sender: "bot" }]);
        }
    };

    return (
        <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
            <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
                <span>Chat with Me</span>
                <button className="close-btn">{isOpen ? "✖" : "💬"}</button>
            </div>

            {isOpen && (
                <div className="chatbot-body">
                    <div className="chat-window">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={chatRef}></div> {/* Auto-scroll to last message */}
                    </div>

                    <form onSubmit={askChatbot} className="chat-input">
                        <input 
                            type="text" 
                            placeholder="Type a message..."
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;