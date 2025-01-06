import { Input, Placeholder, Section, Text } from "@telegram-apps/telegram-ui";

import styles from "./DonateSection.module.css";
import { useEffect, useState } from "react";
import useMainButton from "../../hooks/useMainButton";
import TriggerModal from "../TriggerModal/TriggerModal";

const DonateSection = () => {
  const [stars, setStars] = useState<number>(0);

  const { hideMainButton, initMainButton, showMainButton } = useMainButton();

  useEffect(() => {
    initMainButton();
  }, []);

  const calcStars = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userValue = e.target.value.trim();

    if (userValue && !isNaN(+userValue) && +userValue > 0) {
      showMainButton();
      setStars(+userValue);
    } else {
      hideMainButton();
      setStars(0);
    }
  };

  return (
    <Section header="A small donation pls :)">
      <Placeholder>
        <Text className={styles.starsText}>{stars} ⭐</Text>
      </Placeholder>
      <Input
        header="Donate"
        placeholder="Star payment"
        type="number"
        min={0}
        onChange={calcStars}
      />
      <Placeholder
        header="Donation"
        action={<TriggerModal />}
      ></Placeholder>
    </Section>
  );
};

export default DonateSection;
