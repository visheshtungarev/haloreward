import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Row, Card, Button } from "antd";
import Heading from "../../../components/Heading/Heading";
import Breadcurms from "../../../components/Breadcrums/Breadcurms";
import ModalComp from "../../../components/Modals/ModalComp";

// import {
//     GlobalOutlined,
//     CopyOutlined,
//     ShopOutlined,
//     ShoppingOutlined
// } from "@ant-design/icons";
// import { FiClock } from 'react-icons/fi'
// import Heading from "../../../components/Heading/Heading";


export default function PickingFavoriteBrand() {
    const [, setOpenSidePanel] = useState(false)

    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 993) {
            setOpenSidePanel(true)
        }
    }, [])

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


        <div className="home_container">

            <ModalComp
                // modalTitle={'/Images/'}
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                ModalContent={
                    <div className="px-md-5 px-3">
                        <div className="text-center">

                            <img className="my-4" src="/Images/thankyou.svg" height="150" />
                            <h5 className="fw-bold purpleText">Thankyou!</h5>
                            <h6 style={{ fontWeight: 300 }} className="text-muted mt-3">All your selected brands are
                                saved sucessfully.</h6>
                            <Button type="primary" onClick={() => showModal()} className='w-100 mt-3' size="large">
                                Done
                            </Button>
                        </div>
                    </div>
                }
            />


            <div className="list_view" >

                <Breadcurms
                    data={[{
                        pageName: 'Saved',
                        pageLink: '/saved'
                    }, {
                        pageName: 'Favorite Brands ',
                        pageLink: '/favorite-brands '
                    }]} />
                <Heading
                    HeadingText={"Pick your favorite brands"}
                    subHeading={"Select atleast 3 brands/merchants"}
                    filter={<Button type="primary" onClick={() => showModal()} className='w-100' size="large">
                        Save
                    </Button>}
                />
                <Row justify="space-around" gutter={20}>

                    <Col span={24} lg={{ span: 6 }}>
                        <Card className="deals_container popularOffers rounded1">
                            <h5 className="fw-bold mb-0">Your Picks</h5>

                            {/* shows when you haven’t selected any brand ============*/}

                            <div className="text-center my-4" style={{ display: 'none' }}>
                                <img src="/Images/no_coupon.svg" height={150} />
                                <p>You haven’t selected any brand.</p>
                            </div>

                            {/* shows when you haven’t selected any brand ============*/}

                            <Row>
                                <Col span={8} className="p-3">
                                    <div className="selectedBrands">
                                        <img src="/images/close.svg" className="crossicon" height={20} />
                                        <img src="/images/logo (3).png" className="logoimg" />
                                    </div>
                                </Col>
                                <Col span={8} className="p-3">
                                    <div className="selectedBrands">
                                        <img src="/images/close.svg" className="crossicon" height={20} />
                                        <img src="/images/logo (3).png" className="logoimg" />
                                    </div>
                                </Col>
                                <Col span={8} className="p-3">
                                    <div className="selectedBrands">
                                        <img src="/images/close.svg" className="crossicon" height={20} />
                                        <img src="/images/logo (3).png" className="logoimg" />
                                    </div>
                                </Col>
                                <Col span={8} className="p-3">
                                    <div className="selectedBrands">
                                        <img src="/images/close.svg" className="crossicon" height={20} />
                                        <img src="/images/logo (3).png" className="logoimg" />
                                    </div>
                                </Col>
                                <Col span={8} className="p-3">
                                    <div className="selectedBrands">
                                        <img src="/images/close.svg" className="crossicon" height={20} />
                                        <img src="/images/logo (3).png" className="logoimg" />
                                    </div>
                                </Col>

                            </Row>
                        </Card>
                    </Col>
                    <Col span={24} lg={{ span: 18 }}>
                        <Card className="deals_container popularOffers rounded1 px-md-4 ">

                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="fw-bold mb-0">Brands</h5>
                                <div className="searchBar">
                                    <img src="/Images/search.svg" height={20} className="searchIcon" />
                                    <input type="text" placeholder="Search for a brand" />
                                </div>
                            </div>

                            <ul className="sideMenu devider">
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                                <li className="d-flex align-items-center py-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div><img src="/images/logo (3).png" className="dealicon_img_frame_sm" /></div>
                                        <h5 className="pl-3">Flipkart</h5>
                                    </div>
                                    <div >
                                        <span className="favoriteBtn">
                                            <input name="makeFav" type="checkbox" />
                                            <span className="checkimg"></span>
                                        </span>

                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    );
}
