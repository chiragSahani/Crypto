
# 🚀 Cryptocurrency Tracker  

A **React application** that displays **real-time cryptocurrency data** in a clean, organized interface.  

## 🌟 Overview  
The **Cryptocurrency Tracker** fetches real-time cryptocurrency values from an API and displays them in **both USD and Euro**. It features a **responsive design**, ensuring a seamless experience across various devices.  



### ✨ Features  
✔️ **Real-time cryptocurrency data display**  
✔️ **Responsive design** for all screen sizes  
✔️ **Smooth loading animation** during data fetch  
✔️ **Clean tabular display** of cryptocurrency information  
✔️ **Error handling** for API failures  

---

## 🛠️ Tech Stack  
🔹 **React.js** - Frontend framework  
🔹 **JavaScript (ES6+)** - Core scripting language  
🔹 **CSS3** - Styling and responsiveness  
🔹 **REST API** - Fetching live cryptocurrency data  

---

## 📥 Installation  

Follow these steps to set up the project locally:  

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/chiragSahani/Crypto.git
cd CurrencyTracker
```

### 2️⃣ Install dependencies  
```sh
npm install
```

### 3️⃣ Start the development server  
```sh
npm start
```
The application will open in your default browser at **[http://localhost:3000](http://localhost:3000)**.  

---

## 📂 Project Structure  

The application consists of three main components:  

📌 **CryptocurrencyTracker** - Manages state and API calls  
📌 **CryptocurrenciesList** - Renders the list header and cryptocurrency items  
📌 **CryptocurrencyItem** - Displays individual cryptocurrency details  

---

## 🔗 API Integration  

The application fetches data from:  
**🔗 [Cryptocurrency API](https://apis.ccbp.in/crypto-currency-converter)**


The API returns the following cryptocurrency data:  
✔️ **Currency Name**  
✔️ **USD Value**  
✔️ **Euro Value**  
✔️ **Currency Logo**  
✔️ **Unique ID**  

---

## ⚙️ Implementation Details  

✅ **Uses React Loader Spinner** for a smooth loading animation  
✅ **Implements proper error handling** for API requests  
✅ **Converts snake_case API response** to camelCase for React components  
✅ **Follows accessibility best practices** (e.g., proper alt text for images)  

---

## 📸 Screenshots  

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif" alt="cryptocurrency-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

The application interface includes:  

✅ **A header** with the title "**Cryptocurrency Tracker**"  
✅ **A banner image** representing cryptocurrencies  
✅ **A clean table** displaying:  
  - Coin type (with logo)  
  - USD value  
  - EURO value  

*(Add screenshots here for better visualization!)*  

---

## 📜 License  

This project is open-source and available under the **MIT License**.  

---

## 🙌 Acknowledgements  

🔹 **React Loader Spinner** for smooth loading animations  
🔹 **Cryptocurrency API** for providing real-time data  

