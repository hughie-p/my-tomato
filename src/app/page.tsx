import Navbar from "@/components/navbar";
import Tasks from "@/components/tasks";
import Timer from "@/components/timer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Timer />
      <Tasks />
    </main>
  );
}
