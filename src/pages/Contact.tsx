import { SubmitHandler, useForm } from 'react-hook-form';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function Contact() {
    return (
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
                className="contact section"
                id="contact"
            >
                <div className="container py-16">
                    <div className="row">
                        <div className="flex-custom-full mb-14 section-title">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <h3 className="contact-title">Have You Any Questions ?</h3>
                    <h4 className="contact-sub-title">I'M AT YOUR SERVICES</h4>
                    <div className="row flex-wrap">
                        {/* Contact info item start  */}
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-brands fa-telegram"></i>
                            </div>
                            <h4>Write Me On</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://t.me/mr_osmanov')}
                            >
                                @Mr_Osmanov
                            </p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <h4>Address</h4>
                            <p>Crimea, Evpatoriya</p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <h4>Email</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://github.com/SinaverOsmanov')}
                            >
                                sinaver.osmanov@gmail.com
                            </p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-globe-asia"></i>
                            </div>
                            <h4>GitHub</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://github.com/SinaverOsmanov')}
                            >
                                SinaverOsmanov
                            </p>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://github.com/SinaverFrontent')}
                            >
                                SinaverFrontent
                            </p>
                        </div>
                        {/* Contact info item end  */}
                    </div>
                    <h3 className="contact-title">SEND ME AN EMAIL</h3>
                    <h4 className="contact-sub-title">I'M VERY RESPONSIVE TO MESSAGES</h4>
                    {/* Contact Form  */}
                    <div className="row">
                        <ContactForm />
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}

type FormValues = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

function ContactForm() {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

    return (
        <div className="flex-custom-full contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gap-x-3">
                    <div className="flex-col grow form-item">
                        <div className="form-group">
                            <input {...register('name')} type="text" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="flex-col grow form-item">
                        <div className="form-group">
                            <input {...register('email')} type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-custom-full form-item">
                        <div className="form-group">
                            <input
                                {...register('subject')}
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-custom-full form-item">
                        <div className="form-group">
                            <textarea
                                {...register('message')}
                                className="form-control"
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-custom-full form-item">
                        <button type="submit" className="btn">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}