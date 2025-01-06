import { AppRoot } from "@telegram-apps/telegram-ui";
import DonateSection from "./components/DonateSection/DonateSection";
import GreetingSection from "./components/GreetingSection/GreetingSection";

function App() {
  return (
    <AppRoot>
      <GreetingSection />
      <DonateSection />
    </AppRoot>
  );
}

export default App;
