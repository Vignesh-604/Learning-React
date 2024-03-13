import { useId } from "react"

function InputBox({
    label_text,                 // from or to
    amount,                     // currency amount
    onAmountChange,             // func on change in amount
    onCurrencyChange,           // func on change in currency type
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) {
    // useId() : passes on a unique ID to bind elements
    const amountInputId = useId()
    const currencySelectId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label_text}        
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    // onAmountChange can have a null value thus && where the input value is directly passed to func
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <label htmlFor={currencySelectId} className="text-black/40 mb-2 w-full">Currency Type</label>

                <select
                    id={currencySelectId}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((curr) => (
                        // For performance optimisation while looping ,use keys in option tags
                        <option key={curr} value={curr}>

                        </option>
                    ))}

                </select>
            </div>
        </div>
    )
}

export default InputBox