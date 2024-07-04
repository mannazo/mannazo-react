import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody.jsx';
import InputArea from './InputArea.jsx';

const ChatRoom = () => {
  return (
    <div className='mx-auto max-w-4xl rounded-lg bg-gray-100 p-4 shadow-md'>
      <ChatHeader />
      <ChatBody />
      <InputArea />
    </div>
  );
};

export default ChatRoom;
