import React, { useEffect } from 'react';

interface FooterProps {

};

const Footer = (props: FooterProps) => {
    return (
        <footer id="sticky-footer" className=" ms-auto  py-4 bg-primary text-white-50">
            <div className="px-4 mx-4 d-flex justify-content-end">
                <small>Copyright &copy; flyDubai</small>
            </div>
        </footer>
    )
};

export default Footer;