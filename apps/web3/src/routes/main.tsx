import React, { FC, useEffect, useState } from 'react';

const Main: FC = () => {
  const [account, setAccount] = useState('');
  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
      } else {
        alert('Install Metamask');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAccount();
  }, []);

  return <div>{account || 'Not Connected'}</div>;
};

export default Main;
