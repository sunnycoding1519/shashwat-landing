import { useState } from "react";
import logo from "./assets/shaswat logo.png";
import doctorImg from "./assets/doctor Img.jpg";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    problem: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();

    await fetch("http://165.232.160.165:5678/webhook/whatsapp-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Dhanyavaad! Aapko WhatsApp par message bhej diya gaya hai.");
    setForm({ name: "", phone: "", problem: "" });
  };

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <img src={logo} className="logo-center" alt="Shashwat Chikitsa" />

        <h1>
          Hormonal Imbalance ka <br />
          Vedic & Natural Solution 🌿
        </h1>

        <p>
          PCOD, Thyroid, Weight Gain, Hair Fall, Mood Swings jaise issues
          sirf symptoms nahi hote — ye sharir ke andar ho rahe
          <b> hormonal imbalance ke clear signals</b> hote hain.
        </p>

        <p>
          <b>Shashwat Chikitsa</b> me hum root-cause par kaam karte hain,
          taaki healing prakritik, gehri aur long-term ho —
          bina side effects aur bina lifelong medicines.
        </p>
      </div>

      {/* PROBLEMS */}
      <div className="container">
        <h2 className="section-title">Hormonal Imbalance ke Common Signs</h2>
        <p className="section-subtitle">
          Agar aap in lakshanon ko regular experience kar rahe hain,
          toh ye hormonal imbalance ka sanket ho sakta hai.
        </p>

        <div className="cards">
          <div className="card">PCOD / PCOS – irregular periods, pain</div>
          <div className="card">Thyroid – weight gain, hair fall</div>
          <div className="card">Constant fatigue & low energy</div>
          <div className="card">Hair fall, acne & skin issues</div>
          <div className="card">Mood swings, anxiety, irritation</div>
          <div className="card">Weak digestion & low immunity</div>
        </div>
      </div>

      {/* DOCTOR */}
      <div className="container doctor-section">
        <h2 className="section-title">Guided by Vedic Wisdom</h2>

        <div className="doctor-img-wrap">
          <img
            src={doctorImg}
            className="doctor-img"
            alt="Dr. Swami Bhakti Prasad Ji"
          />
        </div>

        <h3 className="doctor-name">Dr. Swami Bhakti Prasad Ji</h3>

        <p className="doctor-desc">
          Dr. Swami Bhakti Prasad Ji ek anubhavi vaidik healer hain,
          jinhone apna jeevan sharir, mann aur urja ke santulan ko
          samajhne aur sikhane me samarpit kiya hai.
          <br /><br />
          Unke guidance me hormonal imbalance jaise complex issues ko
          bhi natural lifestyle correction, diet aur vaidik principles
          ke madhyam se address kiya jata hai — bina harmful medicines.
        </p>
      </div>

      {/* FORM */}
      <div className="container">
        <h2 className="section-title">
          Free Hormonal Guidance ke liye Form Bharein
        </h2>
        <p className="section-subtitle">
          Form submit karte hi aapko WhatsApp par confirmation message milega.
        </p>

        <form className="form-box" onSubmit={submitForm}>
          <input name="name" placeholder="Aapka Naam" required onChange={handleChange} />
          <input name="phone" placeholder="WhatsApp Number (91XXXXXXXXXX)" required onChange={handleChange} />
          <select name="problem" required onChange={handleChange}>
            <option value="">Apni Problem Select karein</option>
            <option>PCOD / PCOS</option>
            <option>Thyroid</option>
            <option>Weight Gain</option>
            <option>Hair Fall</option>
            <option>Other</option>
          </select>

          <button className="btn">
            Submit & Get WhatsApp Guidance
          </button>
        </form>
      </div>

      {/* FLOATING CTA */}
      <div
        className="floating-btn"
        onClick={() =>
          document.querySelector(".form-box").scrollIntoView({ behavior: "smooth" })
        }
      >
        Join Now 🌿
      </div>

      {/* FOOTER */}
      <div className="footer">
        वैदिक शाश्वत चिकित्सा • Natural • Vedic • Sustainable Healing
      </div>
    </>
  );
}
