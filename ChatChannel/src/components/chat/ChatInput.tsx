import { Card, CardHeader, Body1, Caption1, makeStyles, shorthands, Field, Input } from "@fluentui/react-components";
import { useState } from "react";

type Props = {
      addMessage: (message: string) => void;
}

const useStyles = makeStyles({
      card: {
            ...shorthands.margin("auto"),
            width: "720px",
      },

});

const ChatInput = (props: Props) => {
      const styles = useStyles();
      const [message, setMessage] = useState<string>("");
      const isSubmit = (val: React.KeyboardEvent<HTMLInputElement>) => {

            if (val.code === "Enter" && message !== "") {
                  props.addMessage(message);
                  setMessage("")
            }
      }
      return (
            <Card className={styles.card}>
                  <CardHeader
                        header={
                              <Body1>
                                    <Field
                                          label="New chat messge"
                                    >
                                          <Input
                                                onChange={(_, val) => setMessage(val.value)}
                                                value={message}
                                                type="text"
                                                onKeyDown={val => isSubmit(val)}
                                          />
                                    </Field>
                              </Body1>
                        }
                        description={<Caption1></Caption1>}
                  />
            </Card>
      )
}

export default ChatInput;