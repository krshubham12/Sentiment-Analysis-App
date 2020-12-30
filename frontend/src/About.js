import React from 'react'

export const About = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">About</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <strong>TechStack</strong>
                    <ul>
                        <li>Django</li>
                        <li>ReactJs</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <br/>
                    <strong>Libraries Used</strong>
                    <ul>
                        <li>vaderSentiment (for sentiment analysis)</li>
                        <li>django</li>
                        <li>djangorestframework</li>
                    </ul>
                    <br/>
                    <a href="https://github.com/krshubham12/Sentiment-Analysis-App" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}