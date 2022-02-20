import React from 'react';

export default function Contact() {
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" placeholder="This form is not currently active, but will be soon!" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                github, linkedin, gmail
            </div>
        </section>
    )
}