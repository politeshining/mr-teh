import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const contactMethods = [
        {
            name: "Email",
            description: "Let's connect",
            icon: <Icon icon="mdi:email" />,
            iconStyle: "text-blue-500 bg-blue-500/10",
            bg: "bg-blue-500",
            buttonText: "Message",
            href: "mailto:politeshining46@gmail.com",
        },
        {
            name: "WhatsApp",
            description: "Available for work",
            icon: <Icon icon="mdi:whatsapp" />,
            iconStyle: "text-green-500 bg-green-500/10",
            bg: "bg-[#25d366]",
            buttonText: "Message",
            href: "https://wa.me/2349044151503",
        },
    ];

    const { register, handleSubmit, reset, formState: { _, isSubmitting } } = useForm()
    const [formMessage, setFormMessage] = useState('')
    const [formStatus, setFormStatus] = useState('')

    const onInvalid = () => {
        setFormStatus('error')
        setFormMessage("Please fill in all fields.");
    };

    const onSubmit = async (data) => {
        setFormStatus('')
        setFormMessage('')

        try {
            await emailjs.send(
                "service_kqqdnql",
                "template_9g5tzzf", {
                user_name: data.name,
                user_email: data.email,
                user_message: data.message,
            },
                "IYiHB5r6GRzJYQyZz"
            );

            setTimeout(() => {
                setFormStatus('success')
                setFormMessage('Message sent successfully.')
            }, 5000);

            reset()
        } catch (error) {
            console.log(error)
            setFormStatus('error')
            setFormMessage('Something went wrong. Please try again.')
        }
    }

    return (
        <section id="contact" className="min-h-screen bg-black px-6 py-20 text-white md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10  shadow-2xl backdrop-blur-xl">
                <div className="grid lg:grid-cols-2 bg-white/6 rounded-tl-[60px] [corner-top-left-shape:bevel]">

                    {/* LEFT SIDE */}
                    <div className="relative flex flex-col justify-between border-b border-white/10 p-8 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
                        <div className="space-y-4">
                            {contactMethods.map((contact) => (
                                <a
                                    key={contact.name}
                                    href={contact.href}
                                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined
                                    }
                                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 p-3 transition duration-300 hover:bg-white/10"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${contact.iconStyle}`}>
                                            {contact.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold">{contact.name}</h3>

                                            <p className="mt-1 text-xs text-white/40">{contact.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 bg-black/40 rounded-full min-[490px]:pl-2.5 min-[490px]:pr-2 min-[490px]:py-1.5">
                                        <span className="hidden text-xs text-white/30 transition group-hover:text-white/60 min-[490px]:block">
                                            {contact.buttonText}
                                        </span>

                                        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${contact.bg} text-xl text-white`}>
                                            {contact.icon}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-10 flex items-center gap-5">
                            <a
                                href="https://github.com/politeshining"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/50 transition hover:text-white text-2xl"
                                aria-label="GitHub"
                            >
                                <Icon icon="mdi:github" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/darius-mark-29591b2aa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/50 transition hover:text-white text-2xl"
                                aria-label="LinkedIn"
                            >
                                <Icon icon="mdi:linkedin" />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <div className="p-4 sm:p-6 lg:p-8">
                        <form className="space-y-5 relative" onSubmit={handleSubmit(onSubmit, onInvalid)}>

                            <div>
                                <label htmlFor="name" className="sr-only">Your full name</label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full border border-white/5 bg-white/4 px-5 py-4 text-sm rounded-2xl text-white outline-none placeholder:text-white/30 transition focus:border-white/20 focus:bg-white/[0.07]"
                                    name="user_name"
                                    {...register('name', { required: true })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">Your Email</label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-white/5 bg-white/4 px-5 py-4 text-sm rounded-2xl text-white outline-none placeholder:text-white/30 transition focus:border-white/20 focus:bg-white/[0.07]"
                                    name="user_name"
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Please enter a valid email address'
                                        }
                                    })}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="sr-only">Your Message</label>

                                <textarea
                                    id="message"
                                    rows="8"
                                    placeholder="Your Message"
                                    className="w-full resize-none border border-white/5 bg-white/4 px-5 py-4 text-sm rounded-2xl text-white outline-none placeholder:text-white/30 transition focus:border-white/20 focus:bg-white/[0.07]"
                                    {...register('message', { required: true })}
                                />
                            </div>

                            {/* Success message */}
                            {formMessage && (
                                <p className={`text-sm  absolute bottom-13 ${formStatus == 'error' ? "text-red-400" : "text-green-400"}`}>
                                    {formMessage}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group flex items-center justify-self-center gap-3 rounded-xl bg-black/90 px-7 py-4 mt-12 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                            >
                                <Icon
                                    icon={isSubmitting ? "lucide:loader-circle" : "lucide:send"}
                                    className={`size-4 ${isSubmitting ? "animate-spin" : "transition-transform group-hover:translate-x-1"}`}
                                />
                                {isSubmitting ? "Sending..." : "Send Now"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;