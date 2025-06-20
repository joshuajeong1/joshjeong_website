import { useState } from 'react';

function Contact() {
    const [data, setData] = useState({
            name: "",
            subject: "",
            email: "",
            message: "",
    });
    const formChanged = (e) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }
    const formSubmitted = (e) => {
        e.preventDefault();

        const formData = {
            name: data.name,
            subject: data.subject,
            email: data.email,
            body: data.message
        };

        const resp = fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        alert("Email sent successfully!");
        
    }
    return (
        <>
            <div className="mx-auto p-6 rounded-2xl shadow-xl bg-gray-800">
                <h1 className="text-center font-bold text-5xl pb-8 pt-4">Get In Touch</h1>
                <form onSubmit={formSubmitted} className="p-y-5 space-y-3">
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={data.name}
                    onChange={formChanged}
                    required
                    />
                    <input 
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={data.subject}
                    onChange={formChanged}
                    required
                    />
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={data.email}
                    onChange={formChanged}
                    required
                    />
                    <textarea 
                    name="message"
                    placeholder="Your message"
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    rows={5}
                    value={data.message}
                    onChange={formChanged}
                    required
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-emerald-500 px-4 py-2 rounded-md text-white mt-4 hover:bg-emerald-600 transition"
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Contact;