export function formatVolumn(volumn: any) {
  if (volumn < 1000) return volumn.toFixed(2).toString();
  else if (volumn < 1000000 && volumn > 999)
    return (volumn / 1000).toFixed(2).toString() + "K";
  return (volumn / 1000000).toFixed(2).toString() + "M";
}

export function formatBalance(balances: any) {
  let balance = parseFloat(balances);
  if (balance >= 1000000)
    return (
      balance.toFixed(2).toString().slice(0, 1) +
      "," +
      balance.toFixed(2).toString().slice(1, 4) +
      "," +
      balance.toFixed(2).toString().slice(4)
    );

  if (balance >= 100000)
    return (
      balance.toFixed(2).toString().slice(0, 3) +
      "," +
      balance.toFixed(2).toString().slice(3)
    );

  if (balance >= 10000)
    return (
      balance.toFixed(2).toString().slice(0, 2) +
      "," +
      balance.toFixed(2).toString().slice(2)
    );

  if (balance > 1000)
    return (
      balance.toFixed(2).toString().slice(0, 1) +
      "," +
      balance.toFixed(2).toString().slice(1)
    );
  else return balance.toFixed(2).toString();
}
