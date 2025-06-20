import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { motion } from 'motion/react'

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
        
    }
    return (
        <>
            <div className="flex flex-col mx-auto space-y-5 items-center w-full sm:w-auto">
                <motion.div className="flex flex-col rounded-xl shadow-xl bg-gray-800 p-6"
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x:0
                    }}
                    viewport={{
                        once: false,
                        amount: 0.4
                    }}
                    transition={{
                        type: "easeInOut",
                        duration: 0.8,
                    }}
                >
                    <h1 className="text-center font-bold text-5xl pb-8 pt-4">Contact Me!</h1>
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
                </motion.div>

                <motion.div className="w-full bg-gray-800 p-6 rounded-xl flex flex-col xl:flex-row gap-y-3 justify-center items-center gap-x-3"
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x:0
                    }}
                    viewport={{
                        once: false,
                        amount: 0.4
                    }}
                    transition={{
                        type: "easeInOut",
                        duration: 0.8,
                    }}
                >
                    <FaLinkedin />
                    <p>joshua-jeong</p>
                    <IoMail />
                    <p>joshua.jeong2@gmail.com</p>
                    <FaGithub />
                    <p>joshuajeong1</p>
                </motion.div>
            </div>
        </>
    );
}
export default Contact;