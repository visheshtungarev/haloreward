import React from "react";
import { Row, Button, Input, Col, Select } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import "./index.css";

const { Search } = Input;
const { Option } = Select;

const Index = () => {
  return (
    <Row className="header_container" align="middle" justify="space-around">
      <Col>
        <img width={100} src="./Images/logo.png" />
      </Col>
      <Col>
        <Row align="middle" justify="center">
          <AppstoreOutlined />
          <Select
            className="select_box"
            size="large"
            showSearch
            style={{ width: 200, border: 0 }}
            placeholder="Search to Select"
            optionFilterProp="children"
          >
            <Option value="5">option 1</Option>
            <Option value="6">option 2</Option>
          </Select>
        </Row>
      </Col>
      <Col>
        <Search size="large" placeholder="input search text" enterButton />
      </Col>
      <Col>
        <Row align="middle" justify="">
          <Button type="link">Sign In</Button>
          <Button type="primary" size="large">
            Join Now
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
