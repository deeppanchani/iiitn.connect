const fetchURL = async () => {
  const resp = await fetch(
    "https://opensheet.vercel.app/1XtMa5U5Cl0kaKyDSAJJ5rLFxYVJnbzXlwXExFs-DDC0/Form+responses+1"
  );

  const data = await resp.json();
  console.log(data);
};

fetchURL();
