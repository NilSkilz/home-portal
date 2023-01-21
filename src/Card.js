import React from "react";

const Card = ({ title, subtitle, url, logo }) => {
    return (
        <a href="test.com">
            <div className="row" style={{ textAlign: 'right', marginBottom: '100px' }}>
                <div className="col-4"><img style={{ height: '80px', marginTop: '20px' }} src={logo} alt=''></img></div>
                <div className="col-8"><div
                    style={{
                        fontWeight: "500",
                        fontSize: "38px",
                        textAlign: "left",
                        // width: '300px'
                    }}
                >
                    {title}
                </div>
                    <div
                        style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            textAlign: "left",
                        }}
                    >
                        {subtitle}
                    </div>
                    <div
                        style={{
                            fontWeight: "200",
                            fontSize: "14px",
                            textAlign: "left",
                        }}
                    >
                        {url}
                    </div></div>

            </div>

        </a>
    );
};

export default Card;
