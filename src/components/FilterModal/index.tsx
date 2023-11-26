import React from "react";
import { ModalContainer, FilterModal} from "./style";
import {Header} from '@components'
import { XMarkIcon as Xmark } from "react-native-heroicons/solid";

interface IModal {
  open: boolean;
  closeModal: () => void;
  context: React.ReactNode;
}

const FullScreenModal = (props: IModal) => {

    const { open, closeModal, context } = props;

  return (
    <FilterModal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={closeModal}
    >
        <ModalContainer>
            <Header headerFunction={closeModal} icon={<Xmark height={24} width={24} color='black' />} headerTitle="Filter" />
            {context}
        </ModalContainer>
    </FilterModal>
  );
};

export default FullScreenModal;
