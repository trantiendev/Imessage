import { signOut } from "next-auth/react";

interface IChatProps {
}

const Chat: React.FC<IChatProps> = (props) => {
  return (
    <div>
      <button onClick={() => signOut()}>logout</button>
    </div>
  )
};

export default Chat;
