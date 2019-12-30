import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standatd modal visible active">kjhsukdggskd gsja gdjg</div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
