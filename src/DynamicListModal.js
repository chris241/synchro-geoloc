// DynamicListModal.js
import React from "react";
import CustomModal from "./CustomModal";

class DynamicListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      isModalOpen: false,
    };
  }

  openModal = (item) => {
    this.setState({
      selectedItem: item,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedItem: null,
      isModalOpen: false,
    });
  };
  closeModalOK = () => {
    this.setState({
      selectedItem: null,
      isModalOpen: false,
    });
  };

  render() {
    const { selectedItem, isModalOpen } = this.state;
    const itemList = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    return (
      <div>
        <h2>Dynamic List with Modal</h2>
        {/* Dynamically generate buttons for each item */}
        {itemList.map((item, index) => (
          <button key={index} onClick={() => this.openModal(item)}>
            {item}
          </button>
        ))}
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          onRequestOk={this.closeModalOK}
          content={selectedItem}
        />
      </div>
    );
  }
}

export default DynamicListModal;
