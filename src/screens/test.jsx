import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExchangeCalculator from "../components/ExchangeCalculator";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function test() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <ExchangeCalculator />
            <Features />
            <Footer />
        </div>
    );
}
