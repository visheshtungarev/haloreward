import React, { } from 'react'
import { Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
export default function SideBar({ type, mainTitle, subTitle, data }) {
    console.log(data[0].title)
    return (
        <Row>
            <Col className="deals_box featuredOffers mb-4" span={24}>
                <Card className="deals_container popularOffers">
                    {
                        mainTitle ?
                            <>
                                <h5 className="fw-bold mb-1">{mainTitle}</h5>
                                <hr />
                            </>
                            : ''
                    }

                    {
                        type === 'list' ?
                            <ul className="sideMenu">
                                {
                                    data && data.map((item, i) => {
                                        return (<li key={i}><Link to={item.link}>{item.title}</Link></li>)
                                        // console.log(item, '+++++' + i)
                                    })
                                }

                            </ul>
                            : type === 'checklist' ?
                                <ul className="sideMenu">
                                    <li><Link to="">{subTitle}</Link></li>
                                    {
                                        data && data.map((item, i) => {
                                            return (
                                                <li key={i} className='pl-2'><label className='customCheckbox'><input type="checkbox" /> {item.title}</label></li>
                                            )
                                        })
                                    }
                                </ul>
                                : type === 'radiolist' ?
                                    <ul className="sideMenu">
                                        <li><Link to="">{subTitle}</Link></li>
                                        {
                                            data && data.map((item, i) => {
                                                <li className='pl-2' key={i}><label className='customCheckbox'><input type="radio" />{item.title}</label></li>
                                            })
                                        }
                                    </ul>
                                    : ''
                    }
                </Card>
            </Col>
        </Row>
    )
}
