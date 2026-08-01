import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) {
      setData({});
      return;
    }
    const code = currency.toUpperCase();
    fetch(`https://open.er-api.com/v6/latest/${code}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === 'success' && res.rates) {
          setData(res.rates);
        } else {
          setData({});
        }
      })
      .catch(() => {
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;   