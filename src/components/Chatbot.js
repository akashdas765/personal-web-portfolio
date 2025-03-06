import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Chatbot.css";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const askChatbot = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { text: query, sender: "user" }]);
    setQuery("");

    try {
      //let res = await fetch(`https://portfolio-chatbot-30wi.onrender.com/ask?query=${encodeURIComponent(query)}`);
      let res = await fetch(`http://127.0.0.1:8000/ask?query=${encodeURIComponent(query)}`);
      let data = await res.json();

      setMessages((prev) => [...prev, { text: data.answer, sender: "bot" }]);
    } catch (error) {
      console.error("❌ Fetch error:", error);
      setMessages((prev) => [...prev, { text: "Oops! Something went wrong. Try again later.", sender: "bot" }]);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
        <span>Chat with Me</span>
        <button className="close-btn">{isOpen ? "✖" : "💬"}</button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-body"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="chat-window">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`chat-message ${msg.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={chatRef}></div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;