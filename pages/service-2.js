// import React from "react";
// import ServiceBGC from "../src/components/common/ServiceBGC";
// import ServicePricingSection from "../src/components/common/ServicePricingSection";
// import ServiceProcessSection from "../src/components/common/ServiceProcessSection";
// import Service2Area from "../src/components/Service-2/Service2Area";
// import Service2SkillArea from "../src/components/Service-2/Service2SkillArea";
// import Footer2 from "../src/layout/Footer/Footer2";
// import Header1 from "../src/layout/Header/Header1";
//
// const service2 = () => {
//     return (
//         <>
//             {/*====== Header Start ======*/}
//             <Header1 />
//             {/*====== Header End ======*/}
//             {/*====== Breadcrumb section Start ======*/}
//             <ServiceBGC />
//             {/*====== Breadcrumb section End ======*/}
//             {/*====== Service Area Start ======*/}
//             <Service2Area />
//             {/*====== Service Area End ======*/}
//             {/*====== Process Area Start ======*/}
//             <ServiceProcessSection />
//             {/*====== Process Area End ======*/}
//             {/*====== Skill area Start ======*/}
//             <Service2SkillArea />
//             {/*====== Skill area End ======*/}
//             {/*====== Pricing Section Start ======*/}
//             <ServicePricingSection />
//             {/*====== Pricing Section End ======*/}
//             {/*====== Footer Start ======*/}
//             <Footer2 />
//             {/*====== Footer End ======*/}
//         </>
//     );
// };
//
// export default service2;

// import React from "react";
import HomeHeader from "../src/layout/Header/HomeHeader";
import Footer1 from "../src/layout/Footer/Footer1";
import styled from "styled-components";
import React, {useState, useEffect} from "react";
import Njson from "/public/json/n.json"


const API_ENDPOINT ="/public/json/n.json"
function Message({ author, time, children }) {
    return (
        <MessageContainer>
            <MessageHead>
                <MessageAuthor>{author}</MessageAuthor>
                <MessageTime>{time}</MessageTime>
            </MessageHead>
            <MessageBody>{children}</MessageBody>
        </MessageContainer>
    );
}

function App() {
    const [messages, setMessages] = useState([]);
    const [messageMessageApiError, setMessageApiError] = useState(null);
    useEffect(() => {
        fetch(API_ENDPOINT)
            .then((res) => res.json())
            .then((data) => {
                setMessages(data);
            })
            .catch((err) => {
                setMessageApiError(err.message);
            });
    }, []);
    return (
        <Page>
            <Title>??????????????????</Title>
            <MessageForm>
                <MessageLable>????????????</MessageLable>
                <MessageTextArea rows={8} />
                <SubmitButton>??????</SubmitButton>
            </MessageForm>
            <MessageList>
                <Message author={"Heidi"} time="2022-11-05 11:12">
                    ????????????????????????????????????????????????????????????????????????
                </Message>
            </MessageList><MessageList>
            <Message author={"Eric"} time="2022-09-25 15:10">
                ??????????????????????????? (Band2)
            </Message>
        </MessageList><MessageList>
            <Message author={"SamSam"} time="2020-10-17 12:12:12">
                Re ???, ?????????????????????????????????????????????
            </Message>
        </MessageList>
        </Page>
    );
}
const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: "monospace", "???????????????";
  box-shadow: 0px 0px 16px rgb(199, 197, 197);
  border-radius: 8px;
  padding: 12px 28px;
  color: #6c6c6c;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
`;

const MessageForm = styled.form`
  margin-top: 16px;
  font-size: 18px;
`;
const MessageLable = styled.div``;

const MessageTextArea = styled.textarea`
  display: block;
  margin-top: 8px;
  width: 95%;
  border-color: rgba(0, 0, 0, 0.125);
`;
const SubmitButton = styled.button`
  margin-top: 8px;
  color: #ddd;
  background-color: #343a40;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 12px;
`;

const MessageList = styled.div`
  margin-top: 16px;
`;
const MessageContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 16px;
  border-radius: 4px;
`;

const MessageHead = styled.div`
  display: flex;
`;

const MessageAuthor = styled.div`
  margin-right: 12px;
  color: #232323;
`;

const MessageTime = styled.div``;

const MessageBody = styled.div`
  margin-top: 8px;
  word-break: break-all;
  white-space: pre-line;
`;


export default App;


