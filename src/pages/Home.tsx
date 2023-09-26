import { Sequence, Speed, TypeAnimation } from 'react-type-animation';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { t } = useTranslation();

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
                                {t('home-page.title')}
                                <span className="name sl:ml-2 max-sl:block">{t('name')}</span>
                            </h3>
                            <h3 className="my-profession max-sl:h-20 mb-5">
                                {t('home-page.profession.I-m')}
                                <TypeAnimate
                                    sequence={[
                                        t('home-page.profession.list.item1'),
                                        1000,
                                        t('home-page.profession.list.item2'),
                                        1000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h3>
                            <p>{t('home-page.description')}</p>
                            <button
                                className="btn"
                                onClick={() => (window.location.href = 'https://www.linkedin.com/in/sinaver-osmanov/')}
                            >
                                {t('home-page.linkedIn-button')}
                            </button>
                        </div>
                        <div className="pl-10 flex-col max-lg:basis-full basis-5/12 flex items-center justify-center">
                            <div className="max-w-[300px] max-lg:after:hidden max-lg:before:hidden home-img">
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

const TypeAnimate = React.memo(function ({
    sequence,
    speed,
    repeat,
}: {
    sequence: Sequence;
    speed?: Speed;
    repeat?: number;
}) {
    const {
        i18n: { language },
    } = useTranslation();

    const [uniqueKey, setUniqueKey] = useState<number>(() => Date.now());

    useEffect(() => {
        setUniqueKey(Date.now());
    }, [language]);

    return (
        <TypeAnimation
            key={uniqueKey}
            sequence={sequence}
            wrapper="span"
            speed={speed}
            className="ml-2"
            repeat={repeat}
        />
    );
});