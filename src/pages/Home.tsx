import { TypeAnimation } from 'react-type-animation';
import { LazyMotion, domAnimation, m } from 'framer-motion';

function Home() {
    return (
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
                className="home active section"
                id="home"
            >
                <div className="container ls:pt-52 max-ls:py-16">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-col basis-7/12 max-lg:basis-auto max-lg:mb-10 home-info">
                            <h3 className="hello">
                                Hello, my name is
                                <span className="name sl:ml-2 max-sl:block">Sinaver Osmanov</span>
                            </h3>
                            <h3 className="my-profession max-sl:h-20 mb-5">
                                I'm a
                                <TypeAnimation
                                    sequence={['Front end Developer', 1000, 'Freelancer', 1000]}
                                    wrapper="span"
                                    speed={50}
                                    className="ml-2"
                                    repeat={Infinity}
                                />
                            </h3>
                            <p>
                                I work to make a better web; one that is fast, easy to use, beautiful, accessible to
                                all, and frustration-free. I create successful websites that are fast, easy to use, and
                                built with best practices. My main experience is in front-end development but I also
                                have a passion for design. I believe having experience in both design and development
                                allows for making the most optimal user experiences.
                            </p>
                            <button
                                className="btn"
                                onClick={() => (window.location.href = 'https://www.linkedin.com/in/sinaver-osmanov/')}
                            >
                                My Linkedin
                            </button>
                        </div>
                        <div className="flex-col max-lg:basis-full basis-5/12 flex items-center justify-center">
                            <div className="max-lg:after:hidden max-lg:before:hidden home-img w-52">
                                <img src={'./assets/avatar.png'} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}

export default Home;