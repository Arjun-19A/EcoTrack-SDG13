import "../styles/settings.css";

export default function Settings() {
  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="settings-card">
        <h2>Profile Settings</h2>

        <p>Manage your account preferences and sustainability goals.</p>

        <div className="setting-item">
          <label>Email Notifications</label>

          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <label>Weekly Carbon Reports</label>

          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
