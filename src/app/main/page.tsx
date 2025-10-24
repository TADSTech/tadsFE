"use client"
import { WhoWeAre } from '@/components/sections/about/WhoWeAre';
import { WhatWeDo } from '@/components/sections/about/WhatWeDo';
import {Header} from '../../components/sections/Header';
import {Hero} from '../../components/sections/Hero';
import { ClientSection } from '@/components/sections/Client';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/sections/Footer';
import { CTASection } from '@/components/sections/CTAsection';


export default function MainPage() {
    
    return (
        <div>
            <Header />
            <Hero />
            <WhoWeAre />
            <WhatWeDo />
            <TechStack />
            <ClientSection />
            <Projects />
            <CTASection />
            <Footer />
        </div>
    );
}
