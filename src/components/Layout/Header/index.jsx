import React from "react";
import { Row, Button, Input, Col, Select } from "antd";
import "./index.css";

const { Search } = Input;
const { Option } = Select;

const Index = () => {
  return (
    <>
      <Row className="header_container webview" align="middle" justify="space-around">
        <Col>
          <img width={100} src="./Images/logo.png" />
        </Col>
        <Col>
          <Row align="middle" justify="center">
            <img src="/images/categories.svg" />
            <Select
              suffixIcon={<img src="/images/arrow_up.svg" />}
              className="select_box"
              size="large"
              showSearch
              style={{ width: 150, border: 0 }}
              placeholder="Categories"
              optionFilterProp="children"
            >
              <Option value="5">option 1</Option>
              <Option value="6">option 2</Option>
              <Option value="5">option 1</Option>
              <Option value="6">option 2</Option>
              <Option value="5">option 1</Option>
              <Option value="6">option 2</Option>
              <Option value="5">option 1</Option>
              <Option value="6">option 2</Option>
            </Select>
          </Row>
        </Col>
        <Col>
          <Search suffix={<img src="/images/arrow_up.svg" />}
            size="large" placeholder="Search stores" enterButton />
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

      <Row className="header_container mobileview px-3" align="middle" justify="space-between">
        <Col>
          <img width={100} src="./Images/logo.png" />
        </Col>
        <Col>
          <span className="d-inline-block px-2"><img src="/images/category_icon_outline.svg" /></span>
          <span className="d-inline-block px-2"><img src="/images/Bookmark_icon_outline.svg" /></span>

          <span className="d-inline-block px-2"><img src="/images/user_icon_outline.svg" /></span>

        </Col>
        <Col xs={24} className="mt-3">
          <Search size="large" placeholder="Search stores" enterButton />
        </Col>
      </Row>
    </>
  );
};

export default Index;
