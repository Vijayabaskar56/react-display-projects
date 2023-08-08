import { useEffect, useState } from "react"


 const randomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)]
 }

const App = () => {
  const [quotes,setQuotes] = useState([]);
  const [quote,setQuote] = useState(null);
  
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      })
  }, []);

  function getNewQuote() {
    setQuote(randomQuote(quotes));
  }

  return (
    <>
        <h2 className="heading">Quote Generator</h2>
        <div className="container">
          <button className="btn" onClick={getNewQuote}>New Quote</button>
          <h3 className="quote">
            <span>"{quote?.text}"</span>
            
            </h3>
            <i>- {quote?.author}</i>
        </div>
    </>
  )
}



export default App