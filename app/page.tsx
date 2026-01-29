"use client";

import react from "react";

export default function home() {
  return (
    <main style={{ padding: "2rem", maxwidth: 700, margin: "40px auto", fontfamily: "sans-serif" }}>
      <h1>welcome to vrinda doc search!</h1>
      <p>
        🎉 your application is now deployed on vercel and ready for use.<br />
        <b>backend:</b> connected to convex.<br />
        <b>google drive sync and gemini ai integration</b> environment variables are set up.
      </p>

      <h3>google apps script urls & sheet id:</h3>
      <ul>
        <li>
          <b>app script api url:</b><br />
          <code>vite_app_script_url=https://script.google.com/macros/s/akfycbzq7-drxex5dbccaxfsqdgjubdawktihomdz1placdknrpkkfbo5znlvntyn7liczz_mq/exec</code>
        </li>
        <li>
          <b>google sheet id:</b><br />
          <code>vite_google_sheet_id=1fuhu5fb5z77aq4caik4zybq-dpgjf0xlzedsxigt9m8</code>
        </li>
        <li>
          <b>alternate google drive script url:</b><br />
          <code>https://script.google.com/macros/s/akfycby6xbpua7xdjibinbg8-cmbv1ig7hy5-bukq6q4ovsjfbdxz3jdkyk08y9pui4s2ciz7a/exec</code>
        </li>
      </ul>

      <h3>google gemini ai key</h3>
      <code>aizasychaqzjoajqk9oz5osmpctwbtvpgdwdkxq</code>

      <hr />
      <p>
        {/* next: replace this component with your actual doc search ui, data fetchers, and features.
        you can use fetch to connect to your google apps script api or convex backend here! */}
      </p>
    </main>
  );
}

