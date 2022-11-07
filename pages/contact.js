import React from "react";
import ContactArea from "../src/components/Contact/ContactArea";
import ContactBreadcrumbSection from "../src/components/Contact/ContactBreadcrumbSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const contact = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ContactBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Conatct Area Start ======*/}
            <ContactArea />
            {/*====== Conatct Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default contact;
