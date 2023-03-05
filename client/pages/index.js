import React from "react";
import { ChatContext, ChatProvider } from "../context";

const index = () => {
  const title = React.useContext(ChatContext);
  return <div>{title}</div>;
};

export default index;
