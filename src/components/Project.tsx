import React from "react";
import mock01 from '../assets/images/Project picture/project1.png';
import mock02 from '../assets/images/Project picture/project2.png';
import mock03 from '../assets/images/Project picture/project3.png';
import mock04 from '../assets/images/Project picture/project4.png';
import mock05 from '../assets/images/Project picture/project5.png';
import mock06 from '../assets/images/Project picture/project6.png';
import mock07 from '../assets/images/Project picture/project7.png';
import mock08 from '../assets/images/Project picture/project8.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Schedura</h2>
                <p>A community-driven productivity platform that enables users to manage to-do lists, track study progress, collaborate with peers, and share posts with images and descriptions to foster engagement and accountability.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>ThaiPlate-ANPR-YOLO</h2>
                <p>An Automatic Number Plate Recognition (ANPR) system for Thai license plates using a YOLO-based object detection model to accurately detect license plates from vehicle images, with a ready-to-run Jupyter Notebook designed for seamless OCR pipeline integration.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>EduVerse</h2>
                <p>A full-featured Learning Management System (LMS) designed to manage courses, track learner progress, and deliver a seamless online learning experience through an intuitive dashboard and centralized platform.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>GreenBridge</h2>
                <p>An e-learning platform for agriculture that provides structured courses on sustainable farming and modern agricultural technologies, enhanced with an AI chatbot to assist learners with personalized guidance and on-demand support.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Optimizing Human–AI Collaboration in Portfolio Management</h2>
                <p>analyzing the performance and trust dynamics of hybrid advisory systems, focusing on how human decision-making and AI recommendations can be effectively integrated in portfolio management.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Unity Care</h2>
                <p>An emergency response application designed to streamline rescue operations by enabling fast incident reporting, verified information flow, and real-time coordination between civilians, volunteers, and emergency responders.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Saduak</h2>
                <p>We are building more than just a delivery app — Saduak is a campus-focused food ecosystem designed to solve real-life convenience challenges. Our mission is to make food access easier, safer, and fairer for students, employees, and local vendors alike.</p>
            </div>
            <div className="project">
                <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                <h2>BitChat</h2>
                <p>An enterprise chatbot powered by LLM and RAG, designed to support administrative tasks by enabling internal document retrieval, answering organizational queries, and improving operational efficiency within companies.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;