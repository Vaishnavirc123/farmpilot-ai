function ChatBubble({ sender, text, image }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl shadow ${
          isUser ? "bg-green-200" : "bg-white"
        }`}
      >
        {image && (
          <img
            src={image}
            alt="Uploaded"
            className="rounded-lg mb-2 max-h-60"
          />
        )}

        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

export default ChatBubble;