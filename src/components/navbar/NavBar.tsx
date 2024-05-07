import Settings from "../settings";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <div>
      <Button>Report</Button>
      <Settings />
      <Button>Sign In</Button>
      <Button>Shortcut</Button>
    </div>
  );
}
