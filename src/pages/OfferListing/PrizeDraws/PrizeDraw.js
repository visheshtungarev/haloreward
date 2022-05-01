import React, { useState } from 'react'
import { FiClock } from 'react-icons/fi'

// import Heading from '../../components/Heading/Heading'
import { Row, Col, Card, Button } from 'antd'
import "./index.css";
import { Link } from 'react-router-dom';
import Heading from '../../../components/Heading/Heading';
import ModalComp from '../../../components/Modals/ModalComp';

// import Badge from '../../../components/Badge/Badge';

const allTredingOffers = [
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        couponCode: 'FAB67527fg',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        tag: 'Generic',
        time: "1d 2h 21m"
    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        couponCode: 'FAB67527fg',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        tag: 'Generic',
        time: "1d 2h 21m"
    },
    {


        image: "/Images/nykaa.png",
        title: "Nykaa",
        couponCode: 'FAB67527fg',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        tag: 'Generic',
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        couponCode: 'FAB67527fg',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        tag: 'Generic',
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        couponCode: 'FAB67527fg',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        tag: 'Generic',
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        couponCode: 'FAB67527fg',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        tag: 'Generic',
        time: "1d 2h 21m"

    }
]


export default function PrizeDraw() {
    const [dataArr,] = useState(allTredingOffers)

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
            <ModalComp
                // modalTitle={'/Images/'}
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                ModalContent={
                    <div className="px-md-5 px-3">
                        <div className="text-center">
                            <div className="smLogo mx-auto">
                                <img src="/Images/myntra.png" />
                            </div>
                            <h6 className=" my-3">Myntra</h6>
                            <h6 style={{ fontWeight: 300 }} className="text-dark">Win a chance to meet the Manchester
                                United Team</h6>
                            <img className="my-4" src="Images/prizeDraw_img.svg" height="150" />
                            <h5 className="fw-bold purpleText">You have entered this prize draw!</h5>
                            <h6 style={{ fontWeight: 300 }} className="text-muted mt-3">We will notify all the winners by
                                <b className='d-block text-dark'>Nov 10, 2021</b>
                            </h6>
                        </div>
                    </div>
                }
            />


            <Heading
                HeadingText="Prize Draws"
            // actionText="View All"
            // actionLink="/Trending-offers"
            />

            <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
                {dataArr && dataArr.map((item, i) =>
                    <Col key={i} className="deals_box featuredOffers mb-4" span={24}>
                        <Card
                            className="deals_container popularOffers"
                            actions={[

                            ]}
                        >
                            <div className="d-flex w-100 ">
                                <div className='prizeDraw_box'>
                                    <img className="" src="/Images/prize.svg" height={50} />
                                </div>
                                <Row align='space-between' className="flex-grow-1">
                                    <div className=''>
                                        <div className="w-100 d-flex align-items-center justify-content-between">

                                            <p className=' mb-0'>{item.tag}</p>

                                            <p className="mb-0 viewAllOffer">{item.viewAll}</p>
                                        </div>
                                        <div>
                                            <img className="dealicon_img_frame_lg_mobile" src={item.image} />
                                        </div>
                                        <p className="deals_title mt-0">{item.content}</p>

                                    </div>
                                    <Row align='center' className='w-100 mt-auto' justify='between'>
                                        <Row key="time" className="">
                                            <Link to='' className='d-flex align-items-center mr-3'> Show Details</Link>
                                            <span className='d-flex align-items-center'> <FiClock /> &nbsp; {item.time}</span>
                                        </Row>
                                        <Button type="primary" className="px-md-5 px-3 ml-auto" onClick={showModal}>Enter draw</Button>

                                    </Row>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                )}
            </Row>


        </>
    )
}
