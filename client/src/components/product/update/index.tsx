import { Button, Header, Image, Modal } from 'semantic-ui-react';

import { ProductItemProps } from '..';

interface ProductEditModalProps extends ProductItemProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function ProductUpdateModal({
  open,
  onClose,
  onOpen,
}: ProductEditModalProps) {
  return (
    <Modal onClose={onClose} onOpen={onOpen} open={open}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          wrapped
        />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            ve found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={onClose}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={onClose}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}
