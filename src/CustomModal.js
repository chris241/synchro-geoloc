import React from "react";
import Modal from "react-modal";
import Map from "./Map";
class CustomModal extends React.Component {
  render() {
    const { isOpen, onRequestClose, content } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
      >
        <h3>Geolocation of the news ({content})</h3>
        <Map zoom={8} center={{ lat: 51.5287718, lng: -0.2416804 }} />
        <input type="submit" onClick={onRequestClose} value="Cancel" />
        <input type="submit" onClick={onRequestClose} value="Ok" />
      </Modal>
    );
  }
}

export default CustomModal;
