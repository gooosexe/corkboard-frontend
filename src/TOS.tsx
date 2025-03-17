import { Header } from "./components/header"

const TOS: React.FC = () => {
  return (
    <>
		<Header />
		<div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>Terms of Service</h1>
      <p><strong>Effective Date:</strong> March 15, 2025</p>
      <p><strong>Last Updated:</strong> March 15, 2025</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By using <strong>Corkboard</strong> ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>You are solely responsible for the content you post.</li>
        <li>You agree <strong>not</strong> to post illegal, harmful, or copyrighted content.</li>
        <li>You agree <strong>not</strong> to use the Service for harassment, defamation, or spam.</li>
      </ul>

      <h2>3. Content Moderation & Removal</h2>
      <p><strong>Corkboard</strong> does <strong>not</strong> actively moderate content but reserves the right to remove any content that violates laws or these Terms.</p>

      <h2>4. No Liability</h2>
      <ul>
        <li>We are <strong>not responsible</strong> for user-generated content.</li>
        <li>We do <strong>not guarantee</strong> the accuracy or safety of any content posted.</li>
        <li>We are <strong>not liable</strong> for any damages arising from the use of this Service.</li>
      </ul>

      <h2>5. Reporting to Law Enforcement</h2>
      <p>If we become aware of content that violates laws (including but not limited to threats, child exploitation, or other illegal activity), we may report it to the appropriate law enforcement authorities and provide relevant data as required by law.</p>

      <h2>6. Governing Law</h2>
      <p>These Terms are governed by the laws of Canada.</p>

      <p>If you have any questions, contact us at <a href="mailto:corkboard-admin@gmail.com">corkboard-admin[at]gmail[dot]com</a>.</p>
    </div>
	</>
  )
}

export default TOS;