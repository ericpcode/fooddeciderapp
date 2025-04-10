import React, { useState } from 'react';
import { Modal, Portal, Button, TextInput } from 'react-native-paper';

interface AddFriendModalProps {
  visible: boolean;
  onClose: () => void;
  onAddFriend: (name: string, email: string) => void;
}

const AddFriendModal: React.FC<AddFriendModalProps> = ({ visible, onClose, onAddFriend }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddFriend = () => {
    onAddFriend(name, email);
    onClose();
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onClose}>
        <TextInput label="Name" value={name} onChangeText={setName} />
        <TextInput label="Email" value={email} onChangeText={setEmail} />
        <Button onPress={handleAddFriend}>Add Friend</Button>
        <Button onPress={onClose}>Cancel</Button>
      </Modal>
    </Portal>
  );
};

export default AddFriendModal;
