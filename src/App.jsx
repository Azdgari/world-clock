import './styles.css'
import QuoteGenerator from './components/quote-generator/quote-generator'
import Greeting from './components/greeting/greeting'
import MoreButton from './components/more-button/more-button'

export default function App() {
  return (
    <body>
      <div className="background">
        < QuoteGenerator />
        <div className="lower-container">
          <div className="clock-container">
            < Greeting />
            <div className="clock-and-timezone">
              <h1 className="clock">
                11:30
              </h1>
              <h2 className="timezone">
                BST
              </h2>
            </div>
            <h2 className="location">
              IN LONDON, UK
            </h2>
          </div>
          <MoreButton />
        </div>
      </div>
    </body>
  )
}