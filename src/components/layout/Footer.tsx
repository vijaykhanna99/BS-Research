"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {


    return (
        <footer className="bg-gray-900 text-white py-4 w-full mt-auto">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="">
                        <h3 className="text-xl font-semibold underline mb-2">
                            Contact Us
                        </h3>
                        <div className="space-y-2">
                            <p>Indian Institute of Science, Bangalore</p>
                            <p>080 2293 4060</p>
                            <p>admission.ug@iisc.ac.in</p>
                        </div>
                        <div>
                            <div className="flex space-x-4 mt-5">
                                <a
                                    href="https://x.com/iiscbangalore"
                                    className="hover:text-gray-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a
                                    href="https://in.linkedin.com/school/indian-institute-of-science/"
                                    className="hover:text-gray-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/iiscbangalore/"
                                    className="hover:text-gray-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-facebook text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold underline mb-2">
                            Quick Links
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">


                            <li>
                                <a
                                    href="https://scouncil.iisc.ac.in/"
                                    target="_blank"
                                    className="hover:text-gray-300"
                                >
                                    Student Council
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.iisc.ac.in/health-centre/"
                                    target="_blank"
                                    className="hover:text-gray-300"
                                >
                                    {" "}
                                    Health Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://iisc.ac.in/complaints/"
                                    target="_blank"
                                    className="hover:text-gray-300"
                                >
                                    Internal Complaint Committee
                                </a>
                            </li>


                            <li>
                                <Link href="/alumni" className="hover:text-gray-300">
                                    Alumni
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} Indian Institute of Science. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
