import { useState } from "react";

import "./ChatInput.css";


function ChatInput({sendMessage}) {


const [message,setMessage]=useState("");



function handleSend(){


sendMessage(message);

setMessage("");

}


return (

<div className="chat-input">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask farming question..."

/>



<button

onClick={handleSend}

>

➤

</button>



</div>

);


}


export default ChatInput;