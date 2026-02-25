import { useEffect } from "react";

export default function ThankYou() {

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 14.00,
        currency: 'USD'
      });
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>Дякуємо за оплату!</h1>
      <p>Забирай доступ у групі Telegram.</p>
      <a
        href="https://t.me/kushnireducation"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "15px 25px",
          background: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Перейти в Telegram
      </a>
    </div>
  );
}
