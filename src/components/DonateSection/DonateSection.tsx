import { Input, Placeholder, Section, Text } from "@telegram-apps/telegram-ui";

import styles from "./DonateSection.module.css";
import { useEffect, useState } from "react";
import useMainButton from "../../hooks/useMainButton";
import TriggerModal from "../TriggerModal/TriggerModal";
import { hapticFeedback, invoice, mainButton } from "@telegram-apps/sdk-react";
import useTg from "../../hooks/useTg";
import { ApiService } from "../../api/apiService";

const DonateSection = () => {
  const [stars, setStars] = useState<number>(0);

  const { hideMainButton, initMainButton, showMainButton } = useMainButton();
  const { user } = useTg();

  useEffect(() => {
    initMainButton();
  }, []);

  useEffect(() => {
    const handleClick = async () => {
      if (hapticFeedback.isSupported()) {
        hapticFeedback.impactOccurred("soft");
        console.log("haptic click!");
      }
      if (user) {
        const resp = await ApiService.donate({
          amount: stars,
          userId: user?.id,
        });
        invoice.open(resp.invoice_link.replace("https://t.me/$", ""));
      }
    };
    mainButton.onClick(handleClick);

    return () => {
      mainButton.offClick(handleClick);
    };
  }, [stars]);

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
      <Placeholder header="Donation" action={<TriggerModal />}></Placeholder>
    </Section>
  );
};

export default DonateSection;
