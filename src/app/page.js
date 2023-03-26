'use client'
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { SlideShow } from './components/SlideShow';
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <SlideShow />
      <Footer />
    </>
  );
}
