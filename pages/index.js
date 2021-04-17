import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const Player = dynamic(import('components/player'), {
    ssr: false,
    loading: () => <p>Loading player...</p>,
  });
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="landing" style={{display: loading ? 'flex' : 'none'}}>
          <img src="/images/letter.png" />
          <h3>15.06.19</h3>
        </div>

        <header>
          <div className="section_1_menu">
            <h1>RizkiaJannah.</h1>
            <ul>
              <li className="items"><a href="#one">Our Story</a></li>
              <li className="items"><a href="#two">Invitation</a></li>
              <li className="items"><a href="#map">Getting There</a></li>
            </ul>
          </div>
        </header>

        <section className="section_1">
          <div className="flower">
            <div className="circle"></div>
            <div className="bunga_0"><img src="/images/landing/ea71bb_9273ad06aa58469ab6d1a5d0b4fc1cb4mv2_d_1572_1746_s_2.png" /></div>
            <div className="bunga_1"><img src="/images/landing/ea71bb_7a09eb512648488ab25b20a1963aa3famv2.png" /></div>
            <div className="bunga_2"><img src="/images/landing/ea71bb_d8021448528d4101a265cda589b7bbe7mv2.png" /></div>
            <div className="bunga_3"><img src="/images/landing/ea71bb_d3a6b7327e5f43a88fd7f46f2ec6c71dmv2.png" /></div>
            <div className="bunga_4"><img src="/images/landing/ea71bb_406786015c494d89a278875769cdeafbmv2.png" /></div>
            <div className="bunga_5"><img src="/images/landing/ea71bb_276146657a6e408f952e89a9e90a9f28mv2.png" /></div>
            <div className="bunga_6"><img src="/images/landing/ea71bb_f2a748daf68345828eb82673179f2e47mv2.png" /></div>
            <div className="bunga_7"><img src="/images/landing/ea71bb_fbf224fb0b774494a72383de9b139d30mv2.png" /></div>
            <div className="bunga_8"><img src="/images/landing/ea71bb_d7799aaa6ea54bdd9cc092de32334c91mv2.png" /></div>
            <div className="bunga_9"><img src="/images/landing/ea71bb_6ddba9a5c2c641b28affaa9173df0b5fmv2_d_1300_1286_s_2.png" /></div>
            <div className="text">
              <h1>Rizkia</h1>
              <h1>&amp;</h1>
              <h1>Fufud</h1>
            </div>
          </div>
          <div className="typo-section-1">
            <h3>Are Getting Married</h3>
            <h1>15 Juni 2019</h1>
          </div>
          <p className="typo2-section-1">Mahkota Cafe &amp; Resto. <br /> Jl. Raya Jombang No. 88 Babat, Lamongan.</p>
        </section>

        <section className="section_2" id="one">
          <div className="container">
            <div className="content-2">
              <h1 className="typo-header">The Story</h1>
              <div className="txt">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <p>Feel free to drag and drop me anywhere you like on your page. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
              </div>
            </div>
          </div>

          <div className="container-2">
            <div className="bg-color">
              <div className="myvideo">
                <Player />
                <div className="typo-section-2">
                  <h3>Engagement</h3>
                  <h1>01 Desember 2018</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_3">
          <div className="galleries section-container">
            <h1 className="title">The Gallery</h1>
            <div className="row">
              <div className="col col-left">
                <span className="img-1"><img src="/images/galleries/img1.jpg" /></span>
                <span><img src="/images/galleries/letter.jpg" /></span>
              </div>
              <div className="col col-middle">
                <span><img src="/images/galleries/img3.jpg" /></span>
                <span><img src="/images/galleries/img2.jpg" /></span>
              </div>
              <div className="col col-right">
                <span className="img-flower"><img src="/images/bunga-01.png" /></span>
                <span><img src="/images/galleries/img5.jpg" /></span>
                <span className="img-2"><img src="/images/galleries/img4.jpg" /></span>
              </div>
            </div>
          </div>
        </section>

        <section className="section_4" id="two">
          <div className="invitation section-container">
            <h1 className="title">Rizkia<br />&amp; Fufud</h1>
            <div className="event">
              <p>Kehadiran adalah silaturahmi, restu adalah do'a maka tiada yang dapat membuat kami bahagia selain hadirnya Bapak/ Ibu/ Saudara untuk memberikan do'a restu kepada mempelai berdua</p>
              <h2>Rizkia Nurjannah &amp; Fufud Fauzidin</h2>
              <div className="row">
                <div className="resepsi">
                  <img src="/images/landing/ea71bb_6ddba9a5c2c641b28affaa9173df0b5fmv2_d_1300_1286_002.png" />
                  <div className="span">
                    <h1>Resepsi</h1>
                    <p>Sabtu, 15 Juni 2019</p>
                    <p>Pukul 13.00 - 15.00</p>
                    <p><a href="https://goo.gl/maps/1LVNb8H7mBcaTbn6A" target="_blank">Mahkota Cafe &amp; Resto</a></p>
                    <p><a href="https://goo.gl/maps/1LVNb8H7mBcaTbn6A" target="_blank">Jl. Raya Jombang No. 88 Babat, Lamongan</a></p>
                  </div>
                </div>
                <div className="akad">
                  <img src="/images/landing/ea71bb_51664b73722446b18b9b4f81331b280fmv2.png" />
                  <div className="span">
                    <h1>Akad Nikah</h1>
                    <p>Sabtu, 15 Juni 2019</p>
                    <p>Kediaman mempelai wanita</p>
                    <p><a href="https://goo.gl/maps/i56b1TdgyHKXNPRL8" target="_blank">Jl. Jombang Roworejo IV Babat, Lamongan</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="map">
            <p className="text-map">Google Maps</p>
          </div>
        </section>

        <div className="blockquote">
          <blockquote>
            “ Semoga Allah menghimpun yang terserak dari kalian berdua, memberkati kalian berdua dan kiranya Allah meningkatkan kualitas keturunan mereka, menjadikan pembuka pintu - pintu rahmat, sumber ilmu dan hikmah serta pemberi rasa aman bagi umat ”
            <i>Doa Rasulallah SAW ketika menikahkan putrinya Fatimah Az-Zahra dengan Ali Bin Abithalib</i>
          </blockquote>
        </div>

        <footer>
          <p>Rizkia Nurjannah &amp; Fufud Fauzidin</p>
          <p>Copyright &copy; 2019 rizkiajannah.com</p>
        </footer>
      </main>
    </>
  )
}
