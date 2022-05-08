import React, { useState } from 'react';
import { Row, Button, Input, Col } from "antd";
import "./index.css";
import TopMenu from "../../TopMenu/TopMenu";
import Login from '../../Auth/Login';
import ModalComp from '../../Modals/ModalComp';
import SearchResult from '../../SearchResult/SearchResult';
import Register from '../../Auth/Register';
import ForgotPwd from '../../Auth/ForgotPwd';
import SendRequestLink from '../../Auth/SendRequestLink';

const { Search } = Input;

const Index = () => {
  const [second, setSecond] = useState(59)
  const [minute, setMinute] = useState(1)
  const [searchOpen, setSearchOpen] = useState(false)
  const [modalChange, setModalChange] = useState('login')

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setModalChange('login')
    setSecond(59)
    setMinute(1)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalChange('login')
    setSecond(59)
    setMinute(1)
  };

  const searchQuery = (e) => {
    e.target.value ? setSearchOpen(true) : setSearchOpen(false)
  }



  React.useEffect(() => {
    if (modalChange === 'sendRequestLink') {

      if (second > 0) {
        setTimeout(() => setSecond(second - 1), 1000);
      } else {
        if (minute > 0) { setSecond(59) } else {
          setSecond('0');
          setModalChange('linkExpired')
        }
      }

      if (minute > 0) {
        setTimeout(() => setMinute(minute - 1), 59000);
      } else {
        setMinute('0');
      }
    }
  });
  const joinModal = () => {
    setIsModalVisible(true);
    setModalChange('register')
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
            <Button type="primary" onClick={() => joinModal()} size="large">
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
        modalTitle={
          modalChange === 'login' ? 'Welcome!'
            : modalChange === 'register' ? 'Register'
              : modalChange === 'forgotPwd' ? 'Forgot Password'
                : modalChange === 'sendRequestLink' ? 'Link Sent'
                  : modalChange === 'sendRequestLink' ? 'Link Sent'
                    : modalChange === 'linkExpired' ? ''
                      : ''
        }
        logoShow={
          modalChange === 'login' ? true
            : modalChange === 'register' ? true
              : modalChange === 'forgotPwd' ? false
                : modalChange === 'sendRequestLink' ? false
                  : modalChange === 'linkExpired' ? false : ''
        }
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        ModalContent={
          modalChange === 'login' ?
            <Login goToRegister={() => setModalChange('register')} forgotPwd={() => setModalChange('forgotPwd')} />
            : modalChange === 'register' ?
              <Register goToLogin={() => setModalChange('login')} />
              : modalChange === 'forgotPwd' ?
                <ForgotPwd sendRequestLink={() => setModalChange('sendRequestLink')} />
                : modalChange === 'sendRequestLink' ?
                  <SendRequestLink timer={minute + ':' + second} sendRequestLink={() => setModalChange('sendRequestLink')} />
                  : modalChange === 'linkExpired' ?
                    <SendRequestLink />
                    : ''
        }
      />

    </>
  );
};

export default Index;
