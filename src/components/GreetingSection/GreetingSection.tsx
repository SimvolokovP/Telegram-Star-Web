import { Avatar, Section, Title } from "@telegram-apps/telegram-ui";
import styles from "./GreetingSection.module.css";
import useTg from "../../hooks/useTg";
import { User } from "@telegram-apps/sdk-react";

const GreetingSection = () => {
  const { user } = useTg();

  const getUsername = (user: User) => {
    if (user) {
      return user.username
        ? "@" + user.username
        : user.firstName + " " + user.lastName;
    }
  };

  return (
    <Section className={styles.greetingSection}>
      {user?.photoUrl && (
        <Avatar
          className={styles.greetingAvatar}
          src={user.photoUrl}
          alt={getUsername(user)}
        />
      )}
      {user && <Title className={styles.greetingTitle}>Hi, {getUsername(user)}!</Title>}
    </Section>
  );
};

export default GreetingSection;
