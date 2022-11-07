import React from "react";
import BlogArea from "../src/components/Blog/BlogArea";
import BlogBreadcrumbSection from "../src/components/Blog/BlogBreadcrumbSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const blog = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <BlogBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Blog Area Start ======*/}
            <BlogArea />
            {/*====== Blog Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default blog;
