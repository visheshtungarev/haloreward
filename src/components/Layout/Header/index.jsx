import React, { useState } from 'react';
import { Row, Button, Modal, Input, Col } from "antd";
import "./index.css";
import TopMenu from "../../TopMenu/TopMenu";
import Login from '../../Auth/Login';
const { Search } = Input;

const Index = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <Row className="header_container webview" align="middle" justify="space-between">
        <Col>
          <img width={100} src="/Images/logo.png" />
        </Col>
        <Col>
          <Row align="middle" justify="center">

            <TopMenu />

            {/* <img src="/images/categories.svg" />
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
            </Select> */}
          </Row>
        </Col>
        <Col>
          <Search suffix={<img src="/images/arrow_up.svg" />}
            size="large" placeholder="Search stores" enterButton />
        </Col>
        <Col>
          <Row align="middle" justify="">
            <Button type="link" onClick={showModal}>Sign In</Button>
            <Button type="primary" size="large">
              Join Now
            </Button>
          </Row>
        </Col>
      </Row>

      <Row className="header_container mobileview px-3" align="middle" justify="space-between">
        <Col>
          <img width={100} src="/Images/logo.png" />
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

      <Modal title={<img src='/Images/welcome_img.svg' height={40} className="mt-3" />} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Login />
      </Modal>
    </>
  );
};

export default Index;
