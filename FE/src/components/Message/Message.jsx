import React from "react";
import { MessageContent } from "./MessageContent";
import Avatar from "../../assets/img/DSC_0036-1.jpg";

const Message = ({ className, message }) => {
    return (
        <div className={`message ${className}`}>
            <img className='message-info' src={Avatar} alt='' />
            <div className='message-content'>
                {message.content.map((messageContent, i) => (
                    <MessageContent
                        key={i}
                        content={messageContent.desc}
                        time={messageContent.time}
                    />
                ))}
            </div>
        </div>
    );
};

export default Message;
