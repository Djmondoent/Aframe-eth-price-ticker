# Aframe-eth-price-ticker
A custom A-Frame component that displays the current Ethereum price using the CoinGecko API.
A-Frame Ethereum Price Ticker
A custom A-Frame component that displays the current Ethereum price using the CoinGecko API.

Ethereum Price Ticker

Features
Real-time Ethereum price updates
Easy to integrate into A-Frame projects
Customizable display options
Getting Started
Prerequisites
Make sure you have A-Frame installed in your project:

html
Copy code
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
Installing
Download the eth-price-ticker.js component from this repository and add it to your project folder.

Include the eth-price-ticker.js component in your HTML file:

html
Copy code
<script src="path/to/eth-price-ticker.js"></script>
Use the eth-price-ticker component in your A-Frame scene:
html
Copy code
<a-entity eth-price-ticker position="0 1.5 -5"></a-entity>
Configuration
The eth-price-ticker component can be customized with the following properties:

updateInterval: Interval (in milliseconds) between API calls to update the Ethereum price (default: 5000ms)
currency: The currency used to display the Ethereum price (default: 'usd')
For example:

html Copy code
<a-entity eth-price-ticker="updateInterval: 10000; currency: eur" position="0 1.5 -5"></a-entity>

API
This component uses the CoinGecko API to retrieve the Ethereum price. No API key is required.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
A-Frame for creating the framework for building WebVR experiences
CoinGecko for providing the API to access cryptocurrency data
Please note: The component provided in this example is for educational purposes only. Make sure to test it thoroughly and make any necessary adjustments before using it in a production environment. The author of this README assumes no responsibility for any issues or inaccuracies that may arise from using the provided component.
