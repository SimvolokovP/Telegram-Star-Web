import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";

import styles from "./TriggerModal.module.css";

const PlaceholderImage = () => (
  <img
    alt="Telegram sticker"
    src="https://xelene.me/telegram.gif"
    className={styles.image}
  />
);

const TriggerModal = () => (
  <Modal
    header={<Modal.Header />}
    trigger={
      <Button size="l" stretched>
        Open!
      </Button>
    }
  >
    <Placeholder
      header="Donation"
      description="This donate to new stickers"
    >
      <PlaceholderImage />
    </Placeholder>
  </Modal>
);

export default TriggerModal;
