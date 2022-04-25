import React from 'react';
import { Row, Col } from 'antd';
import {
    RightOutlined
} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import "./index.css";
export default function Heading({ HeadingText, actionText, actionLink, filter, color }) {

    return (
        <Row className="list_bar" align="middle" justify="space-between">
            {
                HeadingText ?
                    <Col className={color ? `list_title ${color}` : `list_title`}>
                        {HeadingText}
                    </Col> : ''
            }
            {
                actionText && actionLink ?
                    <Col className="list_action">
                        <Link className={color ? `d-flex align-items-center ${color}` : `d-flex align-items-center`} to={actionLink}>{actionText}
                            <RightOutlined />
                        </Link>
                    </Col> : ''
            }
            {
                filter ?
                    <Col >
                        {filter}
                    </Col> : ''
            }

        </Row>)
}
