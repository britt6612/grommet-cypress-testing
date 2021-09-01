import React, { useContext } from "react";
import {
  Box,
  Button,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Text,
} from "grommet";
import { Grommet } from "grommet-icons";

const items = [{ label: "Components" }, { label: "Forms" }, { label: "TBD" }];

export const TestingHeader = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Header pad="large" fill="horizontal">
      <Button>
        <Box
          direction="row"
          align="start"
          gap="medium"
          // pad maintains accessible hit target
          // non-responsive maintains same dimensions for mobile
          pad={{ vertical: "small" }}
          responsive={false}
        >
          <Grommet color="brand" />
          <Box direction="row" gap="xsmall" wrap>
            <Text color="text-strong" weight="bold">
              Grommet
            </Text>
            <Text color="text-strong">Cypress Testing</Text>
          </Box>
        </Box>
      </Button>
      {size !== "small" ? (
        <Nav direction="row">
          {items.map((item) => (
            <Button label={item.label} key={item.label} />
          ))}
        </Nav>
      ) : (
        <Menu label="Menu" items={items} />
      )}
    </Header>
  );
};
