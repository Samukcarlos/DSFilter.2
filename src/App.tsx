import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./routes/ListingBody";
import { ContextCount } from "./utils/context-count";

export default function App() {

  const [contextCount, setContextCount] = useState<number>(0);

  return (
    <ContextCount.Provider value={{ contextCount, setContextCount }}>
      <Header />
      <ListingBody />
    </ContextCount.Provider>
  )
}
