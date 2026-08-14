import "./MessageBubble.css";


function MessageBubble({

sender,

message

}) {


return (

<div

className={
sender==="ai"
?
"ai-message"
:
"farmer-message"
}

>


{message}


</div>

);


}


export default MessageBubble;