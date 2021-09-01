import React from "react";
import {
  Grommet,
  Box,
  Select,
  Text,
  Meter,
  DataTable,
  DateInput,
  TextInput,
  Menu,
} from "grommet";
import { TestingHeader } from "./Components/header";

const defaultOptions = [];
for (let i = 1; i <= 200; i += 1) {
  defaultOptions.push(`option ${i}`);
}

const amountFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const columns = [
  {
    property: "name",
    header: <Text>Name with extra</Text>,
    primary: true,
    footer: "Total",
  },
  {
    property: "location",
    header: "Location",
  },
  {
    property: "date",
    header: "Date",
    render: (datum) =>
      datum.date && new Date(datum.date).toLocaleDateString("en-US"),
    align: "end",
  },
  {
    property: "percent",
    header: "Percent Complete",
    render: ({ percent }) => (
      <Box pad={{ vertical: "xsmall" }}>
        <Meter values={[{ value: percent }]} thickness="small" size="small" />
      </Box>
    ),
  },
  {
    property: "paid",
    header: "Paid",
    render: (datum) => amountFormatter.format(datum.paid / 100),
    align: "end",
    aggregate: "sum",
    footer: { aggregate: true },
  },
];

const DATA = [
  {
    name: "Alan",
    location: "",
    date: "",
    percent: 0,
    paid: 0,
  },
  {
    name: "Bryan",
    location: "Fort Collins",
    date: "2018-06-10",
    percent: 30,
    paid: 1234,
  },
  {
    name: "Chris",
    location: "Palo Alto",
    date: "2018-06-09",
    percent: 40,
    paid: 2345,
  },
  {
    name: "Eric",
    location: "Palo Alto",
    date: "2018-06-11",
    percent: 80,
    paid: 3456,
  },
  {
    name: "Doug",
    location: "Fort Collins",
    date: "2018-06-10",
    percent: 60,
    paid: 1234,
  },
  {
    name: "Jet",
    location: "Palo Alto",
    date: "2018-06-09",
    percent: 40,
    paid: 3456,
  },
  {
    name: "Michael",
    location: "Boise",
    date: "2018-06-11",
    percent: 50,
    paid: 1234,
  },
  {
    name: "Tracy",
    location: "San Francisco",
    date: "2018-06-10",
    percent: 10,
    paid: 2345,
  },
];

function App() {
  const [options, setOptions] = React.useState(defaultOptions);
  const [value, setValue] = React.useState("");
  const [textInputvalue, setTextInputValue] = React.useState("");
  const [date, setDate] = React.useState("");
  const onChange = (event) => {
    const nextValue = event.value;
    console.log("onChange", nextValue);
    setDate(nextValue);
  };
  console.log("date", date);
  return (
    <Grommet style={{ height: "100%", width: "auto" }} full>
      <Box className="App-header">
        <TestingHeader />
        <Box gap="large" direction="row-responsive">
          <Box width="medium" pad="small">
            <Select
              size="medium"
              placeholder="Select single option"
              value={value}
              options={options}
              onChange={({ option }) => setValue(option)}
              id="select-testing"
              name="select-testing"
            />
          </Box>
          <Box width="medium" pad="small">
            <DataTable
              size="small"
              id="datatable-testing"
              name="datatable-testing"
              columns={columns}
              data={DATA}
              step={10}
            />
          </Box>
        </Box>
        <Box direction="row-responsive">
          <Box width="medium" pad="small">
            <select id="name">
              <option>Joe</option>
              <option>Mary</option>
              <option selected="selected">Peter</option>
            </select>
          </Box>
          <Box width="medium" pad="small">
            <DateInput
              id="dateinput-testing"
              format="m/d/yy"
              value={date}
              onChange={onChange}
            />
          </Box>
        </Box>
        <Box direction="row-responsive">
          <Box width="medium" pad="small">
            <TextInput
              placeholder="testing place holder"
              value={textInputvalue}
              onChange={(event) => setTextInputValue(event.target.value)}
            />
          </Box>
          <Box width="medium" pad="small">
            <Menu
              label="Menu"
              items={[
                { label: "First Action", onClick: () => {} },
                { label: "Second Action", onClick: () => {} },
                { label: "Third Action", onClick: () => {} },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
