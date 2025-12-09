import React from "react";

export const FooterComponent: React.FC = () => {
    return (
        <footer className="py-16 bg-black text-gray-400 px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-white text-xl mb-3">designer</h3>
                    <p className="text-gray-500">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </p>
                </div>

                <div>
                    <h4 className="text-white mb-3">Quick links</h4>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>Service</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white mb-3">Important</h4>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>

            <p className="text-center mt-16 text-gray-600">
                © 2025 All Rights Reserved.
            </p>
        </footer>
    );
};
