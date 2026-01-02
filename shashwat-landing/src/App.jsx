import { useState } from "react";
import logo from "./assets/shaswat logo.png";
import doctorImg from "./assets/doctor Img.jpg";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    problem: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // ✅ Only digits allowed in phone
    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

    setForm({ ...form, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      alert("Please enter valid 10 digit WhatsApp number");
      return;
    }

    setLoading(true);

    // ✅ Auto add 91
    const payload = {
      name: form.name,
      phone: "91" + form.phone,
      problem: form.problem
    };

    try {
      await fetch("http://165.232.160.165:5678/webhook/whatsapp-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      setSubmitted(true);
      setForm({ name: "", phone: "", problem: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= THANK YOU PAGE ================= */
  if (submitted) {
    return (
      <div style={thank.page}>
        <div style={thank.card}>
          <h1>✅ Thank You!</h1>
          <p>
            Aapka form successfully submit ho gaya hai.
            <br />
            WhatsApp par guidance message aa raha hai 📲
          </p>
        </div>
      </div>
    );
  }

  /* ================= MAIN PAGE ================= */
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
      </div>

      {/* PROBLEMS */}
      <div className="container">
        <h2 className="section-title">Hormonal Imbalance ke Common Signs</h2>

        <div className="cards">
          <div className="card">PCOD / PCOS – irregular periods</div>
          <div className="card">Thyroid – weight gain, hair fall</div>
          <div className="card">Fatigue & low energy</div>
          <div className="card">Hair fall & acne</div>
          <div className="card">Mood swings & anxiety</div>
          <div className="card">Weak digestion</div>
        </div>
      </div>

      {/* DOCTOR */}
      <div className="container doctor-section">
        <h2 className="section-title">Guided by Vedic Wisdom</h2>

        <img
          src={doctorImg}
          className="doctor-img"
          alt="Dr. Swami Bhakti Prasad Ji"
        />

        <h3 className="doctor-name">Dr. Swami Bhakti Prasad Ji</h3>

        <p className="doctor-desc">
          Vedic healing ke madhyam se hormonal imbalance ka
          natural aur root-level solution.
        </p>
      </div>

      {/* FORM */}
      <div className="container">
        <h2 className="section-title">
          Free Hormonal Guidance ke liye Form Bharein
        </h2>

        <form className="form-box" onSubmit={submitForm}>
          <input
            name="name"
            placeholder="Aapka Naam"
            value={form.name}
            required
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="WhatsApp Number (10 digit)"
            value={form.phone}
            maxLength="10"
            required
            onChange={handleChange}
          />

          <select
            name="problem"
            value={form.problem}
            required
            onChange={handleChange}
          >
            <option value="">Apni Problem Select karein</option>
            <option value="PCOD / PCOS">PCOD / PCOS</option>
            <option value="Thyroid">Thyroid</option>
            <option value="Weight Gain">Weight Gain</option>
            <option value="Hair Fall">Hair Fall</option>
            <option value="Other">Other</option>
          </select>

          <button className="btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit & Get WhatsApp Guidance"}
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <div className="footer">
        वैदिक शाश्वत चिकित्सा • Natural • Vedic • Sustainable Healing
      </div>
    </>
  );
}

/* ================= THANK YOU STYLES ================= */
const thank = {
  page: {
    height: "100vh",
    background: "#e8f5e9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
  }
};
