import React, { useState } from 'react';
import { Row, Button, Input, Col } from "antd";
import "./index.css";
import TopMenu from "../../TopMenu/TopMenu";
import Login from '../../Auth/Login';
import ModalComp from '../../Modals/ModalComp';
import SearchResult from '../../SearchResult/SearchResult';

const { Search } = Input;

const Index = () => {

  const [searchOpen, setSearchOpen] = useState(false)

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

  const searchQuery = (e) => {
    e.target.value ? setSearchOpen(true) : setSearchOpen(false)

  }
  return (
    <>
      <Row className="header_container webview" align="middle" justify="space-between">
        <Col>
          <img width={100} src="/Images/logo.png" />
        </Col>
        <Col>
          <Row align="middle" justify="center">
            <TopMenu mobileView={true} />
          </Row>
        </Col>
        <Col>
          <Search suffix={<img src="/images/arrow_up.svg" />}
            size="large" placeholder="Search stores"
            enterButton
            onChange={(e) => searchQuery(e)}
          />
          <div className={searchOpen ? 'searchHolder openSearchPanel' : 'searchHolder'}>
            <SearchResult />
          </div>
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
        <Col className='d-flex align-items-center'>
          <span className="d-inline-block px-2"><TopMenu mobileView={false} /></span>
          <span className="d-inline-block px-2"><img src="/images/Bookmark_icon_outline.svg" /></span>
          <span className="d-inline-block px-2"><img src="/images/user_icon_outline.svg" /></span>
        </Col>
        <Col xs={24} className="mt-3">
          <Search size="large" placeholder="Search stores" enterButton onChange={() => setSearchOpen(true)} />
        </Col>
      </Row>
      <ModalComp
        modalTitle={'Welcome!'}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        ModalContent={
          <Login />
        }
      />

    </>
  );
};

export default Index;
