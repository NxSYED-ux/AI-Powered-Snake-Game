import { useState } from 'react';

const ExchangeCalculator = () => {
    const [fromCurrency, setFromCurrency] = useState('USDT');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(100);
    const rate = 0.85;
    
    const result = (amount * rate).toFixed(2);
    
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 my-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Exchange Calculator</h2>
            
            <div className="space-y-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex-grow p-3 outline-none"
                        placeholder="Amount"
                    />
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="bg-gray-100 p-3 border-l"
                    >
                        <option value="USDT">USDT</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>
                
                <div className="flex justify-center">
                    <button className="bg-gray-100 p-2 rounded-full">
                        ↓
                    </button>
                </div>
                
                <div className="flex items-center border rounded-lg overflow-hidden">
                    <input
                        type="number"
                        value={result}
                        readOnly
                        className="flex-grow p-3 outline-none bg-gray-50"
                    />
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="bg-gray-100 p-3 border-l"
                    >
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
            </div>
            
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Exchange Now
            </button>
        </div>
    );
};

export default ExchangeCalculator;