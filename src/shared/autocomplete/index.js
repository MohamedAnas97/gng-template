import { AutoComplete } from "antd";
import { useEffect, useState } from "react";

const App = (props) => {
  const { countryOnChangeHandler } = props;
  // const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [options2, setOptions2] = useState([]);

  // get value
  const getPanelValue = (searchText) => {
    const filteredRecords = options2?.filter((country) => {
      return country?.value?.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log("filtered", filteredRecords, searchText);
    return !searchText ? [] : filteredRecords;
  };

  // onSelect handler
  const onSelect = (data) => {
    countryOnChangeHandler(data);
  };

  const allCountryHandler = () => {
    const allCountries = [];
    // eslint-disable-next-line
    props?.countries?.map((country) => {
      allCountries?.push({ value: country?.name });
    });
    setOptions(allCountries);
    setOptions2(allCountries);
  };

  // useEffect to call function for countries
  useEffect(() => {
    allCountryHandler();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: `100%`,
        }}
        autoFocus={false}
        backfill={false}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="Select Country"
        popupClassName="autocomplete-modal"
        defaultOpen={true}
      />
    </>
  );
};
export default App;
