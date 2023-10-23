import { useState } from 'react';

const useChat = () => {
  const [searchText, setSearchText] = useState('');

  const getter = { searchText };
  const setter = { setSearchText };

  return {
    getter,
    setter,
  };
};

export default useChat;
