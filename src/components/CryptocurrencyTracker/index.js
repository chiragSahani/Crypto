// Write your code here
// src/components/CryptocurrencyTracker/index.js
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogoUrl: eachItem.currency_logo,
    }))

    this.setState({
      cryptocurrenciesData: formattedData,
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state
    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
