import React from "react";

export default function Privacy() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p>
        <strong>Last Updated:</strong> [Insert Date]
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect <strong>only</strong> the following information when you use{" "}
        <strong>Corkboard</strong>:
      </p>
      <ul>
        <li>
          <strong>IP Address</strong> (for security and abuse prevention)
        </li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>Your IP address is collected for:</p>
      <ul>
        <li>Preventing spam and abuse</li>
        <li>Ensuring site functionality</li>
        <li>Complying with legal obligations</li>
      </ul>

      <h2>3. Data Retention</h2>
      <p>
        We store IP addresses <strong>temporarily</strong> and automatically
        delete them after [X days].
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We <strong>do not sell</strong> or share your data except:
      </p>
      <ul>
        <li>If required by law enforcement</li>
        <li>To prevent fraud or abuse</li>
      </ul>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your location, you may have rights regarding your data
        (e.g., GDPR, CCPA). Contact us at{" "}
        <a href="mailto:[your email]">[your email]</a> for requests.
      </p>

      <h2>6. Security</h2>
      <p>
        We take reasonable steps to protect your IP address from unauthorized
        access.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>We may update this Privacy Policy, and changes will be posted here.</p>

      <h2>8. Contact Us</h2>
      <p>
        If you have questions, contact us at{" "}
        <a href="mailto:[your email]">[your email]</a>.
      </p>
    </div>
  );
}
