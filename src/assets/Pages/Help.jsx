import  { useState } from 'react';
import { FaSearch, FaQuestionCircle } from 'react-icons/fa';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button on the homepage and fill out the required information.",
    },
    {
      question: "How can I reset my password?",
      answer: "If you forgot your password, click on the 'Forgot Password?' link on the login page and follow the instructions.",
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team via the 'Contact Us' section in the footer of the website or by emailing support@deliveryapp.com.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and other payment methods. Check the payment section for more details.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you can track your order by clicking on the 'Track Order' option in the menu and entering your order ID.",
    },
  ];

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle user question submission
  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (userQuestion.trim() === '') return;

    // Check if the question matches any FAQ
    const matchingFaq = faqs.find(faq => 
      faq.question.toLowerCase().includes(userQuestion.toLowerCase())
    );

    // If found, add the answer to chat history; otherwise, provide a generic response
    const response = matchingFaq 
      ? matchingFaq.answer 
      : "Sorry, I couldn't find an answer to your question. Please check the FAQs or contact support.";

    setChatHistory([...chatHistory, { question: userQuestion, answer: response }]);
    setUserQuestion('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Help Center</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search FAQs..." 
            className="border border-gray-300 rounded-md py-2 px-4 w-80 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* FAQ Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-2">
              <FaQuestionCircle className="text-blue-600 mr-2" />
              <h2 className="font-semibold text-lg">{faq.question}</h2>
            </div>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Chatbot Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
        <form onSubmit={handleQuestionSubmit} className="flex mb-4">
          <input
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="Type your question..."
            className="border border-gray-300 rounded-md py-2 px-4 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 transition duration-300">
            Ask
          </button>
        </form>

        {/* Chat History */}
        <div className="max-h-60 overflow-y-auto">
          {chatHistory.map((chat, index) => (
            <div key={index} className="mb-2">
              <div className="bg-gray-200 p-2 rounded-md">
                <strong>You:</strong> {chat.question}
              </div>
              <div className="bg-blue-100 p-2 rounded-md mt-1">
                <strong>Bot:</strong> {chat.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
