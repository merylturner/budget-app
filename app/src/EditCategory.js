// import React, { Component } from 'react';
// import ReactModal from 'react-modal';

// class EditCategory extends Component {
//     constructor() {
//         super();
//         this.state = {
//             showModal: false
//         };

//         this.handleOpenModal = this.handleOpenModal.bind(this);
//         this.handleCloseModal = this.handleCloseModal.bind(this);
//     }

//     handleOpenModal() {
//         this.setState({showModal: true});
//     }

//     handleCloseModal() {
//         this.setState({showModal: false});
//     }
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleOpenModal}>+</button>
//                 <ReactModal
//                     isOpen={this.state.showModal}
//                     contentLabel="Dashboard">
//                     <button onClick={this.handleCloseModal}>X</button>
//                     {this.props.children}
//                     <button onClick={this.handleAddCategory}>Save</button>
//                 </ReactModal>
//             </div>
//         );
//     }
// }

// export default EditCategory;