import React from "react";
import ServiceBGC from "../src/components/common/ServiceBGC";
import ServiceArea from "../src/components/Service/ServiceArea";
import ServiceNewsSection from "../src/components/Service/ServiceNewsSection";
import ServiceSkillArea from "../src/components/Service/ServiceSkillArea";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const service = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ServiceBGC />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Service Area Start ======*/}
            <ServiceArea />
            {/*====== Service Area End ======*/}
            {/*====== Skill area Start ======*/}
            <ServiceSkillArea />
            {/*====== Skill area End ======*/}
            {/*====== News Section start ======*/}
            <ServiceNewsSection />
            {/*====== News Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default service;
