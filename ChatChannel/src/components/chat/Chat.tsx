import { useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessage } from "./ChatMessage";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { Channel } from "../navigation/channels/Channel";

const useContainerStyles = makeStyles({
      container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            justifySelf: "center",
            width: "100%"
      },
      chatMessages: {
            paddingTop: "1em",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            width: "100%"
      },
      chatInput: {
            height: "fit-content",
            paddingBottom: "1em"
      }
})

type Props = {
      selectedChannel: Channel | undefined;
}

export const Chat = ({ selectedChannel }: Props) => {
      const classes = useContainerStyles();
      const [chatMessages, setChatMessages] = useState<ChatMessageItem[]>([]);
      useEffect(() => {
            setChatMessages(            [
                  { name: selectedChannel?.name ?? "", details: "", message: `Welcome to: ${selectedChannel?.name}`, timeStamp: new Date(), isMe: false }
            ])
      }, [selectedChannel])
      return (
            selectedChannel ?
                  <div className={classes.container} >
                        <div className={classes.chatMessages}>
                              {chatMessages.map(message => (<ChatMessage item={message} />))}
                        </div>
                        <div className={classes.chatInput}>
                              <ChatInput addMessage={(message) => setChatMessages(previous => {
                                    let newMessages = [...previous]
                                    newMessages.push({
                                          name: "string",
                                          message: message,
                                          details: "string",
                                          timeStamp: new Date(),
                                          isMe: true
                                    })
                                    return newMessages;
                              })} />
                        </div>
                  </div >
                  :
                  <div>
                        Please join a channel to se the chat
                  </div>


      )
};