// src/App.js
import React, { useState } from 'react';

Modal.setAppElement('#root');

const Popup = ({ isOpen, onClose, points, onBuy }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Buy Product">
      <h2>Buy Product</h2>
      <p>You have {points} points.</p>
      <button onClick={onBuy}>Buy Product</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default Popup;