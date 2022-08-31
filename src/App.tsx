import { useEffect, useState } from "react";
import { Quote } from "./types";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("http://localhost:3010/quotes")
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);

  return (
    <ul>
      {quotes.map((quote) => (
        <li className="quotes">
          <p>{quote.quote}</p>
          <h3>{quote.author}</h3>
        </li>
      ))}
    </ul>
  );
}

export default App;
